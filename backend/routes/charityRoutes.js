import express from "express";
import {
  getCharities,
  selectCharity,
  addCharity
} from "../controllers/charityController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCharities);
router.post("/select", authMiddleware, selectCharity);
router.post("/add", addCharity);

export default router;