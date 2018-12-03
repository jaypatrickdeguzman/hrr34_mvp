const Profile = require("./database/model");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/Profile",
  { useNewUrlParser: true }
);

/**
 * Example of connection
 * 
 * var connection = mongoose.createConnection('mongodb://localhost:27017/test');
var Tank = connection.model('Tank', yourSchema);
 */

module.exports = {
  likeUser(user) {},
  async createUser(user) {
    let newUser = new Profile({
      username: user.username,
      password: user.password,
      description: user.description,
      location: user.location,
      name: user.name,
      age: user.age,
      preference: user.preference,
      likes: 0
    });
    return await newUser.save();
  },
  async getUser({ username, password }) {
    return await Profile.find({ username, password });
  }
};
