//This is a comment about imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams} from "react-router";
import PublicUser from './PublicUser';
import FollowButton from "../following/followButton";
import getUserInfo from '../../utilities/decodeJwt'
import Comment from '../comments/comment'
import CommentList from "../comments/commentListPage";
import Feed from '../feed/Feed'
import PostList from '../post/feedPage'

import { Button } from "react-bootstrap";

import axios from 'axios'

// The PublicUserList component.  This is the main component in this file.
// 1. function PublicUserList
export default function PublicUserList() {
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState([])
  const navigate = useNavigate()
  const params = useParams();
  const [commentListRouteChange, setcommentListRouteChange] = useState([])
  const { username} = user
 
 
  // 2. function getUserId
  useEffect(() => {

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
        <h3>Users Public Page</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <h1><span className='username'> @{username}</span></h1>
              <FollowButton/>
              <br></br>
              <Button onClick={commentListRouteChange}><PostList/></Button> 
               <Button onClick={commentListRouteChange}><PostList/></Button>
            </tr>
          </thead>
          <tbody>{PublicUserList()}</tbody>
        </table>
      </div>
    );
    
    
}
  

