import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { Container } from "components/UserMenu/UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user.name);
    return (
        <Container>
            <p>Welcome, {user} </p>
            {/* <button type="button" onClick={() => dispatch(logOut())}>Logout</button> */}
            <LogoutOutlinedIcon type="button" sx={{ color: '#9c27b0' }} onClick={() => dispatch(logOut())} />
        </Container>
    )
};