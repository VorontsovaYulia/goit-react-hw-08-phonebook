import { Container, NavLinkStyled } from "components/AuthNav/AuthNav.styled";

export const AuthNav = () => {
    return (
        <Container>
            <NavLinkStyled to="/register">
                Register
            </NavLinkStyled>
            <NavLinkStyled to="/">
                Login
            </NavLinkStyled>
        </Container>
    )
};