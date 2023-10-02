import { useDispatch, useSelector } from "react-redux";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { logOut } from "redux/auth/authOperations";

export const UserMenu = () => {

    const isLogin = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    
    const handleChange = () => {
        dispatch(logOut());
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch
                        checked={isLogin}
                        disabled={!isLogin ? true : false}
                        onChange={handleChange}
                        aria-label="login switch"
                    />
                }
                label={isLogin ? 'Logout' : 'Login'}
            />
        </FormGroup>
    )
};