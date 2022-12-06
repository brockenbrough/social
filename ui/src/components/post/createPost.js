import React, { useState } from 'react';
import axios from 'axios';
import DefaultLayout from './defaultLayout';
import Button from 'react-bootstrap/Button';


<<<<<<< HEAD
const createPost = () => {
    const [state, setState] = useState({
        content: '',
        username: '',
     
=======
  const createPost = ({username, content, date}) => {
    const [post, setPost] = useState({
        username: username,
        content: content,
        date: date
    });
 // destructure values from state
    const {content, username, date } = post;
>>>>>>> 44280400a98fc06c79d07bbd47315b59bd23b81b

    const  handleChange = name => {
        setPost({...post, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(post);
        axios.post('http://localhost:8083/posts/createPost', post)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setPost({...post, content:'', username:'', date:''})
        })
<<<<<<< HEAD
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { content, username,  } = state
        const post = {
            content,
            username,
        

        }
        await axios.post('http://localhost:8083/posts/createPost', post)
        navigate('/')
=======
        .catch(err => {
            console.log(err);
            alert(err.res.data.error)
        }
        )
>>>>>>> 44280400a98fc06c79d07bbd47315b59bd23b81b
    }



<<<<<<< HEAD
=======
    return(
        <div className="container pb-5">
          <DefaultLayout />
        <br />
        <h1>CREATE POST</h1>
        <br />
>>>>>>> 44280400a98fc06c79d07bbd47315b59bd23b81b

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