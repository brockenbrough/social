import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


  const createPost = () => {
    const [state, setState] = useState({
        content:'',
        username:''
  });
    const { content, username } = state; 
    const onChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8083/posts/createPost', { content, username })
        .then(res => {
            console.log(res);
            setState({
                ...state,
                content:'',
                username:''
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="container">
            <h1>Create Post</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="text-muted">Content</label>
                    <input
                        onChange={onChange}
                        value={content}
                        type="text"
                        name="content"
                        className="form-control"
                        placeholder="Write something..."
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Username</label>
                    <input
                        onChange={onChange}
                        value={username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Your username"
                        required
                    />
                </div>
                <div>
                    <Button variant="primary" type="submit">
                        Create Post
                    </Button>
                </div>
            </form>
        </div>
    );
};



export default createPost;