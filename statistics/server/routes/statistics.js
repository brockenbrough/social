const express = require("express");
const route = express.Router();

const likeSchema = require("../models/like");
const viewSchema=require("../models/view");



route.post('/views/view',async(req,res)=>{
  const userView={
    userId: req.body.userId,
    postId: req.body.postId,
  };

  try{
    const response=await viewSchema.create(userView);
    res.send(response).json("user has viewed this post");
  }catch(err){
    res.status(400).send({message:"Error trying to create new View"});
  }
});

route.get('/views',async(req,res)=>{
  const response = await viewSchema.find({postId : req.body.postId}).count();
  res.status(200).json(response);

})

//Alows a user to like a post
route.post('/likes/like', async(req,res) => {
  //Creating a timestamp object to pass to 
  const now = new Date()
  const userLike = {
    userId: req.body.userId,
    postId: req.body.postId,
    date: now,
  };
    const likes = await likeSchema.findOne({userId: userLike.userId, postId : userLike.postId});
console.log(likes)
    if(likes){
      return res.status(404).json("Post has been liked by user already")

    }else{
      const response = await likeSchema.create(userLike)
      return res.status(200).json(response)
    }
});

//returns a list of all likes
route.get('/likes', async(req,res) => {
  const likes = await likeSchema.find()
  return res.status(200).json(likes)
});

//returns a list of posts that an individual user liked
route.get('/likes/:userId', async(req,res) => {
  const likes = await likeSchema.find({userId: req.params.userId}) 
  return res.status(200).json(likes)
});



route.delete('/likes/unLike', async(req,res) => {

  try{
    const response = await likeSchema.deleteOne({userId: req.body.userId , postId : req.body.postId})
    res.status(200).json(response);
    console.log("Like Deleted.")
  }catch{
    res.status(400).send({ message: "Like does not exist." });
  }
})

module.exports = route;





















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


