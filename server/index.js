const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const controller = require("./controller");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser());

/* -------------------------------------- */
/*                  API                   */
/* -------------------------------------- */

app.use(express.static(path.join(__dirname, "../src/dist")));

app.post("/api/login", (req, res) => {
  console.log(req.body);
  controller
    .getUser(req.body)
    .then(user => {
      console.log(user);
    })
    .catch(err => {
      console.log(er);
    });
});

app.post("/api/newuser", (req, res) => {
  console.log(req.body);
  controller
    .createUser(req.body.body)
    .then(succ => {
      controller.getUser(req.body.body).then(succ => {
        res.send(succ);
      });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("api/likeuser", (req, res) => {
  controller
    .likeUser(req.body)
    .then(succ => {
      console.log(succ);
    })
    .catch(err => {
      console.log(err);
    });
});

// app.delete("api/deleteuser", (req, res) => {
//   controller
//     .deleteUser(req.body)
//     .then(succ => {
//       console.log(succ);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
