const express = require("express");
const app = express();
const cors = require('cors')

const following = require('./routes/following.js')

const dbConnection = require('./db/conn.js')

require('dotenv').config();
const SERVER_PORT = 8085

dbConnection()
app.use(cors({origin: '*'}))
app.use(express.json())

app.use('/', following)

app.listen(SERVER_PORT, (req, res) => {
    console.log(`server is listening on port ${SERVER_PORT}`);
})

