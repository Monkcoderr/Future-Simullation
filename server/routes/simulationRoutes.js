import express from "express";
import { createSimulation } from "../controllers/simulationController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", protect, createSimulation);

export default router;
