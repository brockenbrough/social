import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import getUserInfo from '../../utilities/decodeJwt'
import Navbar from '../navbar.js';
import './feed.css'
const Feed = () => {

    return (
        <>
            <Navbar />
            <div>
                <h1>
                    This is the feed
                </h1>
            </div>
        </>
    )
}

export default Feed