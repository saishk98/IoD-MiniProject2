import express from "express";
import { readFileSync } from "fs";
const gamesData = JSON.parse(readFileSync(new URL("../data/games.json", import.meta.url)));

const router = express.Router();

router.get("/", (req, res) => {
  res.json(gamesData);
});

export default router;
