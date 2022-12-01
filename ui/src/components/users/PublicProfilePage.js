import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt'
import ToggleButton from 'react-bootstrap/ToggleButton';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col'



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
              <h3>SSU Social</h3>
             
                  <Card.Header className ="col-50 text-center fw-bolder bg-primary p-2 text-dark bg-opacity-10" >Ms.LaStarr</Card.Header>
                  <Button className = "col-50 text-end" variant = "link" id = "follow" type = "Button "  href = "/components/following">Follow </Button>
                  <div class = 'profile-image'>
                   <img src ={require("./patrickwig.webp")}/>
                   </div>
                   <Card.Subtitle className="mb-2 text-muted">posts</Card.Subtitle>
                   <Card style={{ width: '10rem' }}></Card>
                  <Card.Body>I want to cry like all the time.</Card.Body>
                  <div>
                  <Button href='/components/privateUserLikeList'  className = "me-2 " aria-label = "Second group">300k ❤︎</Button>
                      <div className="vr" />
                      <Button className = "col-50 text-end" variant = "primary" id = "follow" type = "Button "  href = "/components/comments" >Comments </Button>
                      <div className="vr" />
                      <FloatingLabel controlId="me-auto" label="Comments">
                      <Form.Control
                      as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '80px' }}          
        />
        <div className = "col-  10 text-end"> <Button>Submit</Button>
        </div>
      </FloatingLabel>
     <>
    </>
  </div>
  <Card style={{ width: '5rem' }}></Card>
<div>11/02/2022</div>

</Card>
<Card>
<Card.Header className ="col-50 text-center fw-bolder bg-primary p-2 text-dark bg-opacity-10">HandsomeSponge</Card.Header>
                  <Button className = "col-50 text-end" variant = "link" id = "follow" type = "Button "  href = "/components/following">Follow </Button>
                  <div class = 'profile-image'>
                   <img src ={require("./handsomespongebob.jpg")}/>
                   </div>
                   <Card.Subtitle className="mb-2 text-muted">posts</Card.Subtitle>
                   <Card style={{ width: '10rem' }}></Card>
                  <Card.Body>You know what it is HandsomeSponge out here</Card.Body>
                  <div>
                  <Button href='/components/privateUserLikeList'  className = "me-2 " aria-label = "Second group">561k ❤︎</Button>
                      <div className="vr" />
                      <Button className = "col-50 text-end" variant = "primary" id = "follow" type = "Button "  href = "/components/comments">Comments </Button>
                      <div className="vr" />
                      <FloatingLabel controlId="me-auto" label="Comments">
                      <Form.Control
                      as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '80px' }}          
        />
        <div className = "col-  10 text-end"> <Button>Submit</Button>
        </div>
      </FloatingLabel>
     <>
    </>
  </div>
  <Card style={{ width: '5rem' }}></Card>
<div>11/11/2011</div>
</Card>            
<Card>
                  <Card.Header className = "col-50 text-center fw-bolder bg-primary p-2 text-dark bg-opacity-10">CheeseB0iiiiiYarde</Card.Header>
                  <Button className = "col-50 text-end" variant = "link" id = "follow" type = "Button "  href = "/components/following">Follow </Button>
                  <div class = 'profile-image'>
                   <img src ={require("./elmo.jpeg")}/>
                   </div>
                   <Card.Subtitle className="mb-2 text-muted">posts</Card.Subtitle>
                   <Card style={{ width: '10rem' }}></Card>
                  <Card.Body>I love this! Bruh Lets get groovy</Card.Body>
                  <div>
                  <Button href='/components/privateUserLikeList'  className = "me-2 " aria-label = "Second group">9k ❤︎</Button>
                      <div className="vr" />
                      <Button className = "col-50 text-end" variant = "primary" id = "follow" type = "Button "  href = "/components/comments">Comments </Button>
                      <div className="vr" />
                      <FloatingLabel controlId="me-auto" label="Comments">
                      <Form.Control
                      as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '80px' }}
        />
      </FloatingLabel>
      <div className = "col-  10 text-end"> <Button>Submit</Button>
        </div>
     <>
    </>
  </div>
  <Card style={{ width: '5rem' }}></Card>
<div>11/02/2022</div>

                  <Card.Header className = "col-50 text-center fw-bolder bg-primary p-2 text-dark bg-opacity-10">NewUser23</Card.Header>
                  <Button className = "col-50 text-end" variant = "link" id = "follow" type = "Button "  href = "/components/following">Follow </Button>
                  <div class = 'profile-image'>
                   <img src ={require("./smallcatscreaming.jpg")}/>
                   </div>
                   <Card.Subtitle className="mb-2 text-muted">posts</Card.Subtitle>
                   <Card style={{ width: '3rem' }}></Card>
                  <Card.Body>Hello, I am new here, be my friend please</Card.Body>
                  <div>
                  <Button href='/components/privateUserLikeList'  className = "me-2 " aria-label = "Second group">3 ❤︎</Button>
                      <div className="vr" />
                      <Button className = "col-50 text-end" variant = "primary" id = "follow" type = "Button "  href = "/components/comments">Comments </Button>
                      <div className="vr" />
                      <FloatingLabel controlId="me-auto" label="Comments">
                      <Form.Control
                      as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '80px' }}
        />
      </FloatingLabel>
      <div className = "col-  10 text-end"> <Button>Submit</Button>
        </div>
   <>
  </>
</div>
 <div>10/10/2022</div>
</Card>
              <Card>
                  <Card.Header className = "col-50 text-center fw-bolder bg-primary p-2 text-dark bg-opacity-10">JWood03</Card.Header>
                  <Button className = "col-50 text-end" variant = "link" id = "follow" type = "Button "  href = "/components/following">Follow </Button>
                  <div class = 'profile-image'>
                   <img src ={require("./cryingcat.jpg")}/>
                   </div>
                   <Card.Subtitle className="mb-2 text-muted">posts</Card.Subtitle>
                  <Card style={{ width: '3rem' }}></Card>
                  <Card.Body >This is a test UI and it does not actually work yet. Yikes</Card.Body>
                  <div>
                  <Button href='/components/privateUserLikeList'  className = "me-2 " aria-label = "Second group">1.2M ❤︎</Button>
                  <div className="vr" />
                  <Button className = "col-50 text-end" variant = "primary" id = "follow" type = "Button "  href = "/components/comments">Comments </Button>
                  <div className="vr" />
                      <FloatingLabel controlId="me-auto" label="Comments">
                      <Form.Control
                      as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '80px' }}
        />
      </FloatingLabel>
      <div className = "col-  10 text-end"> <Button>Submit</Button>
        </div>
     <>
    </>
 </div>
 <Card style={{ width: '5rem' }}></Card>
 <div>11/02/2022</div>
 </Card>
          </div>
      </>
  )
}



export default ShowPublicUser

