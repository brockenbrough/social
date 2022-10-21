const express = require("express");

// followerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /following.
const followerRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const followerModel = require('../model/followerModel')

// This section will help you get a list of all the followers.
followerRoutes.route("/following/followers").get(function (req, res) {
  let db_connect = dbo.getDb("following");
  db_connect
    .collection("followerList")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


// This section will help you get a single follower by id
followerRoutes.route("/following/followers/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("followerList")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new follower.
followerRoutes.route("/following/followers/add").post(function (req, response) {
  const { userId, followers } = req.body

  const createFollower = new followerModel({
    userId: userId,
    followers: followers,
  });

  let db_connect = dbo.getDb();
  db_connect
      .collection("followerList")
      .findOne(createFollower);
  db_connect.collection("followerList").insertOne(createFollower, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a follower by id.
followerRoutes.route("/following/followers/update/:id").post(function (req, response) {
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
    .collection("followerList")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a follower
followerRoutes.route("/following/followers/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("followerList").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = followerRoutes;
