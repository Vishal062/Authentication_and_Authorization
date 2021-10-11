//we need to verify the token and its belong the user
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");


const verifyToken = (token) => {
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
            if(err) return reject(err);

            return resolve(payload);
        });
    })
}
//1 get the token 
const protect = async (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer || !bearer.startsWith("Bearer "))
        return res.status(401).json({
            status: "Failed",
            message: "your email and password is not correct",
        });

    //2 verify the token
    const token = bearer.split("Bearer ") [1].trim();
    console.log("token:", token);
};

//3 retrive the token if exist then good
let payload;
try {
    payload =  verifyToken(token);  //await
    console.log('payload:', payload)
} catch (e) {
    
}
module.exports = protect;