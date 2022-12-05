import axios from 'axios';
import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const createPost = () => {
    const [state, setState] = useState({
        content: '',
        username: '',
        postImage: '',
        date: ''
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { content, username, postImage, date } = state
        const post = {
            content,
            username,
            postImage,
            date
        }
        await axios.post('posts/createPost', post)
        navigate('/')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Create Post</h1>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <input type="text"

                                className="form-control"
                                name="content"
                                placeholder="Enter Content"
                                value={state.content}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text"

                                className="form-control"
                                name="username"
                                placeholder="Enter Username"
                                value={state.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postImage">Post Image</label>
                            <input type="text"

                                className="form-control"
                                name="postImage"
                                placeholder="Enter Post Image"
                                value={state.postImage}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="text"

                                className="form-control"
                                name="date"
                                placeholder="Enter Date"
                                value={state.date}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-block"
                        >
                            Create Post
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )

}





export default createPost;