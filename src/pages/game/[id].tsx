import prisma from "../../lib/prisma";
import { GetServerSideProps } from "next";
import React from "react";
import Router  from "next/router";
import { ListProps } from "../../components/GameList";
import Layout from "../../components/Layout";
import { Button } from "@mui/material";

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
    await fetch(`/api/games/${id}`, {
        method: 'DELETE',
      });
    await Router.push("/");
}

const GameInfo: React.FC<ListProps> = (props) => {
    let name = props.name;
    let platform = props.platform;
    let series = props.series;
    let gameId = props.id;
    
    return (
        <Layout>
            <div>
                <h2>{name}</h2>
                <p>{platform}</p>
                <p>{series}</p>
                <Button variant="contained" onClick={() => deleteGame(props.id)}> Delete? </Button>
            </div>
        </Layout>
    );
}

export default GameInfo;