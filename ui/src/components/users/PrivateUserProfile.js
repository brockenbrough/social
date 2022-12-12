import React, { useState, useEffect, useContext } from 'react';
import { Image } from "react-bootstrap";
import {Row, Col} from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {UserContext} from "../../App"
import { Link, useNavigate } from 'react-router-dom'

//link to service 
//http://localhost:8096/privateUserProfile


const PrivateUserProfile = () =>{
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const user = useContext(UserContext)
//const username = user.username;

const navigate = useNavigate();

// handle logout button
const handleLogout = async => {
	localStorage.clear()
    navigate("/");
  }

// handle Edit User Information button
const handleEditUser = async => {
    navigate("/editUserPage");
  }

return(
	<div class="container">
		<div class="col-md-12 text-center">
<h1>{user && user.username}</h1>
        <div class = 'col-md-12 text-center'>
          <Image roundedCircle src={require("./elmo.jpeg")}/>
        </div>
			<div class="col-md-12 text-center">
				<ul>
					<span><b>164</b>&nbsp;Followers </span>&nbsp; 
					<span><b>18</b>&nbsp;Following</span>&nbsp; 
					<span><b> 800</b>&nbsp;Likes</span>
				</ul> 
			</div>
			<div class = "col-md-12 text-center">
		<>
		<Button className="me-2" onClick={handleShow}>Log Out</Button> 
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
          <Button variant="primary" onClick={handleLogout}>
			  Yes
		  </Button>
        </Modal.Footer>
      </Modal>
	  <Button onClick={handleEditUser}>Edit User Information</Button> 
    </>
			</div>
		</div>
    <h3 class = 'txt'>Post</h3>
	
<Card.Header>{user && user.username}</Card.Header>
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