import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, Link } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt';
import './feed.css';
const Feed = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(getUserInfo())
    }, [])
    
    if (!user) return (
        <div>
            <h3>
                You are not authorized to view this page, Please Login in 
                <Link to={'/login'}>
                    <a href='#'>
                        here
                    </a>
                </Link>
            </h3>
        </div>
    )

    return (
        <>
            <div>
                <h1>
                    This is the feed
                </h1>
            </div>
        </>
    )
}

export default Feed