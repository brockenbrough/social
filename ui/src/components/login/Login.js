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
      const { accessToken } = res
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
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://cdn.freebiesupply.com/images/large/1x/social-media-ui-kit-demo-o77.jpg"
                className="img-fluid" alt="test image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="username">Username</label>
                  <input type="username" name='username' id="username" className="form-control form-control-lg"
                    placeholder="Enter username" onChange={handleChange} />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">Password</label>
                  <input type="password" id="password" name='password' className="form-control form-control-lg"
                    placeholder="Enter password" onChange={handleChange} />
                </div>
                <div classNameName="error-field">
                  {error && <div>{error}</div>}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input me-2" type="checkbox" value="" id="checkbox" />
                    <label className="form-check-label pr-10" for="checkbox">
                      stay signed in
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-1">
                  <button type="button" className="btn btn-primary btn-lg" onClick={(e) => handleSubmit(e)}
                  >Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/signup' href="#!"
                    className="link-danger">Register</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login