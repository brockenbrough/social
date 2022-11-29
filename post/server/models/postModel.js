const mongoose = require("mongoose");
//post schema/model
const newPostSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        label: "username",
    },
    date: {
        type: Date,
        default: Date.now,
    },
    content: {
        type: String,
        required: true,
    },
  
    postImage: { type: String}
  },
    {collection: "posts"}
);
module.exports = mongoose.model('posts', newPostSchema);