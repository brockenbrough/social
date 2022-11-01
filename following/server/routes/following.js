const express = require("express");

// followerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /following.
const followerRoutes = express.Router();


// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Follower model
const followerModel = require('../model/followerModel')
const followingModel = require('../model/followingModel')




// This section will help you get a list of all the followers.

followerRoutes.route("/followers").get(function (req, res) {
  let db_connect = dbo.getDb("following");
  db_connect
    .collection("followers")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

followerRoutes.route("/following").get(function (req, res) {
  let db_connect = dbo.getDb("following");
  db_connect
    .collection("following")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Follow a user
followerRoutes.route("/followers/follow").post(function (req, response) {

  if (req.body.userId == null || req.body.userId == "")
    return response.status(400).send({ message: "Invalid parameters for userId."});
  if (req.body.targetUserId == null || req.body.targetUserId == "")
    return response.status(400).send({ message: "Invalid parameters for targetUserId."});

  const createFollowing = new followingModel({
    userId: req.body.userId,
    following: req.body.targetUserId,
  });

  const createFollower = new followerModel({
    userId: req.body.targetUserId,
    followers: req.body.userId,
  });

  let db_connect = dbo.getDb();

  db_connect
    .collection("following")
    .findOne({ userId: req.body.userId }, function (err, res) {
      if (err) throw err;
      if (res) {
        db_connect
          .collection("following")
          .findOneAndUpdate(
            { userId: req.body.userId },
            { $addToSet: { following: req.body.targetUserId } },
            function (err, result) {
              if (err) throw err;
              console.log("Following " + req.body.userId);
              response.json(result);
            }
          );
      } else {
        db_connect
          .collection("following")
          .insertOne(createFollowing, function (err, res) {
            if (err) throw err;
            console.log("Created new User " + req.body.userId + ",and added to following.");
            response.json(res);
          });
      }
    });
    db_connect
    .collection("followers")
    .findOne({ userId: req.body.targetUserId }, function (err, res) {
      if (err) throw err;
      if (res) {
        db_connect
          .collection("followers")
          .findOneAndUpdate(
            { userId: req.body.targetUserId },
            { $addToSet: { followers: req.body.userId } },
            function (err, result) {
              if (err) throw err;
              console.log("Followers " + req.body.targetUserId);
            }
          );
      } else {
        db_connect
          .collection("followers")
          .insertOne(createFollower, function (err, res) {
            if (err) throw err;
            console.log("Created new User " + req.body.targetUserId + ",and added to followers.");
          });
      }
    });
});

// To delete a follower, needs a body.
followerRoutes.route("/followers/deleteFollower").delete((req, response) => {

  if (req.body.userId == null || req.body.userId == "")
    return response.status(400).json("Invalid parameters for userId.");
  if (req.body.targetUserId == null || req.body.targetUserId == "")
    return response.status(400).json("Invalid parameters to DELETE targetUserId.");

  let db_connect = dbo.getDb();
  //let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("followers").updateOne({userId: req.body.userId}, {$pull: {followers: req.body.targetUserId}},function (err, obj) {
    if (err) throw err;
    console.log("A follower(s) has been deleted from "+req.body.userId);
    response.json(obj);
  });
  db_connect.collection("following").updateOne({userId: req.body.targetUserId}, {$pull: {following: req.body.userId}},function (err, obj) {
    if (err) throw err;
    console.log("A following(s) has been deleted from "+req.body.targetUserId);
  });
});

// This section will help you GET all followers from a user by id. Should have error handling.
followerRoutes.route("/followers/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = req.params.id
  db_connect
      .collection("followers")
      .findOne({ userId: req.params.id }, function (err, result) {
        if (err) throw err;
        if (result === null) return res.status(404).json("User doesn't exist.");
        console.log("All followers from user: "+req.params.id);
        res.json(result);
      });
});

// Retrives all the followees of a user
followerRoutes.route("/following/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = req.params.id
  db_connect
      .collection("following")
      .findOne({ userId: req.params.id }, function (err, result) {
        if (err) throw err;
        if (result === null) return res.status(404).json("User doesn't exist.");
        console.log("All followers from user: "+req.params.id);
        res.json(result);
      });
});

module.exports = followerRoutes;
