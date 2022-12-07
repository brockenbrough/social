import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt'
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col'
import FollowerList from "../following/followerListPage";
import PostList from "../post/feedPage";


// display of public user - EA //
const ShowPublicUser = () => {
const url = "http://localhost:8081/user/publicprofilepage";
const navigate = useNavigate();
//set constant variable, user & PostList //
const [user, setUser] = useState({})
const [PostList,setPosts] = useState({})
const params = useParams();
const [error, setError] = useState({});

useEffect(() => {
// a function that will retrieve all the users from the database
  async function getUsers(id) {
    const response = await fetch(`http://localhost:8081/user/publicprofilepage/${params.id.toString()}`);
    
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    
    try{
    const fetchedUsers = await response.json();

    setUser(fetchedUsers[0].users);  // update state.  when state changes, we automatically re-render.
    }catch(error){
      setError(error)
    }
    
  }
  
  getUsers();   
  setUser(getUserInfo())
  
  return; 
}, [user.length]); 
// A method to select a user.
async function selectUser(userId, targetUserId) 
{
  const selectUser = {
      userId: userId,
      targetUserId: targetUserId,
    }
  const url = "http://localhost:8085/user/profilepage";
}
  };
