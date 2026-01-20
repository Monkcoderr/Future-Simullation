import CareerPath from "../models/CareerPath.js";
import Profile from "../models/Profile.js";
import { compareCareerPaths } from "../services/comparisonService.js";

export const compareSimulation = async (req, res) => {
  try {
    const { simulationId } = req.params;
    const userId = req.userId;

    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(400).json({ message: "Profile not found" });
    }