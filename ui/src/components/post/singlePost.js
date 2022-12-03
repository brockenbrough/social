import React from 'react'

const singlePost = (props) => {
    const [post, setPost] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8083/posts//getPostById/:postId${props.match.params.id}`)
        .then(res => {
            console.log(res);
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    const showSinglePost = () => {
        return(
            <div className="col-md-8 offset-md-2">
                <h1 className="display-2">{post.username}</h1>
                <p className="lead">{post.content}</p>
                <p className="lead">{post.date}</p>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="row">
                {showSinglePost()}
            </div>
        </div>
    )
}



export default singlePost