import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


// display of public user - EA
// The ShowPublicUser component.  This is the main component in this file.
/////////////////////////////////////////
export default function ShowPublicUser() 
{
  const [user, setUser] = useState({})
  const [contributors, setContributors] = useState([]);
  name = "",
 
  useEffect(() => {
    // Define a function to get records. We are going to call it below.
    // We use async keyword so we can later say "await" to block on finish.
    async function getRecords() {
      const response = await fetch(`http://localhost:8081/publicprofilepage/`);
      
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const fetchedRecords = await response.json();
      setContributors(fetchedRecords);
    }
    
    getRecords();  
    setUser(getUserInfo())
    
    return; 
  }, [contributors.length]);  
  ///////////////////////////////////////////////////////////////////
  
  // A method to delete a user
  async function deleteUser(id) 
  {
    await fetch(`http://localhost:8081/publicuser/${id}`, {
      method: "DELETE"
    });
    const newRecords = contributors.filter((el) => el._id !== id);
    setContributors(newRecords); 
  }
  
  function publicUserList() 
  {
    return contributors.map((record) => {
      return (
        <Contributor
          record={record}
          deleteContributor={() => deleteUser(record._id)}
          key={record._id}
        />
      );
    });
  }
  if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)

  // This following section will display the table with the records of individuals.
  /////////////////////////////////////////////////
  return 
  (
    <div>
      <ContributorNavbar/>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <tbody>{publicUserList()}</tbody>
      </table>
    </div>
  );
}