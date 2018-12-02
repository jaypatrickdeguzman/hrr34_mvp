const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  _id: String,
  description: String,
  location: String,
  name: String,
  age: Number,
  sex: String,
  preference: String,
  likes: Number
});

module.exports = mongoose.model("Profile", profileSchema);
