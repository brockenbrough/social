import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, Link } from 'react-router-dom'
import getUserInfo from '../../utilities/decodeJwt'
import './feed.css'
const Feed = () => {



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