import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import api, { postURL } from './api/api'


const PrivateUserLikeListPage = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const user = getUserInfo()
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
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }
        fetchLikes()
    }, [])


    return (
        <div>
            <h2>{user.username}'s liked posts:</h2>
            {post.map(e => {
                console.log(e)
                return(<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{e.username}</Card.Title>
                        <Card.Text>
                            {e.content}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>)
            })}
        </div>
    )
}

export default PrivateUserLikeListPage