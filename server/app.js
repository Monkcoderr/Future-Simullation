import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middlewares/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);


app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "You are in", userId: req.userId });
});


app.get("/", (req, res) => {
  res.send("PathPilot API is running");
});

export default app;
