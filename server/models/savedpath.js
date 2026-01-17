export const generateCareerPaths = async (simulationInput) => {
  // later this will call OpenAI
  return [
    {
      title: "Software Developer Path",
      riskLevel: "Medium",
      requiredSkills: ["JavaScript", "React", "Node.js"],
      timeline: [
        { year: "Year 1", role: "Junior Developer", salary: "₹6 LPA" },
        { year: "Year 3", role: "Mid Developer", salary: "₹12 LPA" },
        { year: "Year 5", role: "Senior Developer", salary: "₹25 LPA" }
      ]
    }
  ];
};
{
    
    title: String,
    riskLevel: String,
    requiredSkills: [String],
    timeline: [
      {
        year: String,
        role: String,
        salary: String
      }

      (profile) {
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