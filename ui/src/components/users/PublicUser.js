import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import getUserInfo from '../../utilities/decodeJwt'
import Comment from '../comments/comment'
import Feed from '../feed/Feed'
import PostList from '../post/feedPage'
import CommentList from '../comments/commentListPage'
import axios from 'axios'
// using axois 
const PublicUser = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
   const [posts, setPosts] = useState([])

    useEffect(() => {
        setUser(getUserInfo())
    }, [])
    if (!user) 
    return (
    <div>
      <h3>You are on a public page <Link to={'/publicprofilepage'}>
      <a href='#'>for some fun stuff click here</a></Link></h3></div>)

    const { id, email, username, password } = user
    if (!user)
    return (
      <>
      <div>
        <h3>
           Please Login in{" "}
          <Link to={'http://localhost:8093/comments/commentListPage'}>
            <a href="#">here</a>
          </Link>
          </h3>
          </div>
      </>
      
    );

    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:8083/posts/getAllByUsername/${username}`)
        .then(res => {
          setPosts(res.data)
        })
        .catch(error => alert('error fetching data'))
    }

}



export default PublicUser