const express = require("express");
const axios = require("axios");
const router = express.Router();

//Feed sorting algorithm
//Takes posts from post service API as input and returns post IDs in a sorted array of strings
async function sortPosts(posts) {
  const likesRequest = await axios.get("http://localhost:8087/statistics/likes");
  const likes = likesRequest.data;

  var postIDs = [];
  var weights = [];
  var sortedIDs = [];

  for (i = 0; i < posts.length; i++) {
    postIDs[i] = posts[i]._id;
    let postObj = {
      "postID" : postIDs[i],
      "likes" : 0,
      "weight" : 0
    };
    weights.push(postObj);
  }

  for (i = 0; i < likes.length; i++) {
    for (j = 0; j < postIDs.length; j++) {
      if (likes[i].postID == postIDs[j]) {
        weights[j].likes += 1;
      }
    }
  }

  for (i = 0; i < weights.length; i++) {
    weights[i].weight = weights[i].likes;
  }

  weights.sort(function(a, b){
    return b.weight - a.weight;
  });

  for (i = 0; i < posts.length; i++) {
    sortedIDs[i] = weights[i].postID;
  }
  
  return sortedIDs;
}

//Pagination function
//Takes starting position, page size, and postIDs as an array of strings as input and returns an array of the requested size
function paginate(startingPosition, pageSize, posts) {
  return posts.slice(startingPosition, startingPosition + pageSize);
}

//Full feed service for an anonymous user
router.route("/feed").get(async function (req, res) {
  const postsRequest = await axios.get("http://localhost:8083/posts/post");
  const posts = postsRequest.data;

  const sortedPosts = await sortPosts(posts);

  let obj = {
    "feed" : sortedPosts
  };

  res.json(obj);
});

//Paginated feed service for an anonymous user
router.route("/feed/:startingPosition/:pageSize").get(async function (req, res) {
  const postsRequest = await axios.get("http://localhost:8083/posts/post");
  const posts = postsRequest.data;

  const startingPosition = parseInt(req.params.startingPosition);
  const pageSize = parseInt(req.params.pageSize);
  if (isNaN(startingPosition) || isNaN(pageSize)) return res.status(400).send("Error: invalid starting position and/or page size, starting position and page size must be a number.");
  
  const sortedPosts = await sortPosts(posts);
  const page = paginate(startingPosition, pageSize, sortedPosts);

  let obj = {
    "feed" : page
  };

  res.json(obj);
});

module.exports = router;