const mongoose = require("mongoose");

//follower schema/model
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
  { collection: "followers" }
);

module.exports = mongoose.model('followers', followerSchema)