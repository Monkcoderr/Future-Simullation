import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini client (env already loaded BEFORE this file)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Extracts JSON array safely from Gemini text output
 * Handles extra text, markdown, explanations, etc.
 */
const extractJsonArray = (text) => {
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");

  if (start === -1 || end === -1) {
    throw new Error("No JSON array found in AI response");
  }

  const jsonString = text.slice(start, end + 1);
  return JSON.parse(jsonString);
};

/**
 * Validates structure of career paths
 */
// const validateCareerPaths = (paths) => {
//   if (!Array.isArray(paths) || paths.length !== 3) {
//     return false;
//   }

//   return paths.every(path =>
//     typeof path.title === "string" &&
//     typeof path.riskLevel === "string" &&
//     Array.isArray(path.requiredSkills) &&
//     Array.isArray(path.timeline)
//   );
// };

/**
 * Generates career paths using Gemini (hardened)
 */
export const generateCareerPaths = async (simulationInput) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const prompt = `
You are a career simulation engine.

Given this user profile (JSON):
${JSON.stringify(simulationInput)}

Generate EXACTLY 3 career paths.

Each career path MUST be a JSON object with:
- title (string)
- riskLevel (Low | Medium | High)
- requiredSkills (array of strings)
- timeline (array of objects with year, role, salary)

Return ONLY a valid JSON array.
No markdown.
No explanations.
No extra text.
`;

  // Retry mechanism (AI can misbehave once)
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      const rawText = result.response.text().trim();

      const careerPaths = extractJsonArray(rawText);

      if (!validateCareerPaths(careerPaths)) {
        throw new Error("Invalid career path structure");
      }

      return careerPaths;

    } catch (error) {
      if (attempt === 2) {
        console.error("Gemini AI failed after retries:", error.message);
        throw error;
      }
    }
  }
};
