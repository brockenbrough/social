import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getUserInfo from '../../utilities/decodeJwt'
import axios from 'axios'
import Button from 'react-bootstrap/Button';


// The ContributorList component.  This is the main component in this file.
export default function FollowButton() {

  window.onload = function() {
    isFollowing();
  };


  const [user, setUser] = useState()
  const params = useParams();


  // Hook useState - we are saying: call our state 'records' and use 'setRecords' to change it's value.

  // This method fetches the records from the database.
  // Hook useEffect - this hook is used to invoke something after rendering.
useEffect(() => {setUser(getUserInfo())}, [])
  // A method to delete a contributor
  async function followUser() {

    console.log(user.username+ " followed " +params.id.toString())
   
    const addFollowing = {
      userId: user.username,
      targetUserId: params.id.toString(),
    }
    const url = "http://localhost:8085/followers/follow";

    const res = await axios.post(url, addFollowing)


    // We're going to patch up our state by removing the records corresponding to id in our current state.
    isFollowing()
  }

  async function unfollowUser() {
   console.log(user.username+ " unfollowed " +params.id.toString())
    const unFollow = {
      userId: user.username,
      targetUserId: params.id.toString(),
    }
    const url = "http://localhost:8085/followers/unfollow";
    //const response = await fetch(`http://localhost:8085/followers/${params.id.toString()}`);
    const res = await axios.delete(url, {
      data: unFollow,
    })


    // We're going to patch up our state by removing the records corresponding to id in our current state.
    // This causes a re-render because we change state.
    isFollowing()
  }

  const [followState, setFollowState] = useState([]);

  async function isFollowing() {
    const response = await fetch(
      `http://localhost:8085/followers/${params.id.toString()}`
    );

    

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    try{
    const fetchedFollowers = await response.json();

    setFollowState(fetchedFollowers[0].followers);
    console.log(fetchedFollowers[0].followers)
    }catch(e){
      console.log("User doesn't exist in Followers Collection yet.")
    }
  
  }




  // const [buttonText, setButtonText] = useState([]);
  
  // if (isFollowing2){
  //   const changeText = (text) => setButtonText("Unfollow");
  // }
  //   else{
  //     const changeText = (text) => setButtonText("Follow");
  //   }
  
  


  // This method will map out the records on the table.
  // Records.map means for each item in 'records' do something.
  // In our case we're return a presentation tag that will invoke rendering on a record.
  // We are returning component tags for records. See use in rendering below.
  // Note that component <Record> below has 3 props being passed (record, deleteRecord(), key)

  //if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)

  // This following section will display the table with the records of individuals.
  // This is what RecordList returns: a rendering.  Notice that recordList() is
  // doing a lot of work.

  


  return (
    <div>
    {followState.find(x => (x === user.username)) ?             
      <Button variant="outline-danger" size="lg" onClick={(e) => unfollowUser()}>Unfollow</Button>:
      <Button variant="primary" size="lg" onClick={(e) => followUser()}>Follow</Button>}
    </div>
  );
}