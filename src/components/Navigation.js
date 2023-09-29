import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/phonebook">
                    Phonebook
                </NavLink>
                <NavLink to="/register">
                    Register
                </NavLink>
                <NavLink to="/">
                    Login
                </NavLink>
            </ul>
        </nav>
    )
};