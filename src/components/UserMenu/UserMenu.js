import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user.name);
    return (
        <div>
            <p>Welcome, {user} </p>
            <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    )
};