{
  "rankedPaths": [
    {
      "title": "Front-End Engineer to Tech Lead",
      "earningPotential": 28,
      "growthSpeed": "2.88",
      "riskScore": 1,
      "skillGap": 4,
      "finalScore": 0.82
    },
    {
      "title": "UI/UX Developer to Product Manager",
      "earningPotential": 28,
      "growthSpeed": "2.75",
      "riskScore": 2,
      "skillGap": 6,
      "finalScore": 0.69
    },
    {
      "title": "Startup CTO",
      "earningPotential": 35,
      "growthSpeed": "3.87",
      "riskScore": 3,
      "skillGap": 9,
      "finalScore": 0.61
    }
  ]
}
const maxEarning = Math.max(...comparisonResults.map(p => p.earningPotential));
  const maxGrowth = Math.max(...comparisonResults.map(p => Number(p.growthSpeed)));
  const maxSkillGap = Math.max(...comparisonResults.map(p => p.skillGap));