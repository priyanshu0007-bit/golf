import User from "../models/User.js";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};

export const addScore = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.scores.push({
    value: req.body.value,
    date: new Date()
  });

  if (user.scores.length > 5) {
    user.scores.shift();
  }

  await user.save();

  res.json(user.scores);
};