import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdatePost = props => {
    const [state, setState] = useState({
        username: '',
        content: '',
      

    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { content, username } = state
        const post = {
            content,
            username
        }
        await axios.put(`http://localhost:8083/posts/updatePost/${props.match.params.id}`, post)
            .then(
                res => {
                    console.log(res.data);
                    const { content, username } = res.data;
                    // empty state
                    setState({ ...state, content, username });
                    // show sucess alert
                    alert(`Post content ${content} is updated`);
                })
            .catch(error => {
                console.log(error.response);
                alert(error.res.data.error);
            });
    }

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`posts/getPostById/${props.match.params.id}`)
            const { content, username } = res.data
            setState({ content, username })
        }
        fetchPost()
    }, [props.match.params.id])

    const showUpdateForm = () => (
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
                <label className="text-muted">User</label>
                <input
                    onChange={handleChange('username')}
                    value={user}
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    required
                />
            </div>
            <div>
                <button variant="primary">Update</button>
            </div>
        </form>
    );
    return (
        <div className="container pb-5">
            <Layout />
            <br />
            <h1>UPDATE POST</h1>
            {showUpdateForm()}
        </div>
    );
};

export default UpdatePost;
