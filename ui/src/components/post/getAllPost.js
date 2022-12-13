import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from "moment";




const getAllPost = () => {
  
    const [posts, setPosts] = useState([])



    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:8083/posts/getAllPosts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => alert('error fetching data'))
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const deleteConfirm = posts => {
        let answer = window.confirm('Are you sure you want to delete your post?')
        if (answer) {
            deletePost(posts)
        }
    }

    const deletePost = async (posts) => {
        axios.delete(`http://localhost:8083/posts/deletePost/${posts._id}`)
            .then(response => {
                alert('Post deleted successfully')
                fetchPosts()
            })
            .catch(error => alert('Error deleting post'))
    }

    return (
        <div>
            <h1>All Posts</h1>
            {posts.map((posts, index) => (
                <div key={index}>
                    <Card style={{ width: '18rem' , marginTop:'1cm', marginLeft:'.5cm',background:'aliceblue'}}>
                        
                        <Card.Body>
                            <Card.Title><Link to={'/publicprofilepage'}>{posts.username}</Link>{}</Card.Title>
                                {posts.content}
                            <p>{moment(posts.createdAt).format("MMM DD yyyy")}</p>
                            <Link style={{ marginRight: '1cm' }} to={`/updatePost/${posts._id}`}  className="btn btn-warning ">Update</Link>
                            <Button variant="danger" onClick={() => deleteConfirm(posts)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            ))}
        </div>
    )
}
export default getAllPost
