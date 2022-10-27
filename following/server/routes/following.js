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



// This section will help you get a list of all the followers.
followerRoutes.get("/followers", async (req, res) => {
  const followers = await followerModel.find()
console.log("fedfeef")
  return res.json(followers)
})
  

followerRoutes.route("/following").get(function (req, res) {
  let db_connect = dbo.getDb("following");
  db_connect
    .collection("followees")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// To follow someone, it should not accept any duplicates. Needs a body with userId and followers(targetUserId)
followerRoutes.route("/followers/follow").post(function (req, response) {
  if (req.body.userId == null || req.body.userId == "")
    return response.status(400).json("Invalid parameters for userId.");
  if (req.body.targetUserId == null || req.body.targetUserId == "")
    return response.status(400).json("Invalid parameters for targetUserId.");

  const createFollower = new followerModel({
    userId: req.body.userId,
    followers: req.body.targetUserId,
  });

  let db_connect = dbo.getDb();

  db_connect
    .collection("followers")
    .findOne({ userId: req.body.userId }, function (err, res) {
      if (err) throw err;
      if (res) {
        db_connect
          .collection("followers")
          .findOneAndUpdate(
            { userId: req.body.userId },
            { $addToSet: { followers: req.body.targetUserId } },
            function (err, result) {
              if (err) throw err;
              console.log("Follower added to " + req.body.userId);
              response.json(result);
            }
          );
      } else {
        db_connect
          .collection("followers")
          .insertOne(createFollower, function (err, res) {
            if (err) throw err;
            console.log("Created new User " + req.body.userId + ",and added followers.");
            response.json(res);
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
});

// This section will help you GET all followers from a user by id. Should have error handling.
followerRoutes.route("/followers/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("followers")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        if (result === null) return res.status(404).json("User doesn't exist.");
        console.log("All followers from user: "+req.params.id);
        res.json(result);
      });
});

module.exports = followerRoutes;
