const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    userId: String,
    postId: String,
    date: Date,
})

module.exports = mongoose.model("Like", schema)