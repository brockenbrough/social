const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

module.exports = () => {
    const databaseParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try{
        mongoose.connect(process.env.ATLAS_URI)
        console.log("connected to the mongodb database")
    } catch(error){
        console.log(`${error} could not connect`)
    }
}

