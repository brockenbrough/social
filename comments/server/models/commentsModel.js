const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
   username: {
    type: String,
    default: '',
   },
  
   commentContent:{ 
    type: String,
    default: '',
   },

   date: {
    type: Date,
    default: () => Date.now(),
   },
   
  },

   { collection: "comments" });

// comments is the name of the collection in mongodb
module.exports = Comment = mongoose.model('comments', commentsSchema)