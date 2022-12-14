import React, { useState, useEffect, useContext } from 'react';
import { Image } from "react-bootstrap";
import {Row, Col} from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {UserContext} from "../../App"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from "moment";
import getUserInfo from '../../utilities/decodeJwt';
import Form from 'react-bootstrap/Form';
import FollowerCount from '../following/getFollowerCount';
import FollowingCount from '../following/getFollowingCount';
import { useParams } from "react-router";

//link to service 
//http://localhost:8096/privateUserProfile


const PrivateUserProfile = () =>{
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const user = useContext(UserContext)
	const username = getUserInfo().username
	const [form, setValues] = useState({content : ""})
	const [posts, setPosts] = useState([])
	const navigate = useNavigate();
	const [users, setUser] = useState([])

//    getUserInfo()
//    setUser(getUserInfo());

	// handle logout button
	const handleLogout = async => {
		localStorage.clear()
    	navigate("/");
  	}

	// handle Edit User Information button
	const handleEditUser = async => {
	   navigate("/editUserPage");
	}

	const fetchPosts = async () => {
	  const res = await axios.get(`http://localhost:8083/posts/getAllByUsername/${username}`)
		  .then(res => {
			  setPosts(res.data)
		  })
		  .catch(error => alert('error fetching data'))
	}

	useEffect(() => {
		  fetchPosts()
		  setUser(getUserInfo())
	}, [])

	const handleChange = ({ currentTarget: input }) => {
		setValues({ ...form, [input.id]: input.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { content } = form;
    	const post = {content, username};
    	await axios.post(" http://localhost:8083/posts/createPost", post)
			.then(response => {
				fetchPosts()
				form.content = ""
			})
			.catch(error => alert('Error creating new post.'))
	}

	const deleteConfirm = async (posts) =>{
		axios.delete(`http://localhost:8083/posts/deletePost/${posts._id}`)
            .then(response => {
				fetchPosts()
            })
            .catch(error => alert('Error deleting post'))
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
<span><b>{<FollowerCount username = {users}/>}</b></span>&nbsp; 
<span><b>{<FollowingCount username = {users}/>}</b></span>&nbsp; 
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
    <h3 class = 'txt'>Create Post</h3>
	
<Card.Header>{user && user.username}</Card.Header>
                  <div>
				  <Row>
   			 <Col xs={12} sm={4} md={4}>
			 	<Image width="150" roundedCircle src={require("./elmo.jpeg")} />
    		 </Col>
			</Row>
			<Card style={{ width: '5rem' }}></Card>
                   </div>
        <Form.Group className="mb-3" controlId="formContent" style={{ width: '50rem'}}>
             <Form.Control type="text" placeholder="Enter post here" 
                         id="content"
                         value={form.content}
                         onChange={handleChange}
             />
          </Form.Group>
                  <div>
		  <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
     <>
    </>
  </div>
   <div>
            <h3>All Posts</h3>
            {posts.map((posts, index) => (
                <div key={index}>
                    <Card style={{ width: '18rem' , marginTop:'1cm', marginLeft:'.5cm',background:'aliceblue'}}>
                        
                        <Card.Body>
                            <Card.Title><h5>Username:</h5><Link to={'/publicprofilepage'}>{posts.username}</Link>{}</Card.Title>
                                {posts.content}
                            <p>{moment(posts.createdAt).format("MMM DD yyyy")}</p>
                            <Link style={{ marginRight: '1cm' }} to={`/updatePost/${posts._id}`}  className="btn btn-warning ">Update</Link>
                            <Button variant="danger" onClick={() => deleteConfirm(posts)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            ))}
   </div>
  </div>
)


}

export default PrivateUserProfile