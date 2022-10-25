const express = require("express");

// projectPostRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /posts.
const projectPostRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the posts.
projectPostRoutes.route("/posts/post").get(function (req, res) {
  let db_connect = dbo.getDb("posts");
  db_connect
    .collection("posts")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of all the posts from a single user.
/*projectPostRoutes.route("/posts/post/:id/:postid").get(function (req, res) {
  let db_connect = dbo.getDb("posts");
  db_connect
    .collection("posts")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});*/

// This section will help you get a single post by id
projectPostRoutes.route("/posts/post/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("posts")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new post.
projectPostRoutes.route("/posts/post/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    content: req.body.content
  };
  db_connect.collection("posts").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a post by id.
projectPostRoutes.route("/posts/post/update/:id").put(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      content: req.body.content
    },
  };
  db_connect
    .collection("posts")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a post
projectPostRoutes.route("/posts/post/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("posts").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = projectPostRoutes;
