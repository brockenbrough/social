const express = require("express");
const router = express.Router();
const followerModel = require('../model/followerModel.js')

router.get('/followers', async (req, res) => {
    const followers = await followerModel.find();
    return res.json(followers)
  })

  module.exports = router;