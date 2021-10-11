const express = require("express");
const router = express.Router();
//get the user here
const User = require("../models/user.model")

//fetch the users
router.get("/", async (req, res) => {
    const users = await User.find({}).lean().exec();
    return res.status(200).json({ data: users });
})
module.exports = router;