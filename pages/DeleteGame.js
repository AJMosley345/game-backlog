import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { List, ListItem, ListItemText, ListItemSecondaryAction, ListItemButton, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete } from "@mui/icons-material";

const DeleteGame = () => {
    const [games, setGames] = useState([]);
  
    const handleDelete = async (id) => {
      const res = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log(result);
      setGames(games.filter((game) => game.id !== id));
    };

    useEffect(() => {
        const fetchGames = async () => {
        const res = await fetch("/api/get");
        const games = await res.json();
        setGames(games);
        };
        fetchGames();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'platform', headerName: 'Platform', width: 200 },
        { field: 'series', headerName: 'Series', width: 200 },
    ];

  return (
    <Layout>
      <Typography variant="h4">Delete a game</Typography>
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <ListItemText primary={game.name} />
            <ListItemText primary={game.platform} />
            <ListItemText primary={game.series} />
            <ListItemSecondaryAction>
              <Button
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(game.id)}
              >
                <Delete />
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export default DeleteGame;