import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt'
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// display of public user - EA //
const ShowPublicUser = (currentUserId) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(getUserInfo())
  }, [])

  if (!user) return (
      <div>
          <h3>
              You are not authorized to view this page, Please Login in <Link to={'/login'}> <a href='#'> here </a> </Link>
          </h3>
      </div>
  )

  return (
      <>
          <div>
              <Card>
                  <Card.Header>CheeseB0y</Card.Header>
                  <div class = 'profile-image'>
                   <img src ={require("./elmo.jpeg")}/>
                   </div>
                  <Card.Body>I love this! Bruh Lets get groovy</Card.Body>
                  <div>
                      <ToggleButton href='#'>2.3k ❤︎</ToggleButton>
                      <div className="vr" />
                      <Button>Comments</Button>
                      <div className="vr" />
                      <FloatingLabel controlId="me-auto" label="Comments">
                      <Form.Control
                      as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '80px' }}
        />
      </FloatingLabel>
                      <>
    </>
                  </div>
                  <div>11/02/2022</div>
              </Card>
              <Card>
                  <Card.Header>NewUser23</Card.Header>
                  <div class = 'profile-image'>
                   <img src ={require("./smallcatscreaming.jpg")}/>
                   </div>
                  <Card.Body>Hello, I am new here, be my friend please</Card.Body>
                  <div>
                      <ToggleButton href='#'>3 ❤︎</ToggleButton>
                      <div className="vr" />
                      <Button>Comments</Button>
                      <div className="vr" />
                      <FloatingLabel controlId="me-auto" label="Comments">
                      <Form.Control
                      as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '80px' }}
        />
      </FloatingLabel>
                      <>
    </>
                  </div>
                  <div>11/02/2022</div>
              </Card>
              <Card>
                  <Card.Header>JWood03</Card.Header>
                  <div class = 'profile-image'>
                   <img src ={require("./cryingcat.jpg")}/>
                   </div>
                  <Card.Body>This is a test UI and it does not actually work yet. Yikes</Card.Body>
                  <div>
                  <ToggleButton href='#'>3.5k ❤︎</ToggleButton>
                  <div className="vr" />
                  <Button href='#'>Comments</Button>
                  <div className="vr" />
                      <FloatingLabel controlId="me-auto" label="Comments">
                      <Form.Control
                      as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '80px' }}
        />
      </FloatingLabel>
                      <>
    </>
                  </div>
                  <div>11/02/2022</div>
              </Card>
          </div>
      </>
  )
}



export default ShowPublicUser

