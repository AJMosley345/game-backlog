import React, { useState } from 'react';
import Router from 'next/router';
import { TextField, Button, Stack } from '@mui/material';
import Layout from '../../components/Layout';

const NewGame: React.FC = () => {
    const[name, setName] = useState('');
    const[platform, setPlatform] = useState('');
    const[series, setSeries] = useState('');

    const submitData = async (e:React.SyntheticEvent) => {
        e.preventDefault();
    
        const res = await fetch("/api/games/create", {
          method: "POST",
          body: JSON.stringify({ name, platform, series }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
            setName("");
            setPlatform("");
            setSeries("");
          }
    }
    return (
        <Layout>
            <Stack width={250} spacing={3} mx={3} my={3}>
                <TextField
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    sx={{ backgroundColor: "white"}}
                />
                <TextField
                    type="text"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    placeholder="Platform"
                    sx={{ backgroundColor: "white"}}
                />
                <TextField
                    type="text"
                    value={series}
                    onChange={(e) => setSeries(e.target.value)}
                    placeholder="Series"
                    sx={{ backgroundColor: "white"}}
                />
                <Button type="submit" variant="contained" color="primary" onClick={submitData}>
                    Add Game
                </Button>
                <Button href='#' variant="contained" color="primary" onClick={() => Router.push('/')}>Cancel</Button>
            </Stack>
        </Layout>
    )
}
export default NewGame
