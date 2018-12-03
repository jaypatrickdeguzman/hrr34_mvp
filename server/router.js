const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const router = express.Router();

router.use(cors());
router.use(morgan("dev"));

/* -------------------------------------- */
/*                  API                   */
/* -------------------------------------- */

router.use(express.static(path.join(__dirname, "../src/dist")));

router.get("api/login", (req, res) => {
  console.log("Post");
});

router.post("api/newuser", (req, res) => {
  console.log("Post");
});

router.post("api/likeuser", (req, res) => {
  console.log("Like");
});

module.exports = router;
