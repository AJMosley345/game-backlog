import { GetStaticProps } from 'next';
import GameList, { ListProps } from '../components/GameList';
import SearchBox from '../components/SearchBox';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Stack, Typography } from '@mui/material';
import { prisma } from '../lib/db';

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
interface Game {
  id: string;
  name: string;
  platform: string;
  series: string;
}
interface SearchResult {
  games: Game[];
}
const Backlog: React.FC<Props> = (props) => {
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  const handleSearch = async (query: string) => {
    if (!query){
      setSearchResult(null);
      return;
    }
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const result = await res.json();
    setSearchResult(result);        
  };
  return (
    <Layout>
      <Typography variant="h3">Game Backlog</Typography>
      <Stack direction="row" sx={{ flexWrap: "wrap"}}>
        {searchResult
          ? searchResult.games.map((game) => (
            <div key={game.id}>
              <GameList game={game} />
            </div>
          ))
          : props.gameList.map((game) => (
            <div key={game.id}>
              <GameList game={game} />
            </div>
          ))}
      </Stack>
     </Layout>
  )
}
export default Backlog