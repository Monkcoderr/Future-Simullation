import express from "express";
import { registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/test", (req, res) => {
  res.send("Auth route working");
});



export default router;
