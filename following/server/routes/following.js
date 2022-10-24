const express = require("express");

// followerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /following.
const followerRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


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
followerRoutes.route("/followers/follow").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    userId: req.body.userId,
    targetUserId: req.body.targetUserId,
  };
  db_connect.collection("followers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you delete a follower by id.
followerRoutes.route("/followers/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("followers").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

// This section will help you get a single follower by id.
followerRoutes.route("/followers/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("followers")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you update a follower by id.
followerRoutes.route("/followers/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      userId: req.body.userId,
      targetUserId: req.body.targetUserId,
    },
  };
  db_connect
    .collection("followers")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

module.exports = followerRoutes;
