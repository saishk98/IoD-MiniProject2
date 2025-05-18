import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import HeaderNavbar from "./components/HeaderNavBar";
import Footer from "./components/Footer";
import CharactersPage from "./pages/CharactersPage";
import GamesPage from "./pages/GamesPage";
import Carousel from "./components/HomeCarousel";
import BatmanProfile from "./components/BatmanProfile";
import BatmanOrigin from "./components/BatmanOrigin";
import BatmanPowers from "./components/BatmanPowers";
import LoginDialog from "./components/LoginDialog";
import SignUpModal from "./components/SignUpDialog";

const Home = () => (
  <>
    <Carousel />
    <Container sx={{ py: 4 }}>
      <BatmanProfile />
      <BatmanOrigin />
      <BatmanPowers />
    </Container>
  </>
);

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [games, setGames] = useState([]);
  const [characters, setCharacters] = useState([]);

  // Fetch games and characters from Express API
  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Games API Error:", error));

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderNavbar
        onLoginClick={() => setLoginOpen(true)}
        onSignUpClick={() => setSignUpOpen(true)}
      />

      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersPage characters={characters} />} />
          <Route path="/games" element={<GamesPage games={games} />} />
        </Routes>
      </Box>

      <Footer />

      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
      <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />
    </Box>
  );
}

export default App;
