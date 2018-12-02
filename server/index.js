const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, "../src/dist")));

app.get("/login", (req, res) => {
  res.send("Success");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
