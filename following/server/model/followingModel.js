const mongoose = require("mongoose");

//user schema/model
const followerSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
      required: true,
    },
    following: {
      type: [String],
      required: true,
    },
  },
  { collection: "following" }
);

module.exports = mongoose.model('following', followerSchema)