const express = require("express");
const router = express.Router();
const z = require('zod')
const bcrypt = require("bcrypt");

const newUserModel = require('../models/userModel')


router.post('/editUser', async (req, res) => {
    const { userId, username, email, password } = req.body
    const obj = {}

    if (!userId) return res.status(403).json("Please provide a userId")
    if (!username && !email && !password) return res.status(403).json("Please provide the fields for the user youd like to edit")

    if (username) obj["username"] = username
    if (email) obj["email"] = email
    if (password) {
        const generateHash = await bcrypt.genSalt(Number(10))
        const hashPassword = await bcrypt.hash(password, generateHash)
        obj["password"] = hashPassword
    }



    const data = await newUserModel.findByIdAndUpdate(userId, obj)

    if (!data) {
        return res.status(404).json('Something went wrong, CHeck userId')
    }


    return res.status(200).json("Success")

    // newUserModel.findByIdAndUpdate({})
})

module.exports = router;