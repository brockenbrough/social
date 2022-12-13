//This is a comment about imports
import React, { useEffect, useState} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useParams} from "react-router";
import PublicUser from './PublicUser';
import FollowButton from "../following/followButton";
import getUserInfo from '../../utilities/decodeJwt'
import Comment from '../comments/comment'
import CommentList from "../comments/commentListPage";
import Feed from '../feed/Feed'
import PostList from '../post/feedPage'
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import axios from 'axios'
import Post from "../post/post";

// The PublicUserList component.  This is the main component in this file.
// 1. function PublicUserList
export default function PublicUserList() {
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState([])
  const navigate = useNavigate()
  const params = useParams();
  const [commentListRouteChange, setcommentListRouteChange] = useState([])
  const { state : { publicUser } = {} } = useLocation()
  const [posts, setPosts] = useState([])
  
  const fetchPosts = async () => {
	  const res = await axios.get(`http://localhost:8083/posts/getAllByUsername/${publicUser.username}`)
		  .then(res => {
			  setPosts(res.data)
		  })
		  .catch(error => alert('error fetching data'))
	}

  // 2. function getUserId
  useEffect(() => {

    fetchPosts()

    async function getUser() {
      const response = await fetch('http://localhost:8096/components/users/publicProfilePage');
      
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const fetchedRecords = await response.json();
      setUserList(fetchedRecords); 

      const postListRouteChange = () =>{ 
      navigate(`/commentListPage/${params.id.toString()}`); // To use in the following button to switch to the user's following list.
      }

       
    }
    
    getUserInfo(); // Now that we defined it, call the function.
    setUser(getUserInfo());
    
    return; 
  }, [userList.length]);  // If record length ever changes, this useEffect() is automatically called.

  function UserinList() {
    // if the user is not signed in 
    if (!user)
    return userList.map((getUserInfo) => { //return userinfo
      return (
        <PublicUserList
          getUserInfo={getUserInfo}
          key={getUserInfo._id}
        />
      );
    });
  }
  if (!user)
    return (
      <div>
        <h3>
           Please Login in{" "}
          <Link to={'http://localhost:8093/comments/commentListPage'}>
            <a href="#">here</a>
          </Link>
          </h3>
          </div>
    );
    if (user)
    return (
      <div>
        {/* <h3>@{publicUser.username}</h3>
        
        <h3>All Posts</h3>
            {posts.map((posts, index) => (
                <div key={index}>
                    <Card style={{ width: '18rem' , marginTop:'1cm', marginLeft:'.5cm',background:'aliceblue'}}>
                        
                        <Card.Body>
                            <Card.Title><h5>Username:</h5><Link to={'/publicprofilepage'}>{posts.username}</Link>{}</Card.Title>
                                {posts.content}

                        </Card.Body>
                    </Card>
                </div>
            ))} */}
            {posts.map((posts, index) => {
              return (<Post posts={posts} />)
            })}
      </div>
    );
    
    
}
  

