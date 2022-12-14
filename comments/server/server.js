const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8089;
app.use(cors());
app.use(express.json());
app.use(require("./routes/comments"));
// get driver connection
const connectDB = require("./db/conn");
 
// Connect database.
connectDB();

app.listen(port, () => {
  console.log(`The comment server is running on ${port}`);
});