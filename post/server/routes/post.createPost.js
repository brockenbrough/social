const express = require("express");
const router = express.Router();
const newPostModel = require('../models/postModel')

router.post("/createPost", async (req, res) => { 
  const { username, content } = req.body

  const createNewPost = newPostModel({
    username: username,
    content: content
  })
  
  const response = await newPostModel.create(createNewPost)
  .then(post => res.json({ msg: 'Post created successfully' }))
  .catch(err => res.status(404).json({ error: 'Could not create post' }));
})

module.exports = router;