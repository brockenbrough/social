//This is a comment about imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarContributor from "./navbarContributor";
import getUserInfo from '../../utilities/decodeJwt'


// Adding new method
// The contributor component
const Follower = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>
      <Link className="btn btn-link" to={`/project-notes/editContributor/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteContributor(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);



// The ContributorList component.  This is the main component in this file.
export default function ContributorList() {
  const [user, setUser] = useState({})
  const [followers, setFollowers] = useState([]);
  // Hook useState - we are saying: call our state 'records' and use 'setRecords' to change it's value.
  
  // This method fetches the records from the database.
  // Hook useEffect - this hook is used to invoke something after rendering.
  useEffect(() => {
    // Define a function to get records. We are going to call it below.
    // We use async keyword so we can later say "await" to block on finish.
    async function getFollowers() {
      const response = await fetch(`http://localhost:8085/followers/Doodle`);
      
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const fetchedFollowers = await response.json();
      setFollowers(fetchedFollowers);  // update state.  when state changes, we automatically re-render.
    }
    
    getFollowers();   // Now that we defined it, call the function. 
    setUser(getUserInfo())
    
    return; 
  }, [followers.length]);  // If record length ever changes, this useEffect() is automatically called.
  
  // A method to delete a contributor
  async function deleteFollower(id) {
    await fetch(`http://localhost:8085/followers/unfollow`, {
      method: "DELETE"
    });
    
    // We're going to patch up our state by removing the records corresponding to id in our current state.
    const newFollowers = followers.filter((el) => el._id !== id);
    setFollowers(newFollowers);  // This causes a re-render because we change state.
  }
  
  // This method will map out the records on the table.
  // Records.map means for each item in 'records' do something.
  // In our case we're return a presentation tag that will invoke rendering on a record.
  // We are returning component tags for records. See use in rendering below.
  // Note that component <Record> below has 3 props being passed (record, deleteRecord(), key)
  function followerList() {
    return followers.map((record) => {
      return (
        <Follower record={record} deleteContributor={() => deleteFollower(record._id)}key={record._id}/>);
    });
  }

  //if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)

  // This following section will display the table with the records of individuals.
  // This is what RecordList returns: a rendering.  Notice that recordList() is
  // doing a lot of work.
  return (
    <div>
      <NavbarContributor/>
      <h3>Followers</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{followerList()}</tbody>
      </table>
    </div>
  );
}