import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { StyledNav } from "./AppBar.styled";

export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <header>
            <StyledNav>
               
                <NavLink to="/phonebook">
                    <h1>Phonebook</h1>
                </NavLink>
                 
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </StyledNav>
        </header>
    )
};