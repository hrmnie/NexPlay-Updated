const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: String,
  walletAddress: String,
  name: String,
  email: String,
  profilePic: String,
});

module.exports = mongoose.model("User", UserSchema);
