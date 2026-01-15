import Simulation from "../models/Simulation.js";
import Profile from "../models/Profile.js";

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

    res.json(simulation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
