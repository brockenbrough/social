import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import './privateUser.css'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

//link to service 
//http://localhost:8096/privateUserProfile


const PrivateUserProfile = () =>{
//   const [user, setUser] = useState({})
//   useEffect(() => {
//     setUser(getUserInfo())
//   }, [])

//   if (!user) return (
//     <div>
//         <h3>
//             You are not authorized to view this page, Please Login in 
//             <Link to={'/login'}>
//                 <a href='#'>
//                     here
//                 </a>
//             </Link>
//         </h3>
//     </div>
// )

//   )

return(
	<div class="container">
		<div class="profile">
				<h2 class="profile-username">Enoc</h2>
        <div class = 'profile-image'>
          <img src ={require("./elmo.jpeg")}/>
        </div>
			<div class="profile-stats">
				<ul>
					<li><span class="profile-count">164 </span> Followers</li>
					<li><span class="profile-count">18</span> Following</li>
					<li><span class="profile-count">800</span> Likes</li>
				</ul> 
			</div>
		</div>
    <h3 class = 'txt'>Post</h3>
    
	</div>
)


    }

export default PrivateUserProfile