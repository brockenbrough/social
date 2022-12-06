import React, { useEffect } from 'react'
import DefaultLayout from './defaultLayout'
const getAllPost = () => {


 const [posts, setPosts] = useState([])

<<<<<<< HEAD
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:8083/posts/getAllPosts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => alert('error fetching data'))
=======
 const fetchPosts = () => {
    axios.get('http://localhost:8083/posts/getAllPosts')
    .then(res => {
        console.log(res);
        setPosts(res.data)
    })
    .catch(err => {
        console.log(err);
    })
>>>>>>> 44280400a98fc06c79d07bbd47315b59bd23b81b
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
<<<<<<< HEAD

    const deletePost = async (posts) => {
        axios.delete(`http://localhost:8083/posts/deletePost/${posts._id}`)
            .then(response => {
                alert('Post deleted successfully')
                fetchPosts()
            })
            .catch(error => alert('Error deleting post'))
=======
    
const deleteConfirm = (postId) => {
    let answer = window.confirm('Are you sure you want to delete your post?')
    if(answer){
        deletePost(postId)
>>>>>>> 44280400a98fc06c79d07bbd47315b59bd23b81b
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