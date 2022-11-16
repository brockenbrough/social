//This is a comment about imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContributorNavbar from "./contributorNavbar";
import getUserInfo from '../../utilities/decodeJwt'
import Contributor from './contributor';


// The ContributorList component.  This is the main component in this file.
export default function ContributorList() {
  const [user, setUser] = useState({})
  const [contributors, setContributors] = useState([]);
  // Hook useState - we are saying: call our state 'records' and use 'setRecords' to change it's value.
  
  // This method fetches the records from the database.
  // Hook useEffect - this hook is used to invoke something after rendering.
  useEffect(() => {
    // Define a function to get records. We are going to call it below.
    // We use async keyword so we can later say "await" to block on finish.
    async function getRecords() {
      const response = await fetch(`http://localhost:8095/project_notes/contributor/`);
      
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const fetchedRecords = await response.json();
      setContributors(fetchedRecords);  // update state.  when state changes, we automatically re-render.
    }
    
    getRecords();   // Now that we defined it, call the function. 
    setUser(getUserInfo())
    
    return; 
  }, [contributors.length]);  // If record length ever changes, this useEffect() is automatically called.
  
  // A method to delete a contributor
  async function deleteContributor(id) {
    await fetch(`http://localhost:8095/project_notes/contributor/${id}`, {
      method: "DELETE"
    });
    
    // We're going to patch up our state by removing the records corresponding to id in our current state.
    const newRecords = contributors.filter((el) => el._id !== id);
    setContributors(newRecords);  // This causes a re-render because we change state.
  }
  
  // This method will map out the records on the table.
  // Records.map means for each item in 'records' do something.
  // In our case we're return a presentation tag that will invoke rendering on a record.
  // We are returning component tags for records. See use in rendering below.
  // Note that component <Record> below has 3 props being passed (record, deleteRecord(), key)
  function contributorList() {
    return contributors.map((record) => {
      return (
        <Contributor
          record={record}
          deleteContributor={() => deleteContributor(record._id)}
          key={record._id}
        />
      );
    });
  }
  if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)

  // This following section will display the table with the records of individuals.
  // This is what RecordList returns: a rendering.  Notice that recordList() is
  // doing a lot of work.
  return (
    <div>
      <ContributorNavbar/>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <tbody>{contributorList()}</tbody>
      </table>
    </div>
  );
}

//Evan bum Comment
//A comment made to test staging, committing, and pushing - Uk
