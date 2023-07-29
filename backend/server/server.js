const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8095;

app.use(cors());
app.use(express.json());
app.use(require("./routes/project_notes"));
app.use(require("./routes/comments"));
app.use(require('./routes/following'));
app.use(require("./routes/feed"));
app.use(require('./routes/posts/post.createPost'))
app.use(require('./routes/posts/post.deletePost'))
app.use(require('./routes/posts/post.getAllPosts'))
app.use(require('./routes/posts/post.getPostById'))
app.use(require('./routes/posts/post.updatePost'))
app.use(require('./routes/posts/post.getAllByUsername'))
app.use(require('./routes/posts/post.uploadImages'))

// get driver connection
const connectDB = require("./db/conn");
 
// Connect database.
connectDB();

app.listen(port, () => {
  setTimeout(() => {
    console.log(`All services are running on port: ${port}`);
  }, 1000); // Add a 1-second delay
});
