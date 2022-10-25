const express = require("express");
const axios = require("axios");
const router = express.Router();

// This section will help you get a list of all the posts.
router.route("/feed").get(async function (req, res) {
  const response = await axios.get("http://localhost:8083/posts/post");
  const posts = response.data;
  var ids = [];
  for (i = 0; i < posts.length; i++) {
    ids[i] = posts[i]._id;
  }
  let obj = {
    "feed" : ids
  }
  res.json(obj);
});

module.exports = router;