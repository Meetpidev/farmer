import express from "express";
import protect from "../middlewares/authMiddleware.js"
import { getUserProfile, updateUserProfile } from "../controllers/userController.js";

const router = express.Router();

// ✅ Protected Route: Get User Profile
router.get("/profile", protect, getUserProfile);

// ✅ Protected Route: Update User Profile
router.put("/profile", protect, updateUserProfile);

export default router;
