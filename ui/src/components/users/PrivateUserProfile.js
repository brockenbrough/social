import React, { useState } from 'react';
import { Image } from "react-bootstrap";
import {Row, Col} from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//link to service 
//http://localhost:8096/privateUserProfile


const PrivateUserProfile = () =>{
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
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
					<span><b>164</b> Followers </span> 
					<span><b>18</b> Following</span> 
					<span><b>800</b>Likes</span>
				</ul> 
			</div>
			<div class = "col-md-12 text-center">
		<>
		<Button onClick={handleShow}>Log Out</Button> 
      		<Modal
       		show={show}
        	onHide={handleClose}
        	backdrop="static"
        	keyboard={false}
     	 	>
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to Log Out?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
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