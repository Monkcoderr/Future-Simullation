import Simulation from "../models/Simulation.js";
import Profile from "../models/Profile.js";
import CareerPath from "../models/CareerPath.js";
import { generateCareerPaths } from "../services/aiService.js";

export const createSimulation = async (req, res) => {
  try {
    const userId = req.userId;

    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(400).json({ message: "Profile required before simulation" });
    }

    const simulation = await Simulation.create({
      userId,
      input: {
        degree: profile.degree,
        skills: profile.skills,
        interests: profile.interests,
        country: profile.country
      }
    });

    
    const careerPaths = await generateCareerPaths(simulation.input);

    const savedPaths = await CareerPath.insertMany(
      careerPaths.map(path => ({
        ...path,
        simulationId: simulation._id
      }))
    );

    res.json({
      simulation,
      careerPaths: savedPaths
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
