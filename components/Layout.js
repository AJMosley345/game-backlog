import React from "react";
import NextLink from "next/link";
import { AppBar, Toolbar, Typography, createTheme, Link, Stack } from "@mui/material";
import { forwardRef } from "react";

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
});

const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour
            }
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour
            }
        }
    }
});

const Layout = ({ children }) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Stack>
                    <Link component={LinkBehaviour} color='#000000' href="/">Game Library</Link>
                    <Link component={LinkBehaviour} color='#000000' href="/AddGame">Add Games</Link>
                    <Link component={LinkBehaviour} color='#000000' href="/DeleteGame">Delete Game</Link>
                    </Stack>
                </Toolbar>
            </AppBar>
            <div style={{ padding: "20px" }}>{children}</div>
        </div>
    );
};

export default Layout;