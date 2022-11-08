const mongoose=require('mongoose');

const viewSchema = new mongoose.Schema({
    userId: String,
    postId: String,
})

module.exports = mongoose.model("View", viewSchema)