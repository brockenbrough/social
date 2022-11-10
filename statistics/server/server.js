const express = require("express");
const app = express();
const cors = require("cors");
const statisticsRoute = require('./routes/statistics')
const dbConnection = require('./db/conn')

require('dotenv').config({path: 'config.env'});
const SERVER_PORT = 8087

dbConnection()
app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/statistics', statisticsRoute);

 
app.listen(SERVER_PORT, (req,res) => {
  console.log(`Server is running on port: ${SERVER_PORT}`);
});