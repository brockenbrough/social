const mongoose = require("mongoose");

const like = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        label: "userId",
    },
    postId: {
        type: String,
        required: true,
        label: "postId",
    },
    date: {
        type: Date, 
        required: true,
        label: "dateOfLike"
    }
})