import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import Layout from "../components/Layout";

const CreateGame = () => {
    const[name, setName] = useState('');
    const[platform, setPlatform] = useState('');
    const[series, setSeries] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
    
        const res = await fetch("/api/create", {
          method: "POST",
          body: JSON.stringify({ name, platform, series }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
    
        if (res.ok) {
          setName("");
          setPlatform("");
          setSeries("");
          alert("Game added successfully!");
        } else {
          alert("There was an error adding the game.");
        }
    }

    return (
        <Layout>
            <Stack width={250} spacing={3}>
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
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                    Add Game
                </Button>
            </Stack>
        </Layout>
    );
};

export default CreateGame;