import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, AppBar, Toolbar, MenuItem } from "@mui/material";

// interfaces for the Search function
interface Props {
    onSearch: (query: string) => void;
}

const Header: React.FC = ( { onSearch }: Props ) => {
    const router = useRouter();
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ position: "static", background: "#abd699"}}>
                <Toolbar variant="dense">
                <Link href="/" style={{ textDecoration: 'none', color: "#16123f" }}>
                        <MenuItem>
                            Home
                        </MenuItem>
                    </Link>                    
                    <Link href="/addGame" style={{ textDecoration: 'none', color: "#16123f" }}>
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