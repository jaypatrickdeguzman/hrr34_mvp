const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const router = require("./router");

const app = express();

app.use(morgan("dev"));

const PORT = process.env.PORT || 1337;

app.use(cors());
app.use(express.static(path.join(__dirname, "../src/dist")));

app.get("/", (req, res) => {
  res.status(200).send("<p>Success</p>");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
