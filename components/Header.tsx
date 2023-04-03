import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

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
        <nav>
            {home}
            {addGame}
        </nav>
    );

}

export default Header;