import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  subscription: {
    plan: { type: String, default: "monthly" },
    status: { type: String, default: "active" },
    expiryDate: Date
  },

  scores: [
    {
      value: Number,
      date: Date
    }
  ],

  charity: {
    charityId: String,
    percentage: { type: Number, default: 10 }
  }
});

export default mongoose.model("User", userSchema);