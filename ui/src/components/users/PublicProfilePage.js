//This is a comment about imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams} from "react-router";
import getUserInfo from '../../utilities/decodeJwt'
import PublicUser from './PublicUser';
import FollowButton from "../following/followButton";
import PostList from "../post/getAllPost";
import Feed from "../feed/Feed";
import { Button } from "react-bootstrap";

import axios from 'axios'

// The PublicUserList component.  This is the main component in this file.
// 1. function PublicUserList
export default function PublicUserList() {
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState([])
  const navigate = useNavigate()
  const params = useParams();
  const [postListRouteChange, setpostListRouteChange] = useState([])
 
 
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
      navigate(`/getAllPost/${params.id.toString()}`); // To use in the following button to switch to the user's following list.
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
  if (user)
    return (
      <div>
        <h3>
           Please Login in{" "}
          <Link to={"/login"}>
            <a href="#">here</a>
          </Link>
        </h3>
    <h1>Profile Name: {params.id.toString()}</h1>
    <FollowButton/>
    <br></br>
    <Button onClick={postListRouteChange}><PostList/></Button> 
    <Button onClick={postListRouteChange}><PostList/></Button>
    </div>
    );
    return (
      <div>
        <h3>Users Public Page</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{PublicUserList()}</tbody>
        </table>
      </div>
    );
    
    
}
  

