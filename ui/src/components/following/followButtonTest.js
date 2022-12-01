import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getUserInfo from '../../utilities/decodeJwt'
import axios from 'axios'


// The ContributorList component.  This is the main component in this file.
export default function FollowButton() {


  const [user, setUser] = useState()
  const [followers, setFollowing] = useState([]);
  const params = useParams();


  // Hook useState - we are saying: call our state 'records' and use 'setRecords' to change it's value.

  // This method fetches the records from the database.
  // Hook useEffect - this hook is used to invoke something after rendering.
useEffect(() => {setUser(getUserInfo())}, [])
  // A method to delete a contributor
  async function followUser() {
   
    const addFollowing = {
      userId: user.username,
      targetUserId: params.id.toString(),
    }
    const url = "http://localhost:8085/followers/follow";

    const res = await axios.post(url, addFollowing)
    console.log(res)


    // We're going to patch up our state by removing the records corresponding to id in our current state.
    const newFollowing = followers.filter((el) => el !== el);
    setFollowing(newFollowing);  // This causes a re-render because we change state.
  }

  async function unfollowUser() {
   console.log(params.id.toString(),user.username)
    const unFollow = {
      userId: user.username,
      targetUserId: params.id.toString(),
    }
    const url = "http://localhost:8085/followers/unfollow";
    //const response = await fetch(`http://localhost:8085/followers/${params.id.toString()}`);
    const res = await axios.delete(url, {
      data: unFollow,
    })
    console.log(res)


    // We're going to patch up our state by removing the records corresponding to id in our current state.
    const newFollowing = followers.filter((el) => el !== el);
    setFollowing(newFollowing);  // This causes a re-render because we change state.
  }

  async function isFollowing() {
    const response = await fetch(
      `http://localhost:8085/followers/${params.id.toString()}`
    );

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const fetchedFollowers = await response.json();

    setFollowing(fetchedFollowers[0].followers); // update state.  when state changes, we automatically re-render.
    if (followers.includes(user.username)) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }

  let isBroken = async () => {
    let result = await isFollowing();
    console.log(result)
    return result
  }
  

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
    <button onClick={(e) => unfollowUser()}>Unfollow</button>
    <button onClick={(e) => followUser()}>Follow</button>
    <button onClick={(e) => isFollowing()}>Is following?</button>
    { isBroken ? <button onClick={(e) => unfollowUser()}>Unfollow</button> : <button onClick={(e) => followUser()}>Follow</button> }
    </div>
  );
}