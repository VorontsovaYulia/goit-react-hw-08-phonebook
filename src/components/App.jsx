// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import { fetchContacts } from "redux/operations";
import PhonebookPage from "pages/PhonebookPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useSelector } from "react-redux";


export const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <PublicRoute redirectTo="phonebook" component={<LoginPage />} />
        }
        />
        <Route path="register" element={
          <PublicRoute redirectTo="phonebook" component={<RegisterPage />} />
        }
        />
        <Route path="phonebook" element={
          <PrivateRoute redirectTo="/" component={<PhonebookPage />} />
        }
        />
      </Route>
    </Routes>
  )
};

