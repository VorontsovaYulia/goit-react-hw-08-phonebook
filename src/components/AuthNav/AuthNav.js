import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Container, NavLinkStyled } from "components/AuthNav.styled";


export const AuthNav = () => {
    return (
        <Container>
                <NavLinkStyled to="/register">
                    Register
                </NavLinkStyled>
            <NavLinkStyled to="/">
                Login
                <LoginOutlinedIcon color="#9c27b0" />  
                </NavLinkStyled>
        </Container>
    )
};