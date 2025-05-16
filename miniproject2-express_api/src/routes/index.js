const express = require("express");
const gamesRoutes = require("./games");
const charactersRoutes = require("./characters");

const router = express.Router();

// Map API routes
router.use("/games", gamesRoutes);
router.use("/characters", charactersRoutes);

module.exports = router;
