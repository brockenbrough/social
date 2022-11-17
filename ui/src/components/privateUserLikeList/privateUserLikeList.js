import React, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

import { useNavigate, Link } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt';

const privateUserLikeList = () => {
    const [user,setUser] = useState({})

    useEffect(() => {
        setUser(getUserInfo())
    }, [])

    if (!user) return(
        <div>
            <h3>
                You are not authorized to view this page, please login <Link to={'/login'}><a href='#'> here </a></Link>
            </h3>
        </div>
    )

    //return()
}