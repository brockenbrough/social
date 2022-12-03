import React, { useEffect } from 'react'
import DefaultLayout from './defaultLayout'
const getAllPost = () => {


 const [posts, setPosts] = useState([])

 const fetchPosts = () => {
    axios.get('http://localhost:8083/posts')
    .then(res => {
        console.log(res);
        setPosts(res.data)
    })
    .catch(err => {
        console.log(err);
    })
    }
    useEffect(() => {
        fetchPosts()
    },[])

  


    const deletePost = (postId) => {
        axios.delete(`http://localhost:8083/posts/${postId}`)
        .then(res => {
            console.log(res);
            fetchPosts()
        })
        .catch(err => {
            console.log(err);
        })
    }
    
const deleteConfirm = (postId) => {
    let answer = window.confirm('Are you sure you want to delete your post?')
    if(answer){
        deletePost(postId)
    }
}
const showAllPosts = () => {
    return posts.map((post, i) => {
        return(
            <div className="col-md-4" key={i}>
                <div className="card mb-5">
                    <div className="card-body">
                        <h5 className="card-title">{post.username}</h5>
                        <p className="card-text">{post.content}</p>
                        <Link to={`/post/${post._id}`} className="btn btn-raised btn-primary btn-sm">Post</Link>
                        <Button
                            onClick={() => deleteConfirm(post.Id)}
                            className="btn btn-danger ml-1"
                            style={{ marginTop: '1cm' }}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        )
    })
}


    
  return (
    <div className="container">
        <DefaultLayout />
        <h2 className="mt-5 mb-5">All Posts</h2>
        <div className="row">
            {showAllPosts()}
        </div>
    </div>
    )
  }



export default getAllPost