const express = require("express");
const router = express.Router();

const newUserModel = require('../models/userModel')

router.get('/getUser', async (req, res) => {

  var { userId} = req.body
  console.log(userId)

  newUserModel.findById(userId, function(err, user){
    if(err){
      console.log(error)
    }else{
      console.log(user)
      return res.json(user)
    }
});

 })

module.exports = router;