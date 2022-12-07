import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import getUserInfo from '../../utilities/decodeJwt'
import Comment from '../comments/comment'
import Feed from '../feed/Feed'
import PostList from '../post/feedPage'


const PublicUser = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        setUser(getUserInfo())
    }, [])


    if (!user) return (<div><h3>You are on a public page <Link to={'/publicprofilepage'}>
      <a href='#'>for some fun stuff click here</a></Link></h3></div>)
    const { id, email, username, password } = user
    return (
        <><div>
           <h2>
           Welcome
           <span className='username'> @{username}</span>
          </h2>
          </div>
        </>
    )
}



export default PublicUser