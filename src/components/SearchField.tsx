import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Game } from "interfaces/Game";

interface SearchResult {
    games: Game[];
}

interface Search {
    onSearch: (query: string) => void;
}

const SearchField : React.FC = ({ onSearch }: Search) => {
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
        <>
            <TextField
                label='Search by Title'
                onChange={(event) => handleSearch(event.target.value)}
            />
            <Button type="submit" variant="contained" sx={{ backgroundColor: "#16123f"}}> 
                Search 
            </Button>
        </>
    );
}

export default SearchField;