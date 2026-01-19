import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";

// // Load environment variables strictly before using them
// dotenv.config();
 console.log(
  "Gemini key at load:",
  process.env.GEMINI_API_KEY ? "FOUND" : "MISSING"
);


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  // ⚠️ Gemini sometimes adds whitespace or newlines
  // So we trim before parsing
  const careerPaths = JSON.parse(text.trim());

  return careerPaths;
};
