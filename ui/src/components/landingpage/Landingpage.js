import React, {useEffect} from 'react'
import './landingpage.css'
import { Link } from "react-router-dom";

const Landingpage = () => {
    // useEffect(() => {
    //  localStorage.removeItem('accessToken')
    // }, [])
    
    return (
        <div>
            <h1>
                Welcome to the CSC 351 SM APP</h1>
            <Link to={'/signup'}>
                <button className='signup-btn'>
                    Signup
                </button>
            </Link>

            <Link to={'/login'}><button className='login-btn'>
                Login
            </button>
            </Link>
            <br />
        
        </div>
    )
}

export default Landingpage