const riskMap = {
  Low: 1,
  Medium: 2,
  High: 3
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
