
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Navbar from '../../components/navbar';

const getAllPost = () => {


 const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8083/posts/getAllPost')
        .then(res => {
            console.log(res.data);
            setPosts(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="container">
            <h1>Posts</h1>
            <div className="row">
                {posts.map(post => (
                    <div className="col-md-4" key={post._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{post.username}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                                <Card.Text>
                                    {post.content}
                                </Card.Text>
                                <Card.Img variant="top" src={post.postImage} />
                                <Link to={`/posts/${post._id}`} className="btn btn-primary">View Post</Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default getAllPost