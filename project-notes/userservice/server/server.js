const express = require("express");
const app = express();
const cors = require('cors')
const loginRoute = require('./routes/user.login')
const getAllUsersRoute = require('./routes/user.returnAll')
const registerRoute = require('./routes/user.signup')
const dbConnection = require('./config/db.config')
require('dotenv').config();
const SERVER_PORT = 8080

dbConnection()
app.use(cors({origin: '*'}))
app.use(express.json())
app.use('/user', loginRoute)
app.use('/user', registerRoute)
app.use('/user', getAllUsersRoute)

app.listen(SERVER_PORT, (req, res) => {
    console.log(`server is listening on port ${SERVER_PORT}`);
})
