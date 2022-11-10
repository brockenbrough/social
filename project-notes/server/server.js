const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8095;
app.use(cors());
app.use(express.json());
app.use(require("./routes/project_notes"));
// get driver connection
const connectDB = require("./db/conn");
 
// Connect database.
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});