import { useState } from "react";
import { TextField, Button } from "@mui/material";

interface Props {
    onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
    const [query, setQuery] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Search by Title'
                value={query}
                onChange={(event) => setQuery(event.target.value)} 
            />
            <Button type="submit" variant="contained" sx={{ backgroundColor: "#16123f"}}> Search </Button>
        </form>
    );
}