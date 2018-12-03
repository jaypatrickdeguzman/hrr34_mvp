const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const connection = `mongodb://localhost/Profile`;

const db = mongoose.connect(
  connection,
  {
    useNewUrlParser: true
  }
);

module.exports = db;
