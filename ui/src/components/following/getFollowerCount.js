import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router";
import './followingSheet.css'
import Button from 'react-bootstrap/Button';


// The FollowerCount component.  This is the main component in this file.

export default function FollowerCount(props) {

  let navigate = useNavigate() 

    const [followState, setFollowerCount] = useState([]);
    const [error, setError] = useState([]);



  const params = useParams();

  useEffect(() => {

    // Gets the follower count of the user.
    async function getFollowerCount() {

      const response = await fetch(`http://localhost:8085/followers/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      try{
      const fetchedFollowers = await response.json();

      setFollowerCount(fetchedFollowers[0].followers);  // Sets the fetched followers of the user.
      console.log(fetchedFollowers[0].followers);



      }catch(error){
        setError(error)
      }


    }

    getFollowerCount();  

    return; 
  }, [followState.length]);  


  const followerRouteChange = () =>{ 
    navigate(`/followers/${props.username}`); // To use in the follower's button to switch to the user's follower's list.
  }



  // This function is very important, it returns the follower count.

  function FollowersCount(){
    if (followState.length > 0){            
      return followState.length;
    }
    else{
      return 0;
    }
}

  //if (!user) return (<div><h3>You are not authorized to view this page, Please Login in <Link to={'/login'}><a href='#'>here</a></Link></h3></div>)

  // Returns the Follower count of the user.
  return (<div><Button onClick={followerRouteChange}><FollowersCount/> Followers</Button></div>);
}