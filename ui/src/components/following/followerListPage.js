import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getUserInfo from '../../utilities/decodeJwt'
import axios from 'axios'


// The ContributorList component.  This is the main component in this file.
export default function FollowerList() {


  const [user, setUser] = useState({})
  const [followers, setFollowers] = useState([]);
  const params = useParams();
  

  // Hook useState - we are saying: call our state 'records' and use 'setRecords' to change it's value.
  
  // This method fetches the records from the database.
  // Hook useEffect - this hook is used to invoke something after rendering.
  useEffect(() => {
    // Define a function to get records. We are going to call it below.
    // We use async keyword so we can later say "await" to block on finish.
    async function getFollowers() {
        
      const response = await fetch(`http://localhost:8085/followers/${params.id.toString()}`);
      
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const fetchedFollowers = await response.json();

      setFollowers(fetchedFollowers[0].followers);  // update state.  when state changes, we automatically re-render.
      
    }
    
    getFollowers();   // Now that we defined it, call the function. 
    setUser(getUserInfo())
    
    return; 
  }, [followers.length]);  // If record length ever changes, this useEffect() is automatically called.
  
  // A method to delete a contributor
  async function deleteFollower(userId, targetUserId) {
    const deleteFollower = {
        userId: userId,
        targetUserId: targetUserId,
      }
    const url = "http://localhost:8085/followers/unfollow";

    const res = await axios.delete(url, {
        data: deleteFollower,
      })
      
    
    // We're going to patch up our state by removing the records corresponding to id in our current state.
    const newFollowers = followers.filter((el) => el !== el);
    setFollowers(newFollowers);  // This causes a re-render because we change state.
  }

  const Follower = ({record, user, deletePerson}) => (
    <tr>
      <td><a href="/publicprofile">{record}</a></td>
      {user.username == params.id.toString() ? <td><button className="btn btn-link" onClick={() => {deletePerson(record);}}>Delete</button></td> : <p></p>}
    </tr>
  );
  
  // This method will map out the records on the table.
  // Records.map means for each item in 'records' do something.
  // In our case we're return a presentation tag that will invoke rendering on a record.
  // We are returning component tags for records. See use in rendering below.
  // Note that component <Record> below has 3 props being passed (record, deleteRecord(), key)
  function followerList() {
    console.log(user)
    console.log(params.id.toString())
    return followers.map((record) => {
      return (
        <Follower record={record} deletePerson={() => deleteFollower(record, params.id.toString())}key={record} user={user}/>);
    });
  }

  //if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)

  // This following section will display the table with the records of individuals.
  // This is what RecordList returns: a rendering.  Notice that recordList() is
  // doing a lot of work.
  return (
    <div>
      <h3>Followers</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{followerList()}</tbody>
      </table>
    </div>
  );
}