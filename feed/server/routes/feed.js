const express = require("express");

// feedRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /project_notes.
const feedRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the posts.
feedRoutes.route("/feed").get(function (req, res) {
  let db_connect = dbo.getDb("feed");
  db_connect
    .collection("feed")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


module.exports = feedRoutes;
