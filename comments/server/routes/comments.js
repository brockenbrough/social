const express = require("express");

// CommentRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path 
const CommentRoutes = express.Router();
//==============================================

// This will help us connect to the database
const Comment = require("../models/commentsModel");

CommentRoutes.post("/comments/comment/reply/:id", async (req, res) => {
  const { commentContent } = req.body;
  const { id } = req.params;

  if (!id && !commentContent) return res.status(403).json("Please provide the required fields");
  const data = await Comment.findById(id).then(e => e)
  
    if(!data) return res.status(404).json('User does not exist')

  Comment.findByIdAndUpdate(
    id,
    { $addToSet: { replies: `${commentContent}` } },
    { upsert: true }
  ).then(e => {

      return res.status(200).json(e)
  }).then(e => {
    return e
  })

});
// This section will help you get a list of all the comments.
CommentRoutes.get("/comments/comment", (req, res) => {
  Comment.find()
  .then((comments) => res.json(comments))
    .catch((err) =>
      res.status(404).json({ commentsfound: "No comments found" })
    );
});

// This section will help you get a single contributor by id
CommentRoutes.get("/comments/comment/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) =>
      res.status(404).json({ commentnotfound: "No comment found" })
    );
});

// This section will help you create a new comment.
CommentRoutes.post("/comments/comment/add", (req, res) => {
  Comment.create(req.body)
    .then((comment) => res.json({ msg: "Comment added" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this comment" })
    );
});

// Reply to a comment.
CommentRoutes.route("/comments/reply/add/:id").post(function (
  req,
  response
) {
  let db_connect = dbo.getDb();

  let myobj = {
    postId: req.body.postId,
    commentContent: req.body.commentContent,
    replyComment: req.body.replyComment,
    userId: req.body.userId,
    Date: currentDate,
  };
  db_connect.collection("comments").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a comment by id.
CommentRoutes.put("/comments/comment/update/:id", (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body)
    .then((comment) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// This section will help you delete a contributor
CommentRoutes.delete("/comments/comment/:id", (req, res) => {
  Comment.findByIdAndRemove(req.params.id, req.body)
    .then((comment) => res.json({ msg: "comment deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No comment" }));
});

// help you find a comment to reply to by id.

module.exports = CommentRoutes;
