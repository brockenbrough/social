const express = require("express");
const app = express();
const cors = require('cors')
const createPostRoute = require('./routes/post.createPost')
const deletePostRoute = require('./routes/post.deletePost')
const getAllPostsRoute = require('./routes/post.getAllPosts')
const getPostByIdRoute = require('./routes/post.getPostById')
const updatePostRoute = require('./routes/post.updatePost')
const getAllByUsernameRoute = require('./routes/post.getAllByUsername')
const dbConnection = require('./config/db.config')

require('dotenv').config({path: 'config.env'});
const port =  8083;

dbConnection()
app.use(cors({origin: '*'}))
app.use(express.json())
app.use('/posts', createPostRoute)
app.use('/posts', deletePostRoute)
app.use('/posts', getAllPostsRoute)
app.use('/posts', getPostByIdRoute)
app.use('/posts', updatePostRoute)
app.use('/posts', getAllByUsernameRoute)


app.listen(port, (req, res) => {
  console.log(`server is listening on port ${port}`);
})
