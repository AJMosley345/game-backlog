import React from "react";
import Router  from "next/router";
import Layout from "../../components/Layout";
import { ListProps } from "../../components/GameList";
import { prisma } from "../../lib/db";
import { GetServerSideProps } from "next";
import { Button, Stack, Typography } from "@mui/material";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const game = await prisma.games.findUnique({
        where: {
            id: String(params?.id),
        },
    });
    return {
        props: game,
    };
};

async function deleteGame(id: String): Promise<void> {
    await fetch(`/api/games/delete/${id}`, {
        method: 'DELETE',
      });
    await Router.push("/");
}

const GameInfo: React.FC<ListProps> = (props) => {
    let name = props.name;
    let platform = props.platform;
    let series = props.series;
    
    return (
        <Layout>
            <Stack mt={2} spacing={1}>
                <Typography variant="h4"> Game Details</Typography>
                <Typography variant="h5">Title: {name}</Typography>
                <Typography variant="h5">Platform: {platform}</Typography>
                <Typography variant="h5">Series: {series}</Typography>
            </Stack>
            <Button variant="contained" onClick={() => Router.push('/updateGame')}> 
                Update Game
            </Button>
            <Button variant="contained" onClick={() => deleteGame(props.id)}> 
                Delete Game
            </Button>
        </Layout>
    );
}

export default GameInfo;