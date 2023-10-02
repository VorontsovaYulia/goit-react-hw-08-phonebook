import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { BoxCard, Text } from "./AppBar.styled";

export default function MenuAppBar() {

    const isLogin = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user.name);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <UserMenu />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PHONEBOOK
                    </Typography>
                    {isLogin ? (
                        <BoxCard>
                            <Text>Welcome, {user}</Text>
                            <AccountCircle />
                        </BoxCard>
                    ) : <AuthNav />}
                </Toolbar>
            </AppBar>
        </Box>
    );
};