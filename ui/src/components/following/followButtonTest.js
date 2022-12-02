import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getUserInfo from '../../utilities/decodeJwt'
import axios from 'axios'
import Button from 'react-bootstrap/Button';


// The FollowButton component.  This is the main component in this file. We will talk to the user team to implement this component.
export default function FollowButton() {


  // When the page loads, this puts what button the state should be in.
  window.onload = function() {
    isFollowing();
  };


  const [user, setUser] = useState()
  const params = useParams();


useEffect(() => {setUser(getUserInfo())}, [])

  // A method to follow a user. Take the id from the params in the link.
  async function followUser() {

    console.log(user.username+ " followed " +params.id.toString())
   
    const addFollowing = {
      userId: user.username,
      targetUserId: params.id.toString(),
    }
    const url = "http://localhost:8085/followers/follow";

    const res = await axios.post(url, addFollowing)


    
    isFollowing() // Call this to help check the button to check which state it should be in.
  }

  // A method to follow a user. Take the id from the params in the link.

  async function unfollowUser() {

   console.log(user.username+ " unfollowed " +params.id.toString())

    const unFollow = {
      userId: user.username,
      targetUserId: params.id.toString(),
    }
    const url = "http://localhost:8085/followers/unfollow";

    const res = await axios.delete(url, {
      data: unFollow,
    })

    isFollowing() // Call this to help check the button to check which state it should be in. 
  }

  const [followState, setFollowState] = useState([]);

  // This function is very important, it helps figure out which state the button should be in.
  async function isFollowing() {

    const response = await fetch(
      `http://localhost:8085/followers/${params.id.toString()}`
    );

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    try {
      const fetchedFollowers = await response.json();

      setFollowState(fetchedFollowers[0].followers);
      console.log(fetchedFollowers[0].followers)
    } catch (e) {
      console.log("User doesn't exist in Followers Collection yet.")
    }
  
  }

  //if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)

  // Returns the unfollow button or the follow button depending on the IsFollowing() state.
  return (
    <div>
    {followState.find(x => (x === user.username)) ?             
      <Button variant="outline-danger" size="lg" onClick={(e) => unfollowUser()}>Unfollow</Button>:
      <Button variant="primary" size="lg" onClick={(e) => followUser()}>Follow</Button>}
    </div>
  );
}