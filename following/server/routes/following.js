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

// This section will help you create a new follower.
// followerRoutes.route("/followers/follow").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = {
//     userId: req.body.userId,
//     targetUserId: req.body.targetUserId,
//   };
//   db_connect.collection("followers").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });

// Possible other way of following someone, I'm not sure if this is good. Will discuss in class.
followerRoutes.route("/followers/follow").post(function (req, response) {

  const createFollower = new followerModel({
    userId: req.body.userId,
    followers: req.body.followers,
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
            { $push: { followers: req.body.followers } },
            function (err, res) {
              if (err) throw err;
              console.log("Follower added to "+req.body.userId);
              response.json(res);
            }
          );
      } else {
        db_connect
          .collection("followers")
          .insertOne(createFollower, function (err, res) {
            if (err) throw err;
            console.log("Created new User "+req.body.userId+",and added followers.");
            response.json(res);
          });
      }
    });
});
	

// To delete a follower, needs a body.
followerRoutes.route("/followers/deleteFollower").delete((req, response) => {
  let db_connect = dbo.getDb();
  //let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("followers").updateOne({userId: req.body.userId}, {$pull: {followers: req.body.followers}},function (err, obj) {
    if (err) throw err;
    console.log("A follower(s) has been deleted from "+req.body.userId);
    response.json(obj);
  });
});


// This section will help you DELETE a follower by id.
// followerRoutes.route("/followers/:id").delete((req, response) => {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId( req.params.id )};
//   db_connect.collection("followers").deleteOne(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     response.json(obj);
//   });
// });

// This section will help you GET all followers from a user by id.
followerRoutes.route("/followers/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("followers")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        console.log("All followers from user: "+req.params.id);
        res.json(result);
      });
});

// This section will help you update a follower by id.
// followerRoutes.route("/followers/update/:id").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId( req.params.id )};
//   let newvalues = {
//     $set: {
//       userId: req.body.userId,
//       targetUserId: req.body.targetUserId,
//     },
//   };
//   db_connect
//     .collection("followers")
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       response.json(res);
//     });
// });

module.exports = followerRoutes;
