const express = require("express");

   var currentDate = new Date(); // date is working 

 
// CommentRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /project_notes.
const CommentRoutes = express.Router();
//==============================================


// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the comments.
CommentRoutes.route("/comments/comment").get(function (req, res) {
  let db_connect = dbo.getDb("comments");
  db_connect
    .collection("comments")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single contributor by id
CommentRoutes.route("/comments/comment/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("comments").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new contributor.
CommentRoutes.route("/comments/comment/add").post(function (req, response) {
  let db_connect = dbo.getDb();

  let myobj = {
    postId: req.body.postId,
    commentContent: req.body.commentContent,
    userId: req.body.userId,
    Date: currentDate
  };
  db_connect.collection("comments").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a new contributor.
CommentRoutes.route("/comments/comment/add").post(function (req, response) {
  let db_connect = dbo.getDb();

  let myobj = {
    postId: req.body.postId,
    commentContent: req.body.commentContent,
    userId: req.body.userId,
    Date: currentDate
  };
  db_connect.collection("comments").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Reply to a comment.
CommentRoutes.route("/comments/comment/reply/:id").post(function (req, response) {
  let db_connect = dbo.getDb();

  let myobj = {
    postId: req.body.postId,
    commentContent: req.body.commentContent,
    userId: req.body.userId,
    Date: currentDate
  };
  db_connect.collection("comments").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});


// This section will help you update a comment by id.
CommentRoutes.route("/comments/comment/update/:id").put(function (
  req,
  response
) {
  let db_connect = dbo.getDb();

  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      commentContent: req.body.commentContent,
      Date: currentDate
    },
  };
  db_connect
    .collection("comments")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a contributor
CommentRoutes.route("/comments/comment/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("comments").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = CommentRoutes;