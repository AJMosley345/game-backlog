import { GetStaticProps } from 'next';
import GameList, { ListProps } from '../components/GameList';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Stack, Typography, Button, TextField, Select, MenuItem, FormControl } from '@mui/material';
import { prisma } from '../lib/db';
import { Game } from 'interfaces/Game';

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

interface SearchResult {
  games: Game[];
}

const Backlog: React.FC<Props> = (props) => {
  // variable and function to handle sorting by different criteria
  // const [sortOption, setSortOption] = useState('name');
  // const [games, setGames] = useState(props.gameList);

  // const handleSortOptionChange = (event) => {
  //   setSortOption(event.target.value);
  // };

  // const handleSort = async () => {
  //   const res = await fetch(`/api/sortGames?sortOptions=${sortOption}`);
  //   const sortedItems = await res.json();
  //   setGames(sortedItems);
  // };

  // variable and function to handle searching by title
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
      <>
        <TextField
                  label='Search by Title'
                  onChange={(event) => handleSearch(event.target.value)} 
        />
        {/* <FormControl>
          <Select value={sortOption} onChange={handleSortOptionChange}>
            <MenuItem value='name'>Title</MenuItem>
            <MenuItem value='platform'>Platform</MenuItem>
            <MenuItem value='series'>Series</MenuItem>
          </Select>
          <Button onClick={handleSort}>Sort</Button>
        </FormControl> */}
      </>
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