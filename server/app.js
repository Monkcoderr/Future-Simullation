import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middlewares/auth.js";
import profileRoutes from "./routes/profileRoutes.js";
import simulationRoutes from "./routes/simulationRoutes.js";
import comparisonRoutes from "./routes/comparisonRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/simulate", simulationRoutes);
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "You are in", userId: req.userId });
});

app.use("/api/compare", comparisonRoutes)

app.use("/api/profile", profileRoutes);


app.get("/", (req, res) => {
  res.send("PathPilot API is running");
});

export default app;
