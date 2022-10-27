// POSTS ENGINNER: JEAN TOKAM/ MARCKUS UK /  KHANH NGUYEN


const express = require("express");
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
hour = ((hour + 11) % 12 + 1);
var  suffix = (hour >= 12)? 'AM' : 'PM';
hour = (hour > 12)? hour -12 : hour;
hour = (hour == '00')? 12 : hour;
let minute = date.getMinutes();
let currentDate = `${month}-${day}-${year} ${hour}:${minute} ${suffix}`;


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

// This section will help you get a single post by id
projectPostRoutes.route("/posts/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("posts")
      .findOne(myquery, function (err, result) {
        if(result === null) return res.status(404).json("PostId could not be found")
        res.json(result);
      });
});

// This section will help you create a new post.
projectPostRoutes.route("/posts/post/").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    userId: req.body.userId,
    content: req.body.content,
    date: currentDate
  };
  db_connect.collection("posts").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a post by id.
projectPostRoutes.route("/posts/update/:id").put(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      content: req.body.content,
      date: currentDate
    },
  };
  db_connect
    .collection("posts")
    .updateOne(myquery, newvalues, function (err, res) {
      if(res === null) return res.status(404).json("PostId could not be found")
      response.json(res);
    });
});

// This section will help you delete a post
projectPostRoutes.route("/posts/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("posts").deleteOne(myquery, function (err, obj) {
    if(obj.deletedCount === 0) return response.status(404).json("PostId could not be found")
    response.json(obj);
  });
});

module.exports = projectPostRoutes;
