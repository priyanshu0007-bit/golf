import User from "../models/User.js";
import Draw from "../models/Draw.js";

export const runDraw = async (req, res) => {
  const numbers = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 45) + 1
  );

  const users = await User.find();

  let winners = [];

  users.forEach(user => {
    let match = user.scores.filter(s => numbers.includes(s.value)).length;

    if (match >= 3) {
      winners.push({
        userId: user._id,
        matchCount: match
      });
    }
  });

  const draw = await Draw.create({ numbers, winners });

  res.json(draw);
};

export const getResults = async (req, res) => {
  const draws = await Draw.find().sort({ date: -1 });
  res.json(draws);
};