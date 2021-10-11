//const express = require('express');
//const router = express.Router();
//module.exports = router;
const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
require("dotenv").config();

const newToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY)
};
const signup = async (req, res) => {
    try {
        const user = await User.create(req.body);
        //let token = "Demo Token";
        const token = newToken(user);
        return res.status(201).json({ data: {token} });
    } catch (e){
        return res.status(500).json({ status: "failed", message: "Something went wrong" });
    }
}

const signin = async (req, res) => {
  //let token = "Demo Token";
  //we will try to find with the email that comes in
    //2 we will try to match the password stored in the 
    //3 create a new token and return 
    
  return res.send("User")
};

module.exports = {
    signup,
    signin,
};