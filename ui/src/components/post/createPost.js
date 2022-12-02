import React, { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';


  const createPost = ({username, content}) => {
    const [post, setPost] = useState({
        username: username,
        content: content
    });
 // destructure values from state
    const {content, username } = post;

    const  handleChange = name => {
        setPost({...post, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(post);
        axios.post('http://localhost:8083/posts', post)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setPost({...post, content:'', username:''})
        })
        .catch(err => {
            console.log(err);
            alert(err.res.data.error)
        }
        )
    }



    return(
        <div className="container pb-5">
   
        <br />
        <h1>CREATE POST</h1>
        <br />

        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label className="text-muted">Content</label>
                <textarea
                    onChange={handleChange('content')}
                    value={content}
                    type="text"
                    className="form-control"
                    placeholder="Write something.."
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Username</label>
                <input
                    onChange={handleChange('username')}
                    value={username}
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    required
                />
            </div>
            <div>
                <Button variant="primary" type="submit">Create</Button>
            </div>
        </form>
    </div>
);
};


export default createPost;