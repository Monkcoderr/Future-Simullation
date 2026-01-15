import mongoose from "mongoose";

const simulationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    input: {
      degree: String,
      skills: [String],
      interests: [String],
      country: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Simulation", simulationSchema);

