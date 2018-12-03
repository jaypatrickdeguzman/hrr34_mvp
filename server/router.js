const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const controller = require("./controller");

const router = express.Router();

router.use(cors());
router.use(morgan("dev"));

/* -------------------------------------- */
/*                  API                   */
/* -------------------------------------- */

router.use(express.static(path.join(__dirname, "../src/dist")));

router.get("api/login", (req, res) => {
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
      console.log(er);
    });
});

router.post("api/likeuser", (req, res) => {
  controller
    .likeUser(req.body)
    .then(succ => {
      console.log(succ);
    })
    .catch(err => {
      console.log(er);
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
