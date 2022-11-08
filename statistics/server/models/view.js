const mongoose=require('mongoose');

const view = new mongoose.Schema({
    userId: String,
    postId: String,
})

module.exports = mongoose.model("View", view)