import express from "express";
import authRoutes from "./authRoutes.js";
import gamesRoutes from "./games.js";
import charactersRoutes from "./characters.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/games", gamesRoutes);
router.use("/characters", charactersRoutes); 

export default router;
