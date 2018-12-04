const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const controller = require("./controller");

const router = express.Router();

router.use(cors());
router.use(morgan("dev"));
router.use(bodyParser());

/* -------------------------------------- */
/*                  API                   */
/* -------------------------------------- */

router.use(express.static(path.join(__dirname, "../src/dist")));

router.get("api/login", (req, res) => {
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

router.post("api/newuser", (req, res) => {
  controller
    .createUser(req.body)
    .then(succ => {
      console.log(succ);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("api/likeuser", (req, res) => {
  controller
    .likeUser(req.body)
    .then(succ => {
      console.log(succ);
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("api/deleteuser", (req, res) => {
  controller
    .deleteUser(req.body)
    .then(succ => {
      console.log(succ);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
