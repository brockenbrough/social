const mongoose = require('mongoose');
const dotenv = require('dotenv');

module.exports = () =>{
  const databaseParams = { 
    useNewUrlParser: true, 
    useUnifiedTopology:true
  }
  try{
    mongoose.connect(process.env.ATLAS_URI)
    console.log("Connected to MongoDB Database")
  }
  catch(e){
    console.log('${e} could not connect')
  }
}
