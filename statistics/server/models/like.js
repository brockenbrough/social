const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    userId: String,
    postId: String,
    date: Date,
})

module.exports = mongoose.model("Like", likeSchema)