import { NavLink } from "react-router-dom";
import { UserMenu } from "./UserMenu/UserMenu";
import { AuthNav } from "./AuthNav/AuthNav";
import { useSelector } from "react-redux";

export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <header>
            <nav>
                {isLoggedIn && (
                    <NavLink to="/phonebook">
                        Phonebook
                    </NavLink>
                 )}
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </nav>
        </header>
    )
};