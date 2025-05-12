import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import batmanLogo from "../assets/batmanLogo.jpg";

const HeaderNavbar = ({ onLoginClick, onSignUpClick }) => (
  <AppBar
    position="sticky"
    sx={{
      backgroundColor: "black",
      color: "white",
      boxShadow: "none",
      height: "60px",
      padding: "0 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "nowrap",
    }}
  >
    <Toolbar
      sx={{
        minHeight: "60px",
        padding: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <img
            src={batmanLogo}
            alt="Batman Logo"
            style={{ width: "150px", height: "50px", objectFit: "contain" }}
          />
        </Link>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "'Roboto', 'Arial', sans-serif",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontSize: "14px",
              margin: "0 10px",
              padding: "6px 8px",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            HOME
          </Button>
          <Button
            component={Link}
            to="/characters"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "'Roboto', 'Arial', sans-serif",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontSize: "14px",
              margin: "0 10px",
              padding: "6px 8px",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            CHARACTERS
          </Button>
          <Button
            component={Link}
            to="/games"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "'Roboto', 'Arial', sans-serif",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontSize: "14px",
              margin: "0 10px",
              padding: "6px 8px",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            GAMES
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Button
          sx={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "'Roboto', 'Arial', sans-serif",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "14px",
            margin: "0 10px",
            padding: "6px 8px",
            textDecoration: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={onSignUpClick}
        >
          SIGN UP
        </Button>
        <Button
          sx={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "'Roboto', 'Arial', sans-serif",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "14px",
            margin: "0 10px",
            padding: "6px 8px",
            textDecoration: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={onLoginClick}
        >
          LOG IN
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default HeaderNavbar;
