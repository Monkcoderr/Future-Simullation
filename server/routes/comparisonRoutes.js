import express from "express";
import { compareSimulation } from "../controllers/comparisonController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/:simulationId", protect, compareSimulation);

export default router;
