const mongoose = require("mongoose");

const connection = `mongodb://localhost/Profile`;

const db = mongoose.connect(
  connection,
  {
    useNewUrlParser: true
  }
);

module.exports = db;
