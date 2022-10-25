import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import './login.css'

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:8080/user/login";
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(url, data);
      const {accessToken} = res
      //store token in localStorage 
      localStorage.setItem("accessToken", accessToken);
      navigate("/project-notes/contributors");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
    <div className="login">
      <div>
        <label>Username:</label>
        <input type='username' name='username' id='username' onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type='password' name='password' onChange={handleChange} />
      </div>
      <div className="error-field">
        {error && <div>{error}</div>}
      </div>
      <input type="submit" value="Login" onClick={(e) => handleSubmit(e)} />
    </div>
    <Link to='/'><span><h4>Go Back</h4></span></Link>
    </>
  )
}

export default Login