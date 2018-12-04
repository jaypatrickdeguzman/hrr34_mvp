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
    // working
    console.log("User: ", user);
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
    // working
    console.log(userName, " ", password);
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
    // working
    return await Profile.deleteOne({ _id: _id });
  }
};

// function testFunc() {
//   // Profile.findOne({ _id: 100 }).then(user => {
//   //   console.log(user);
//   // });
//   // let newUser = new Profile({
//   //   _id: new mongoose.Types.ObjectId(),
//   //   username: "mooo",
//   //   password: "mooopw",
//   //   description: "I like things",
//   //   location: "CA",
//   //   name: "moo-username",
//   //   age: 27,
//   //   preference: "Male",
//   //   likes: 27
//   // });
//   // newUser.save().then(user => {
//   //   console.log(user);
//   // });
//   // Profile.find({ username: "mooo", password: "mooopw" }).then(x => {
//   //   console.log(x);
//   // });

//   // let query = { _id: "5c059624a4cb661606634e51" };
//   // let newLikeCount = 29;
//   // Profile.findOneAndUpdate(query, { likes: newLikeCount }).then(x => {
//   //   console.log(x);
//   // });

//   Profile.findOne({ _id: "5c059624a4cb661606634e51" }).then(x => {
//     console.log(x);
//   });
// }

// testFunc();
