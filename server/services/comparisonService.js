const riskMap = {
  Low: 1,
  Medium: 2,
  High: 3
};
const DEFAULT_WEIGHTS = {
  earning: 0.4,
  growth: 0.25,
  risk: 0.2,
  skill: 0.15
};


const parseSalary = (salary) => {
  // "28 LPA" → 28
  return Number(salary.split(" ")[0]);
};

export const compareCareerPaths = (careerPaths, userSkills) => {
  return careerPaths.map(path => {
    const timeline = path.timeline;

    const firstSalary = parseSalary(timeline[0].salary);
    const lastSalary = parseSalary(timeline[timeline.length - 1].salary);

    const years = timeline.length;

    const earningPotential = lastSalary;
    const growthSpeed = ((lastSalary - firstSalary) / years).toFixed(2);

    const riskScore = riskMap[path.riskLevel] || 2;

    const skillGap = path.requiredSkills.filter(
      skill => !userSkills.includes(skill)
    ).length;

    return {
      careerPathId: path._id,
      title: path.title,
      earningPotential,
      growthSpeed,
      riskScore,
      skillGap
    };
  });
};
export const rankCareerPaths = (comparisonResults, customWeights = {}) => {
  const weights = { ...DEFAULT_WEIGHTS, ...customWeights };

  const maxEarning = Math.max(...comparisonResults.map(p => p.earningPotential));
  const maxGrowth = Math.max(...comparisonResults.map(p => Number(p.growthSpeed)));
  const maxSkillGap = Math.max(...comparisonResults.map(p => p.skillGap));

  return comparisonResults
    .map(path => {
      const earningScore = path.earningPotential / maxEarning;
      const growthScore = Number(path.growthSpeed) / maxGrowth;
      const riskScore = 1 - (path.riskScore - 1) / 2;
      const skillScore = maxSkillGap === 0
        ? 1
        : 1 - path.skillGap / maxSkillGap;

      const finalScore =
        earningScore * weights.earning +
        growthScore * weights.growth +
        riskScore * weights.risk +
        skillScore * weights.skill;

      return {
        ...path,
        finalScore: Number(finalScore.toFixed(3))
      };
    })
    .sort((a, b) => b.finalScore - a.finalScore);
};
