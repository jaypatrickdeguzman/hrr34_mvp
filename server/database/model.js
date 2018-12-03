const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  _id: String,
  username: String,
  password: String,
  description: String,
  location: String,
  name: String,
  age: Number,
  preference: String,
  likes: Number
});

module.exports = mongoose.model("Profile", profileSchema);
