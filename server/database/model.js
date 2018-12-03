const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  avatar: String,
  username: String,
  password: String,
  description: String,
  location: String,
  name: String,
  age: Number,
  likes: Number
});

module.exports = mongoose.model("Profile", profileSchema);
