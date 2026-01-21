import CareerPath from "../models/CareerPath.js";
import Profile from "../models/Profile.js";
import { compareCareerPaths, rankCareerPaths } from "../services/comparisonService.js";

export const compareSimulation = async (req, res) => {
  try {
    const { simulationId } = req.params;
    const userId = req.userId;

    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(400).json({ message: "Profile not found" });
    }

    const careerPaths = await CareerPath.find({ simulationId });
    if (!careerPaths.length) {
      return res.status(404).json({ message: "No career paths found" });
    }

    const comparison = compareCareerPaths(careerPaths, profile.skills);
    const ranked = rankCareerPaths(comparison);

    res.json({
      simulationId,
      rankedPaths: ranked
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
