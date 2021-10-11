const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength:8},
}, { timestamps: true }
);

const User = mongoose.model("user", userSchema);

//Create a preSave took
userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next()
})

module.exports = User;