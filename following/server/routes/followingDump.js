const express = require("express");
const router = express.Router();
const followingModel = require('../model/followingModel.js')

router.get('/following', async (req, res) => {
    const following = await followingModel.find();
    return res.json(following)
  })

  module.exports = router;