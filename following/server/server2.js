const express = require("express");
const app = express();
const cors = require('cors')

const followersDump = require('./routes/followersDump.js')
const followingDump = require('./routes/followingDump.js')

const dbConnection = require('./db/conn2.js')

require('dotenv').config();
const SERVER_PORT = 8085

dbConnection()
app.use(cors({origin: '*'}))
app.use(express.json())

app.use('/', followersDump)
app.use('/', followingDump)

app.listen(SERVER_PORT, (req, res) => {
    console.log(`server is listening on port ${SERVER_PORT}`);
})