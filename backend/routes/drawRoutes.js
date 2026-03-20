import express from "express";
import { runDraw, getResults } from "../controllers/drawController.js";

const router = express.Router();

router.post("/run", runDraw);
router.get("/results", getResults);

export default router;