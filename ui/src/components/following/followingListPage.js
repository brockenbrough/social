/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getUserInfo from '../../utilities/decodeJwt'
import axios from 'axios'

const userInfo = getUserInfo()

const Following = (props) => (
  <tr>
    <td><a href="/publicprofile">{props.record}</a></td>
    <td><button className="btn btn-link" onClick={() => {props.deletePerson(props.record);}}>Delete</button></td>
  </tr>
);


// The ContributorList component.  This is the main component in this file.
export default function FollowingList() {


  const [user, setUser] = useState({})
  const [followers, setFollowing] = useState([]);
  const params = useParams();
  

  // Hook useState - we are saying: call our state 'records' and use 'setRecords' to change it's value.
  
  // This method fetches the records from the database.
  // Hook useEffect - this hook is used to invoke something after rendering.
  useEffect(() => {
    // Define a function to get records. We are going to call it below.
    // We use async keyword so we can later say "await" to block on finish.
    async function getFollowing() {
        
      const response = await fetch(`http://localhost:8085/following/${params.id.toString()}`);
      
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const fetchedFollowing = await response.json();

      setFollowing(fetchedFollowing[0].following);  // update state.  when state changes, we automatically re-render.
      
    }
    
    getFollowing();   // Now that we defined it, call the function. 
    setUser(getUserInfo())
    
    return; 
  }, [following.length]);  // If record length ever changes, this useEffect() is automatically called.
  
  // A method to delete a contributor
  async function deleteFollowing(userId, targetUserId) {
    const deleteFollowing = {
        userId: userId,
        targetUserId: targetUserId,
      }
    const url = "http://localhost:8085/followers/unfollow";

    const res = await axios.delete(url, {
        data: deleteFollowing,
      })
      
    
    // We're going to patch up our state by removing the records corresponding to id in our current state.
    const newFollowing = following.filter((el) => el !== el);
    setFollowing(newFollowing);  // This causes a re-render because we change state.
  }
  
  // This method will map out the records on the table.
  // Records.map means for each item in 'records' do something.
  // In our case we're return a presentation tag that will invoke rendering on a record.
  // We are returning component tags for records. See use in rendering below.
  // Note that component <Record> below has 3 props being passed (record, deleteRecord(), key)
  function followingList() {
    return following.map((record) => {
      return (
        <Following record={record} deletePerson={() => deleteFollowing(record, params.id.toString())}key={record}/>);
    });
  }

  //if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)

  // This following section will display the table with the records of individuals.
  // This is what RecordList returns: a rendering.  Notice that recordList() is
  // doing a lot of work.
  return (
    <div>
      <h3>Following</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{followingList()}</tbody>
      </table>
    </div>
  );
}
*/