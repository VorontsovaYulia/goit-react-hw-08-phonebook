import { useSelector } from "react-redux"
import { Navigate } from "react-router";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    console.log(isLoggedIn)
    const isRefreshing = useSelector(state => state.auth.isRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};