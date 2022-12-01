import React, { useState } from 'react';
import { Image } from "react-bootstrap";
import {Row, Col} from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
//<img src ={require("./elmo.jpeg")}/>
// )

//   )

return(
	<div class="container">
		<div>
			<h2 class="d-flex flex-wrap justify-content-md-center">Enoc</h2>
        <div class="d-flex flex-wrap justify-content-md-center">
			<Row>
   			 <Col xs={12} sm={4} md={4}>
			 	<Image width="150" roundedCircle src={require("./elmo.jpeg")} />
    		 </Col>
			</Row>
        </div>
			<div class="d-flex flex-wrap justify-content-md-center">
				<ul>
					<span class="profile-count">164 Followers </span> 
					<span class="profile-count"> 18 Following</span> 
					<span class="profile-count"> 800  Likes</span>
				</ul> 
			</div>
		</div>
    <h3 class = 'txt'>Post</h3>
	
	<Card.Header>Enoc</Card.Header>
                  <div>
				  <Row>
   			 <Col xs={12} sm={4} md={4}>
			 	<Image width="150" roundedCircle src={require("./elmo.jpeg")} />
    		 </Col>
			</Row>
			<Card style={{ width: '5rem' }}></Card>
				<div>11/02/2022</div>
                   </div>
                   <Card style={{ width: '45rem' }}>
                  <Card.Body>Want to go on a picnic? Alpaca lunch
				  </Card.Body>
				 
				  </Card>
                  <div>
                      <ToggleButton href='#'  className = "me-2 " aria-label = "Second group">2.3k ❤︎</ToggleButton>
					  <Button  className = "me-2 ">Update</Button> 
				  	  <Button  className = "me-2 ">Delete</Button> 
     <>
    </>
  </div>
  </div>
  
)
    }

export default PrivateUserProfile