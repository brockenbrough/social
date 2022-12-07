const express = require("express");
const router = express.Router();
const newPostModel = require('../models/postModel')

router.put("/updatePost/:postId", async (req, res) => { 
    const { postId } = req.params;
    const { content, username } = req.body;
    newPostModel.findByIdAndUpdate
    (postId, { content, username } , { new: true }).exec((err,this.post))
    if (err) console.log(err);
    res.json(post);     

})
  
module.exports = router;