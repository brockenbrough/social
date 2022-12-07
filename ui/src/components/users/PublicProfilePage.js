//This is a comment about imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getUserInfo from '../../utilities/decodeJwt'
import PublicUser from './PublicUser';
import FollowButton from "../following/followButton";
import PostList from "../post/getAllPost";


// The PublicUserList component.  This is the main component in this file.
// 1. function PublicUserList
export default function PublicUserList() {
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState([])
 
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
    }
    
    getUserInfo(); // Now that we defined it, call the function.
    setUser(getUserInfo());
    
    return; 
  }, [userList.length]);  // If record length ever changes, this useEffect() is automatically called.

  function UserinList() {
    return userList.map((record) => {
      return (
        <PublicUserList
          record={record}
          key={record._id}
        />
      );
    });
  }
  if (!user)
    return (
      <div>
        <h3>
          You are not authorized to view this page, Please Login in{" "}
          <Link to={"/login"}>
            <a href="#">here</a>
          </Link>
        </h3>
      </div>
    );
    return (
      <div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <tbody>{UserinList()}</tbody>
        </table>
      </div>
    );
}
  

