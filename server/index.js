const express = require("express");
const router = require("./router");

const app = express();
app.use(router);

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
