import dotenv from "dotenv";
dotenv.config({ path: "./.env" });   // ✅ load env properly (ONLY ONCE)

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import charityRoutes from "./routes/charityRoutes.js";
import drawRoutes from "./routes/drawRoutes.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/charity", charityRoutes);
app.use("/api/draw", drawRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => console.log("Server running on port 5000"));
console.log("ENV:", process.env.MONGO_URI);