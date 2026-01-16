import mongoose from "mongoose";

const careerPathSchema = new mongoose.Schema(
  {
    simulationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Simulation",
      required: true
    },
    title: String,
    riskLevel: String,
    requiredSkills: [String],
    timeline: [
      {
        year: String,
        role: String,
        salary: String
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("CareerPath", careerPathSchema);
