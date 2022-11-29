const express = require("express");

// projectNotesRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /project_notes.
const commentRoutes = express.Router();

// Load Developer model
const Comment = require("../models/commentsModel");

commentRoutes.get("/comments/comment", (req, res) => {
  Comment.find()
    .then((comment) => res.json(comment))
    .catch((err) =>
      res.status(404).json({ nobooksfound: "No comment found" })
    );
});

commentRoutes.get("/comments/comment/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) =>
      res.status(404).json({ developernotfound: "No comment found" })
    );
});

commentRoutes.post("/comments/comment/add", (req, res) => {
  Comment.create(req.body)
    .then((comment) => res.json({ msg: "Comment added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this comment" })
    );
});

commentRoutes.put("/comments/comment/update/:id", (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body)
    .then((comment) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res
        .status(400)
        .json({ error: "Unable to update comment to the Database" })
    );
});

commentRoutes.delete("/comments/comment/:id", (req, res) => {
  Comment.findByIdAndRemove(req.params.id, req.body)
    .then((comment) => res.json({ mgs: " entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such comment" }));
});

module.exports = commentRoutes;
