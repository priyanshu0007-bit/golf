import Charity from "../models/Charity.js";
import User from "../models/User.js";

export const getCharities = async (req, res) => {
  const charities = await Charity.find();
  res.json(charities);
};

export const selectCharity = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.charity = {
    charityId: req.body.charityId,
    percentage: req.body.percentage || 10
  };

  await user.save();

  res.json(user.charity);
};

export const addCharity = async (req, res) => {
  const charity = await Charity.create(req.body);
  res.json(charity);
};