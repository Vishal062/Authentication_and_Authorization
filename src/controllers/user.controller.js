const express = require("express");
const router = express.Router();
//get the user here
const User = require("../models/user.model")

//fetch the users
router.get("/", async (req, res) => {
  const users = await User.find({}).select("-password").lean().exec();
  //here if you use select('-password') then never send password at browser>
  return res.status(200).json({ data: users });
})
module.exports = router;