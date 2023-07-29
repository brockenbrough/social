const express = require("express");
const app = express();
const cors = require('cors')
const loginRoute = require('./routes/user.login')
const getAllUsersRoute = require('./routes/user.getAllUsers')
const registerRoute = require('./routes/user.signup')
const getUserByIdRoute = require('./routes/user.getuserById')
const dbConnection = require('./config/db.config')
const editUser = require('./routes/user.editUser')
const deleteUser = require('./routes/user.deleteall')

require('dotenv').config();
const SERVER_PORT = 8081

dbConnection()
app.use(cors({origin: '*'}))
app.use(express.json())
app.use('/user', loginRoute)
app.use('/user', registerRoute)
app.use('/user', getAllUsersRoute)
app.use('/user', getUserByIdRoute)
app.use('/user', editUser)
app.use('/user', deleteUser)

app.listen(SERVER_PORT, (req, res) => {
    console.log(`The user service is running on port ${SERVER_PORT}`);
})
