import React, { useState, useEffect,useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import api, { postURL } from './api/api';
import Post from '../post/post';
import { UserContext } from '../../App';


const PrivateUserLikeListPage = () => {
    //Setting active user
    const user = useContext(UserContext)
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
                        //"...post" appeneds res.data to our post array to prevent overriting 
                        setPost(e => [...e,res.data])
                        //setPost(res.data)
                    })
                })

            } catch (error) {
                /**
                 * This breaks the code
                 */
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
            }
        }
        fetchLikes()
    }, [user])
    return (
        <div>
            {post.map(e => {
               return <Post posts = {e} isLiked={"true"}/>
            })}
        </div>
    )
}

export default PrivateUserLikeListPage