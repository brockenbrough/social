import React from "react";
import { useParams } from "react-router";
import FollowButton from './followButton.js';
import FollowingCount from './getFollowingCount.js';
import FollowerCount from './getFollowerCount.js';
import './followingSheet.css'


// Test page for the following service components.
export default function TestPage() {

  const params = useParams(); // MUST ALWAYS USE PARAMS to gather info from the following and follower collections.

  //if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)



  // Returns the Profile name, FollowButton which would be the follow button, unfollow button or Edit Profile button.
  // Returns a Button with the followerCount and you can click it to go to the Follower list of the user.
  // Returns a Button with the followingCount and you can click it to go to the Following list of the user.
  return (
    <div id="followPage">
    <h1>{params.id.toString()}</h1>
    <FollowButton username={params.id.toString()}/>
    <br></br>
    <div className='d-inline-flex p-2 gap-3'>
      <FollowerCount username={params.id.toString()}/> <FollowingCount username={params.id.toString()}/>
    </div>
    </div>
  );
}