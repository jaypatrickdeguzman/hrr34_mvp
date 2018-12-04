const mongoose = require("mongoose");
const random = require("mongoose-simple-random");

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
profileSchema.plugin(random);

module.exports = mongoose.model("Profile", profileSchema);
