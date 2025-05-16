import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import GamesCarousel from "../components/GamesCarousel";
import GamesMainContent from "../components/GamesMainContent";

const GamesPage = () => {
  const [games, setGames] = useState([]);

  // Fetch games dynamically from the Express backend
  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Games API Error:", error));
  }, []);

  return (
    <Box sx={{ backgroundColor: "lightgrey", color: "black", minHeight: "100vh", overflowX: "hidden" }}>
      <GamesCarousel />
      <GamesMainContent games={games} />
    </Box>
  );
};

export default GamesPage;
