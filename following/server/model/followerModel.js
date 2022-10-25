const mongoose = require("mongoose");

//user schema/model
const followerSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
      required: true,
    },
    followers: {
      type: [String],
      required: true,
    },
  },
  { collection: "followerList" }
);

module.exports = mongoose.model('followerList', followerSchema)