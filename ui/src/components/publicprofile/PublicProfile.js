import React, { useState } from 'react'
import axios from 'axios'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
  



const PublicProfile = () => {
  // const [show, toggleShow] = useState(true);
  return (
    <div class="container p-3 my-3 bg-dark text-white">
    <div className= "Public Page">
    <header className = "Public-Header">
    <h1> Evelyn</h1>
    <Form>
      <Form.Label>
      Social Media App
      </Form.Label>
      <body> 
      <Form.Label>
      Search
      <Form.Control type = "name" placeholder = "username" class = "form-control"/>
      </Form.Label>
      </body>

 
    <Button variant = "primary" className="mx-1 my-1" > Following </Button>
    <Button variant = "primary" className="mx-1 my-1" > Followers </Button>    
    <Button variant = "primary" className="mx-1 my-1" >Login </Button>  
    </Form>
     
    </header>
    </div>
    </div>

   
     
  )
}

export default PublicProfile;
