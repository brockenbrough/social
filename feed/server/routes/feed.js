const express = require("express");
const axios = require("axios");
const router = express.Router();

// This section will help you get a list of all the posts.
router.route("/feed").get(async function (req, res) {
  const posts = await axios.get("http://localhost:8083/posts/post").then(e=>e.data);
  res.json(posts);
});

module.exports = router;