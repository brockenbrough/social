import React, {useEffect} from 'react'
import './landingpage.css'
import { Link } from "react-router-dom";

const Landingpage = () => {
    useEffect(() => {
     localStorage.removeItem('accessToken')
    }, [])
    
    return (
        <div>
            <h1>
                User Service Api Endpoint</h1>
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
            <h4>Already Logged in? <span><Link to={'/project-notes/contributors'}><a href='#'>Click Here</a></Link></span></h4>
        </div>
    )
}

export default Landingpage