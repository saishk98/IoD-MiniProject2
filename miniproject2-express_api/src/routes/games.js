const express = require("express");
const { getAllGames, getGameById } = require("../controllers/gamesController");

const router = express.Router();

router.get("/", getAllGames);
router.get("/:id", getGameById);

module.exports = router;
