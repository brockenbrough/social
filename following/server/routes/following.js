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





// Retrieves a list of all users and their followers.
followerRoutes.get("/followers", async (req, res) => {
  const followers = await followerModel.find();
  return res.status(200).json(followers);
});

// Retrieves a list of all users and who they are following.
followerRoutes.get("/following", async (req, res) => {
  const following = await followingModel.find();
  return res.status(200).json(following);
});

// Retrieves all the followers of a user by id.
followerRoutes.get("/followers/:id", (req, res) => {
  followerModel
    .find({ userId: req.params.id })
    .then((follower) => res.json(follower))
    .catch((err) => res.status(404).json({ User: "No user found." }));
});

// Retrieves all the users that a certain user is following by id.
followerRoutes.get("/following/:id", (req, res) => {
  followingModel
    .find({ userId: req.params.id })
    .then((following) => res.json(following))
    .catch((err) => res.status(404).json({ User: "No user found." }));
});

// Follow a User
followerRoutes.post("/followers/follow", (req, res) => {
  const { userId, targetUserId } = req.body;

  followingModel
    .updateOne({ userId: userId }, { $push: { following: `${targetUserId}` } })
    .then(
      followerModel
        .updateOne(
          { userId: targetUserId },
          { $push: { followers: `${userId}` } }
        )
        .then((e) => {
          return res.status(200).json(e);
        })
    ).then(e => {return e});
});

// Deletes a Follower
followerRoutes.delete("/followers/delete", (req, res) => {
  const { userId, targetUserId } = req.body;
  
  followingModel
    .deleteOne({ userId: userId }, { $push: { following: `${targetUserId}` } })
    .then(
      followerModel
        .deleteOne(
          { userId: targetUserId },
          { $pop: { followers: `${userId}` } }
        )
        .then((e) => {
          return res.status(200).json(e);
        })
    ).then(e => {return e});
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

  if(following){
    followingModel.updateOne({userId: req.body.userId}, {$addToSet: {following: req.body.targetUserId}})
  }else{
    const saveFollowingUser = await followingUser.save()
    res.send(saveFollowingUser);
  }

});

// To delete a follower from the User's follower list. Similar to a block, but able to delete a User's follower.
followerRoutes.route("/followers/deleteFollower").delete((req, response) => {

  if (req.body.userId == null || req.body.userId == "")
    return res.status(400).json("Invalid parameters for userId.");
  if (req.body.targetUserId == null || req.body.targetUserId == "")
    return response.status(400).json("Invalid parameters to DELETE targetUserId from follower list.");

  let db_connect = dbo.getDb();
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

// Unfollow a User from the User's following list, similar to delete a follower, but now the opposite. 
followerRoutes.route("/followers/unfollowUser").delete((req, response) => {

  if (req.body.userId == null || req.body.userId == "")
    return res.status(400).json("Invalid parameters for userId.");
  if (req.body.targetUserId == null || req.body.targetUserId == "")
    return response.status(400).json("Invalid parameters to UNFOLLOW targetUserId from following list.");

  let db_connect = dbo.getDb();
  db_connect.collection("followers").updateOne({userId: req.body.targetUserId}, {$pull: {followers: req.body.userId}},function (err, obj) {
    if (err) throw err;
    console.log("A follower(s) has been deleted from "+req.body.userId);
  });
  db_connect.collection("following").updateOne({userId: req.body.userId}, {$pull: {following: req.body.targetUserId}},function (err, obj) {
    if (err) throw err;
    response.json(obj);
    console.log("A following(s) has been deleted from "+req.body.targetUserId);
  });
});
*/
module.exports = followerRoutes;