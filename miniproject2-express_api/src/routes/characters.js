import express from "express";
import { readFileSync } from "fs";
const charactersData = JSON.parse(readFileSync(new URL("../data/characters.json", import.meta.url)));

const router = express.Router();

router.get("/", (req, res) => {
  res.json(charactersData);
});

export default router;
