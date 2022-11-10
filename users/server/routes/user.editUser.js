const express = require("express");
const router = express.Router();
const z = require('zod')
const bcrypt = require("bcrypt");

const newUserModel = require('../models/userModel')


router.post('/editUser', async (req, res) =>
 {
    var {userId } = req.body;
  console.log(userId)
  newUserModel.findById(userId, function (err, user) {
    if (err){
        console.log(err);
    }
    else{
        return res.json(user)
    }
});
 if (error) return res.status(400).send({ message: error.errors[0].message });

    const {username, email, password} = req.body

    // // edit username
       const createUsername = new newUserModel({
         newUsername: req.body.newUsername,
         email: req.body.email,
         password: req.body.hashPassword,
     });
    try {
        const saveNewUsername = await createUsername.save();
        res.send(saveNewUsername);
    } catch (error) {
         res.status(400).send({ message: "Error trying to use new username" });
     }


    // //edit email //
     const newEmail = new newUserModel({
         username: req.body.username,
         newEmail: req.body.newEmail,
         password: hashPassword,
     });
     try {
         const saveNewEmail = await saveNewEmail.save();
        res.send(saveNewEmail);
     } catch (error) {
         res.status(400).send({ message: "Error trying to use new email address" });
     }


    // // edit password //
     const newPassword = new newUserModel({
        username: req.body.username,
         email: req.body.email,
         newPassword: req.body.hashPassword,
     });

   
     try {
         const saveNewPassword = await saveNewPassword.save();
         res.send(saveNewPassword);
     } catch (error) {
         res.status(400).send({ message: "Error editting new password, come up withs something better NOOB" });
     }
     //generates the hash
     const generateHash = await bcrypt.genSalt(Number(10))

      //parse the generated hash into the password
     const hashPassword = await bcrypt.hash(newPassword, generateHash)
})

module.exports = router;