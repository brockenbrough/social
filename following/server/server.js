const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8085;
const followRoute = require("./routes/following")
app.use(cors());
app.use(express.json());
app.use("/", followRoute);
// get driver connection
const dbo = require("./db/conn");
const mongoose = require("mongoose");
 
app.listen(port, () => {
  // perform a database connection when server starts
  mongoose.connect(process.env.ATLAS_URI)
  console.log(`Server is running on port: ${port}`);
});