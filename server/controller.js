const Profile = require("./database/model");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://jay:password99@ds225294.mlab.com:25294/jay-hrr34-mvp",
  { useNewUrlParser: true }
);

/**
 * Example of connection
 * 
 * var connection = mongoose.createConnection('mongodb://localhost:27017/test');
var Tank = connection.model('Tank', yourSchema);
 */

module.exports = {
  // working
  async likeUser({ _id, like }) {
    let query = { _id: _id };
    let newLikeCount = like + 1;
    return await Profile.findOneAndUpdate(query, { likes: newLikeCount });
  },
  async createUser(user) {
    let newUser = new Profile({
      _id: new mongoose.Types.ObjectId(),
      avatar: user.avatar,
      username: user.username,
      password: user.password,
      description: user.description,
      location: user.location,
      name: user.name,
      age: user.age,
      likes: 0
    });
    return await newUser.save();
  },
  async getUser({ userName, password }) {
    return await Profile.findOne({ username: userName, password });
  },
  async getMatches(cb) {
    return await Profile.findRandom({}, {}, { limit: 100 }, (err, results) => {
      if (!err) {
        cb(err, results);
      }
    });
  },
  async deleteUser({ _id }) {
    return await Profile.deleteOne({ _id: _id });
  }
};
