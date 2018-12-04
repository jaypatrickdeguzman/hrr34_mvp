const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const controller = require("./controller");

const app = express();
app.use(cors());
// app.use(morgan("dev"));
app.use(bodyParser());

/* -------------------------------------- */
/*                   API                  */
/* -------------------------------------- */

app.use(express.static(path.join(__dirname, "../src/dist")));

app.get("/api/getmatches", (req, res) => {
  controller.getMatches((err, results) => {
    res.send(results);
  });
});

app.post("/api/login", (req, res) => {
  console.log(req.body.body);
  controller
    .getUser(req.body.body)
    .then(user => {
      console.log("user: ", user);
      res.send(user);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/newuser", (req, res) => {
  console.log(req.body);
  controller
    .createUser(req.body.body)
    .then(succ => {
      const user = {
        userName: req.body.body.username,
        password: req.body.body.password
      };
      controller.getUser(user).then(succ => {
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
