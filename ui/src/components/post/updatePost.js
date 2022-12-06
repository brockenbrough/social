import React, { useState, useEffect } from 'react'

const updatePost = (props) => {
    const [state, setState] = useState({
        username: '',
        content: '',
      

    })
    const {username, content} = state;

    useEffect(() => {
        axios.get(`http://localhost:8083/posts/getPostById/${props.match.params.post_Id}`)
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
        axios.put('http://localhost:8083/posts/updatePost/:postId', state)
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
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" placeholder="Enter username" value={state.username} onChange={handleChange} name="username" style={{ height: '2cm', width: '12cm', marginLeft: '10cm', marginTop: '2cm' }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Content" name="content" value={state.content} onChange={handleChange} s style={{ height: '3cm', width: '12cm', marginLeft: '10cm', marginTop: '2cm' }} />
            </Form.Group>
        
            <Button style={{ width: '4cm', marginLeft: '10cm', marginTop: '2cm' }} variant="primary" type="submit">
                Update
            </Button>
        </Form>

        )
    }
  return (
     
    <div className="container pb-5">
    <h1>UPDATE POST</h1>
    {showUpdateForm()}
</div>
  )
}

export default updatePost