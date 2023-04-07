import React from "react";
import Router from "next/router";
import { Button, Typography, Box } from '@mui/material';

export type ListProps = {
    id: string;
    name: string;
    platform: string;
    series: string;
};

const GameList: React.FC<{ game: ListProps }> = ({ game }) => {
    return (
        <>
            <Box sx={{ mx: 2, width:250, border: 1, borderRadius: '10px', mb: 2 }}>
                <Box sx={{ ml: 2 }}>
                    <Typography variant="h6">
                        {game.name}
                    </Typography>

                    <Typography variant="subtitle2">
                        {game.platform}
                    </Typography>

                    <Typography variant="subtitle2">
                        {game.series}
                    </Typography>
                    <Button
                        sx={{ backgroundColor: "#16123f", mb: 1}}
                        variant="contained" 
                        onClick={() => Router.push("/game/[id]", `/game/${game.id}`)}
                    >
                        Details
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default GameList;