import express from "express";
import { getProfile, addScore } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.post("/scores", authMiddleware, addScore);

export default router;