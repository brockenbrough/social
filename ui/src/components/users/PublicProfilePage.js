//This is a comment about imports
import React, { useEffect, useState} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useParams} from "react-router";
// import PublicUser from './PublicUser';
// import FollowButton from "../following/followButton";
import getUserInfo from '../../utilities/decodeJwt'
// import Comment from '../comments/comment'
// import CommentList from "../comments/commentListPage";
// import Feed from '../feed/Feed'
// import PostList from '../post/feedPage'
// import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import axios from 'axios'
import Post from "../post/post";

// The PublicUserList component.  This is the main component in this file.
// 1. function PublicUserList
export default function PublicUserList() {
  const [user, setUser] = useState({})
  const {username} = useParams();
  const [commentListRouteChange, setcommentListRouteChange] = useState([])
 
  const [posts, setPosts] = useState([])
 
  const fetchPosts = async () => {
	  const res = await axios.get(`http://localhost:8083/posts/getAllByUsername/${username}`)
		  .then(res => {
			  setPosts(res.data)
		  })
		  .catch(error => alert('error fetching data'))
	}

  // 2. function getUserId
  useEffect(() => {

    fetchPosts()
    getUserInfo(); // Now that we defined it, call the function.
    setUser(getUserInfo());
    
    return; 
  }, []);  // If record length ever changes, this useEffect() is automatically called.
 

    if (user)
    return (
      <div>
      <Button>FollowButton</Button>
      <Button>Unfollow Button</Button>
            {posts.map((posts, index) => {
              
              return (<Post posts={posts} />)
            })}
      </div>
    );
    
    
}
  

