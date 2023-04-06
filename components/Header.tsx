import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Typography, AppBar, Toolbar, MenuItem } from "@mui/material";

const Header: React.FC = () => {
    const router = useRouter();

    let home = (
        <div>
            <Link href="/">
                <Typography>
                    Home
                </Typography>
            </Link>
        </div>
    );

    let addGame = (
        <div>
            <Link href="/add_game">
                <Typography>
                    Add Game
                </Typography>
            </Link>
        </div>
    );

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <Link href="/" style={{ textDecoration: 'none' }}>
                        <MenuItem>
                            Home
                        </MenuItem>
                    </Link>                    
                    <Link href="/add_game" style={{ textDecoration: 'none' }}>
                        <MenuItem>
                            Add Game
                        </MenuItem>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default Header;