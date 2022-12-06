<<<<<<< HEAD
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


=======
import React, { useState, useEffect } from "react";
import DefaultLayout from "./defaultLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
>>>>>>> cd6144cc82f44db44471f221d3d72918a8ab5331
const getAllPost = () => {
  const [posts, setPosts] = useState([]);

<<<<<<< HEAD
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
                    <Card style={{ width: '18rem' , marginTop:'1cm', marginLeft:'21cm'}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title><h5>Username:</h5>{posts.username}</Card.Title>
                            <Card.Text><h3>Content:</h3>
                                {posts.content}
                            </Card.Text>
                            <Link style={{ marginRight: '1cm' }} to={`http://localhost:8083/posts/updatePost/${posts._id}`} className="btn btn-warning ml-1">Update</Link>
                            <Button variant="danger" onClick={() => deleteConfirm(posts)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
 
   
}

export default getAllPost
=======
  const fetchPosts = () => {
    axios
      .get("http://localhost:8083/posts/getAllPosts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = (postId) => {
    axios
      .delete(`http://localhost:8083/posts/deletePost/${postId}`)
      .then((res) => {
        console.log(res);
        fetchPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteConfirm = (postId) => {
    let answer = window.confirm("Are you sure you want to delete your post?");
    if (answer) {
      deletePost(postId);
    }
  };
  const showAllPosts = () => {
    return posts.map((post, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mb-5">
            <div className="card-body">
              <h5 className="card-title">{post.username}</h5>
              <p className="card-text">{post.content}</p>
              <Link
                to={`/post/${post._id}`}
                className="btn btn-raised btn-primary btn-sm"
              >
                Post
              </Link>
              <Button
                onClick={() => deleteConfirm(post.Id)}
                className="btn btn-danger ml-1"
                style={{ marginTop: "1cm" }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
        <DefaultLayout />
        <h2 className="mt-5 mb-5">All Posts</h2>
        <div className="row">
            {showAllPosts()}
        </div>
    </div>
  );
};

export default getAllPost
>>>>>>> cd6144cc82f44db44471f221d3d72918a8ab5331
