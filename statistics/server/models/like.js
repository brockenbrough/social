const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
}, {collection: "likes"});

module.exports = mongoose.model("Like", likeSchema)