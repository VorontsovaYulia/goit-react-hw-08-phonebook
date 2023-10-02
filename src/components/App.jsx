import { useEffect, lazy } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Layout } from "./Layout/Layout";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { refreshUser } from "redux/auth/authOperations";

const PhonebookPage = lazy(() => import('pages/PhonebookPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box sx={{ width: '100%', marginTop: 4 }}>
      <LinearProgress />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <PublicRoute redirectTo="phonebook" component={<LoginPage />} />
        }
        />
        <Route path="/register" element={
          <PublicRoute redirectTo="/phonebook" component={<RegisterPage />} />
        }
        />
        <Route path="/phonebook" element={
          <PrivateRoute redirectTo="/" component={<PhonebookPage />} />
        }
        />
          <Route path="*" element={
          <PublicRoute redirectTo="/phonebook" component={<LoginPage />} />
        }
        />
      </Route>
    </Routes>
  )
};

