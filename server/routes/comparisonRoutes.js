import express from "express";
import { compareSimulation } from "../controllers/comparisonController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.get("/:simulationId", protect, compareSimulation);

export default router;
