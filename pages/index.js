import Layout from "@/components/Layout";
import { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
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
    async function fetchData() {
      const response = await fetch('/api/get');
      const data = await response.json();
      setGames(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'platform', headerName: 'Platform', width: 200 },
    { field: 'series', headerName: 'Series', width: 200 },
    { field: 'actions', headerName: 'Delete', width: 400, renderCell: (params) => {
      return (
        <Button
          onClick={() => handleDelete(games.id, params.row)}
          variant="contained"
        >
          Delete
        </Button>
      );
    }}
  ];

  return(
      <Layout>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={games} columns={columns} pageSize={5} />
        </div>
      </Layout>
  );
}