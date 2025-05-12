import React from "react";
import { Box, Typography } from "@mui/material";
import batmanLogo from "../assets/batmanLogo.jpg";

const Footer = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",
      padding: "20px",
      height: "15vh",
    }}
  >
    <img
      src={batmanLogo}
      alt="batman logo"
      style={{
        width: "150px",
        height: "auto",
        marginBottom: "10px",
      }}
    />
    <Typography
      variant="body2"
      sx={{
        margin: 0,
        fontSize: "14px",
        textAlign: "center",
        color: "white",
      }}
    >
      © & ™ BATMAN. DEVELOPED BY SAISH KOTHARE.
    </Typography>
  </Box>
);

export default Footer;
