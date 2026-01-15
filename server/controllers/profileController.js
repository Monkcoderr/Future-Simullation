import Profile from "../models/Profile.js";

export const saveProfile = async (req, res) => {
  try {
    const { degree, year, country, skills, interests } = req.body;
    const userId = req.userId;

    let profile = await Profile.findOne({ userId });

    if (profile) {
      profile.degree = degree;
      profile.year = year;
      profile.country = country;
      profile.skills = skills;
      profile.interests = interests;
      await profile.save();
    } else {
      profile = await Profile.create({
        userId,
        degree,
        year,
        country,
        skills,
        interests
      });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
