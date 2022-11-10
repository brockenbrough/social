import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:8081/user/signup";
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(url, data);
      // const {accessToken} = res
      //store token in localStorage 
      navigate("/login");
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
    <div className="signup">
      <div>
        <label>Username: </label>
        <input type='username' id='username' name='username' onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type='email'  id='email' name='email' onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type='password'  name='password' onChange={handleChange} />
      </div>
      <div className="error-field">
        {error && <div>{error}</div>}
      </div>
      <input type="submit" value="Signup" onClick={handleSubmit} />
      <Link to='/'><span><h4>Go Back</h4></span></Link>
    </div>
  )
}

export default Register