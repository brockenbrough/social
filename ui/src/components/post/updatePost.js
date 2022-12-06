import React, { useState, useEffect } from 'react'

const updatePost = (props) => {
    const [state, setState] = useState({
        username: '',
        content: '',
<<<<<<< HEAD
      

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
=======
        date: ''

    })
    const {username, content} = state;
>>>>>>> 44280400a98fc06c79d07bbd47315b59bd23b81b

    useEffect(() => {
        axios.get(`http://localhost:8083/posts/${props.match.params.id}`)
        .then(res => {
            const post = res.data;
            setState({...state, username: post.username, content: post.content, date: post.date})
        })
        .catch(err => {
            console.log(err);
        })
    },[])



    const handleChange = name => event => {
        setState({...state, [name]: event.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        axios.put('http://localhost:8083/posts//updatePost/:postId', state)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setState({...state, content:'', username:'', date:''})
        })
        .catch(err => {
            console.log(err);
            alert(err.res.data.error)
        }
        )
    }
    const showUpdateForm =()=>{
        return(
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
                        placeholder="Your username"
                        required
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        )
    }

  return (
     
    <div className="container pb-5">
        <DefaultLayout />
    <h1>UPDATE POST</h1>
    {showUpdateForm()}
</div>
  )
}

export default updatePost