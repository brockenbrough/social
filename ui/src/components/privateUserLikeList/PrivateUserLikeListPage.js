import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import api, { postURL, deleteUrl } from './api/api'
import Post from '../post/post';

const user = getUserInfo()

const PrivateUserLikeListPage = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                console.log(user)
                await api.get(`/${user.id}`).then(e => {
                    /**
                     * Iterates through the array of objects
                     * For every like object, we want to find a post that matches the like's postId 
                     */
                    e.data.map(async (e) => {
                        const res = await postURL.get(`/getPostById/${e.postId}`)
                        //"...e" appeneds res.data to our post array to prevent overriting 
                        setPost(e => [...e, res.data])
                        //setPost(res.data)
                    })
                })

            } catch (error) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }
        fetchLikes()
    }, [])

    /*
    removeLike(userId, postId){
        deleteUrl.delete('/')
    }
    */

    return (
        <div>
            <h2>{user.username}'s liked posts:</h2>
            {post.map(e => {
                return <Post username={e.username} content={e.content} date={e.date}/>
            })}
        </div>
    )
}

export default PrivateUserLikeListPage