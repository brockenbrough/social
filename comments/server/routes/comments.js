
const express = require("express");
const { MongoRuntimeError } = require("mongodb");

// CommentRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /project_notes.
const CommentRoutes = express.Router();
//==============================================

// This will help us connect to the database
const Comment = require('../models/commentsModel');

// This section will help you get a list of all the comments.
CommentRoutes.get('/comments/comment', (req, res) => {
  Comment.find()
  .then (comments => res.json(comments))
  .catch(err => res.status(404).json({ commentsfound: 'No comments found'}));
});

// This section will help you get a single contributor by id
CommentRoutes.get('/comments/comment/:id', (req, res) => {
  Comment.findById(req.params.id)
  .then (comment => res.json(comment))
  .catch(err => res.status(404).json({ commentnotfound: 'No comment found' }));
});

// This section will help you create a new comment.
CommentRoutes.post('/comments/comment/add', (req, res) => {
  Comment.create(req.body)
  .then(comment => res.json({msg: 'Comment added'}))
  .catch(err => res.status(400).json({ error: 'Unable to add this comment'})); 
});

// help you find a comment to reply to by id.
CommentRoutes.put('/comments/comment/reply/:id', (req, res) => {
  Comment.findById(req.params.id, req.body)
  .then(comment => res.json({msg: 'Comment found'}))
  .catch(err => res.status(400).json({error: ' Comment not found'}));
  
});
  
// This section will help you update a comment by id.
CommentRoutes.put('/comments/comment/update/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body)
  .then(comment => res.json({msg: 'Updated successfully'}))
  .catch(err =>
    res.status(400).json({ error: 'Unable to update the Database' })
  );
});

// This section will help you delete a contributor
CommentRoutes.delete('/comments/comment/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id, req.body)
  .then(comment => res.json({msg: 'comment deleted successfully'}))
  .catch(err => res.status(404).json({ error:'No comment'}));
});

module.exports = CommentRoutes;