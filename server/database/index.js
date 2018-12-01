const mongoose = require("mongoose");

const data = `tableHere`;

const connection = `mongodb://localhost/${data}`;

const db = mongoose.connect(
  connection,
  {
    useNewUrlParser: true
  }
);

module.exports = db;
