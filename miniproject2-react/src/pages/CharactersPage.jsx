import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import CharactersMainContent from "../components/CharactersMainContent";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  // Fetch characters dynamically from the Express backend
  useEffect(() => {
    fetch("http://localhost:3000/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Characters API Error:", error));
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "lightgrey",
        color: "black",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Container sx={{ py: 4 }}>
        {characters.length > 0 ? <CharactersMainContent allCharacters={characters} /> : <Box>Loading</Box>}
      </Container>
    </Box>
  );
};

export default CharactersPage;
