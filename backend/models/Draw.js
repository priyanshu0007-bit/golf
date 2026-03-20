import mongoose from "mongoose";

const drawSchema = new mongoose.Schema({
  numbers: [Number],
  date: { type: Date, default: Date.now },
  winners: [
    {
      userId: mongoose.Schema.Types.ObjectId,
      matchCount: Number
    }
  ]
});

export default mongoose.model("Draw", drawSchema);