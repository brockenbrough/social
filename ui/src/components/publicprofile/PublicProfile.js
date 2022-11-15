import React, { useState } from 'react'
import axios from 'axios'
import Button from "react-bootstrap/Button";
import './publicprofile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form} from 'react-bootstrap';
import {Image} from "react-bootstrap"



const PublicProfile = () => {
  const [show, toggleShow] = useState(true);
  return (
    <div className= "Public Page">
    <header className = "Public-Header">
    <Form>
      <Form.Label>
      Social Media App
      </Form.Label>
          <h1> Public Profile Page</h1>
           <Form.Group controlID = "formUsername" class = "form-control">
           <Form.Label>
            Search
            <Form.Control type = "name" placeholder = "evilynincorportated" class = "form-control"/>
           </Form.Label>
          </Form.Group>
 
    <body>
    <Form.Label>
      Followers             
      </Form.Label>
      <Form.Label>
      Following
      </Form.Label>
      
    </body>
        
     <small>    
      <Button variant = "primary"> Login </Button>
     </small>
    </Form>
     
    </header>
    </div>

   
     
  )
}






export default PublicProfile;
