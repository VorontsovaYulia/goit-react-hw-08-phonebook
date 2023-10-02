import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import MenuAppBar from "../AppBar/AppBar";
import { GlobalStyle } from "../GlobalStyle";

export const Layout = () => {
    return (
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 16px' }}>
            <MenuAppBar />
            <Suspense fallback={<Box sx={{ width: '100%' }}><LinearProgress /></Box>}>
                <Outlet />
            </Suspense>
            <GlobalStyle />
        </div>
    )
};