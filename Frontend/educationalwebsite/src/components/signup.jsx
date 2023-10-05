import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom"

const StyledTabs = styled.div`
background-color: #F6F5EE;
padding-top:2rem;
padding-bottom:2rem;
height: 100%;
  .form-control {
    box-shadow: none;
    border: 1px solid #ccc;
    border-radius: 0;
  }

  .form-control:focus{
    box-shadow: -2px 2px 0px black;
    border:1px solid black;
  }

  input:focus {
    transition: all ease-in-out 0.4s;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-color: #007bff;
  }

  .btn-dark {
    border-radius: 0 !important;
  }

  .signup-with {
    text-align: center;
    margin-top: 20px;
    position: relative;
  }

  .signup-with span {
    background-color: #F6F5EE;
    padding: 0 10px;
    position: relative;
    z-index: 1;
  }

  .signup-with::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: #ccc;
    z-index: 0;
  }
  .right-side{
    margin-left: 15%;
    margin-bottom: 10%;
  }
  @media (max-width:992px){
    .right-side{
      margin-left: 0;
      margin-bottom: 0;
    }
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userID = JSON.parse(localStorage.getItem("userID"));
    if (userID) {
      window.location.href = '/instructorDashboard';
    }
    setMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);

      if (response.status === 201) {
        setMessage('User registered successfully');
        setAlertType('alert-success');
        localStorage.setItem("userID", JSON.stringify(Math.floor(Math.random() * Date.now())));
        const userID = JSON.parse(localStorage.getItem("userID"));
        if (userID) {
          window.location.href = '/instructorDashboard';
        }
      } else {
        setMessage('Error: User registration failed');
        setAlertType('alert-danger');
      }
    } catch (error) {
      setMessage('Error: Please check your email or username again');
      setAlertType('alert-danger');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Use a timeout to clear the message after 3 seconds
    const timeoutId = setTimeout(() => {
      setMessage('');
    }, 3000);

    // Clean up the timeout when the component unmounts or when message changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [message]);

  return (
    <StyledTabs className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section fw-bold">Sign Up</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="right-side text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <div className="icon"><span className="fa fa-soccer-ball-o"></span></div>
                  <h2>Tutor.</h2>
                  <div className="w-100 social-wrap">
                  
                  <div className="signup-with">
                    <span>OR</span>
                  </div>
                  <p className="mt-4"><Link to="/signin"><h6>I'm already a member! </h6></Link></p>
                </div>
                </div>
              </div>
              <div className="p-4 p-md-5">
                <h4 className="mb-4 fw-bold">Hello!  <span>👋 Please Signup here to continue</span></h4>
                {message && <p className={`text-center alert ${alertType} mt-3`}>{message}</p>}
                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group mb-4">
                    <label className="label" htmlFor="name">Full Name</label>
                    <input type="text" className="form-control" name="username" value={formData.username} onChange={handleInputChange} placeholder="John Doe" required />
                  </div>
                  <div className="form-group mb-4">
                    <label className="label" htmlFor="email">Email Address</label>
                    <input type="text" className="form-control" name="email" value={formData.email} onChange={handleInputChange} placeholder="johndoe@gmail.com" required />
                  </div>
                  <div className="form-group mb-4">
                    <label className="label" htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-dark rounded submit px-5 py-2" disabled={isLoading}>
                      {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledTabs>
  );
};

export default Signup;
