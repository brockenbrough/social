const express = require("express");
const statisticsRoutes = express.Router();

const likeModel = require("../models/like");


statisticsRoutes.post('/statistics/likes', async(req,res) => {
  //Creating a timestamp object to pass to 
  let now = Date.now();
  const{userId,postId,date} = req.body
  const createLike = new likeModel({
    userId: userId,
    postId: postId,
    date: now,
  });

  try{
    const saveNewLike = await createLike.save();
    res.send(saveNewLike);
  } catch { 
    res.status(400).send({ message: "Error trying to create new Like" });
  }
});







module.exports = statisticsRoutes;





















/*
// statisticsRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /project_notes.
const statisticsRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all views made on the application.
statisticsRoutes.route("/statistics/views").get(function (req, res) {
  let db_connect = dbo.getDb("statistics");
  db_connect
    .collection("views")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of all likes made on the application.
statisticsRoutes.route("/statistics/likes").get(function (req, res) {
  let db_connect = dbo.getDb("statistics");
  db_connect
    .collection("likes")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will allow the service to create a like for a post.
statisticsRoutes.route("/statistics/likes").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    postID: req.body.postID,
    userID: req.body.userID,
  };
  db_connect.collection("likes").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//Creates a View for a post.
 statisticsRoutes.route("/statistics/view").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    postID: req.body.postID,
    userID: req.body.userID,
  };
  db_connect.collection("views").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you delete a like
statisticsRoutes.route("/statistics/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  console.log( req.params.id);
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("likes").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("Like deleted");
    response.json(obj);
  });
});

//Function to allow lookup of a user's likes. 
statisticsRoutes.route("/statistics/likes/:userID").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("likes")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

module.exports = statisticsRoutes;





/*
    These are not to be used, they are just templates for now and will be deleted in the future.
    Please disreguard these functions.
// This section will help you get a single contributor by id
projectNotesRoutes.route("/project_notes/contributor/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("contributors")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new contributor.
projectNotesRoutes.route("/project_notes/contributor/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("contributors").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a contributor by id.
projectNotesRoutes.route("/project_notes/contributor/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("contributors")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a contributor
projectNotesRoutes.route("/project_notes/contributor/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("contributors").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});*/


