import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { GlobalStyle } from "./GlobalStyle";

export const Layout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <AppBar />
            <Outlet />
            <GlobalStyle />
        </div>
    )
};