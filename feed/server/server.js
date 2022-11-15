const express = require("express");
const app = express();
const cors = require("cors");
const port = 8093;
require('./routes/feed')

app.use(cors());
app.use(express.json());
app.use(require("./routes/feed"));
 
//Start server
app.listen(port, () => {
  console.log(`The feed server is running on port ${port}`);
});