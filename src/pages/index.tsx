import prisma from '../../lib/prisma';
import { GetStaticProps } from 'next';
import GameList, { ListProps } from '../../components/GameList';
import React from 'react';
import Layout from '../../components/Layout';
import { Divider, Grid, Stack } from '@mui/material';

export const getStaticProps: GetStaticProps = async () => {
  const gameList = await prisma.games.findMany();
  return {
    props: { gameList },
    revalidate: 10,
  };
};

type Props = {
  gameList: ListProps[]
}

const Backlog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <h1>Game Backlog</h1>
      <Stack spacing={2}>
        {props.gameList.map((game) => (
          <div key={game.id}>
            <GameList game={game} />
          </div>
        ))}
      </Stack>
     </Layout>
  )
}
export default Backlog