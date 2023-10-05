import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f6f5ee;
`;

const StyledForm = styled.form`
  width: 80%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  label {
    font-size: 1rem;
  }

  input.form-control {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  input.form-control:focus {
    outline: none;
    box-shadow: -3px 2px 0px #000;
    transition: all ease-in-out 0.5s;
  }

  button.btn {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0px;
    cursor: pointer;
  }
`;

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem("instructor_User" , JSON.stringify(Date.now()*Math.floor(Math.random()*100)+username))
    
    // Prepare the data to send to the API
    const loginData = {
      username,
      password,
    };

    // Send the data to the API
    fetch("http://localhost:5000/admin/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.ok) {
          <div className="alert alert-primary" role="alert">
            Login Successful
          </div>
        } else {
          <div className="alert alert-primary" role="alert">
            Login Failed
          </div>
          }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle network or other errors
      });
  };

  return (
    <StyledDashboard>
      <StyledForm>
        <Link className="navbar-brand" to="/">
          <b>
            Tutor<span>.</span>
          </b>
        </Link>
        <h1>Login in Dashboard</h1>
        <h4>Enter your username, email, and password to login</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <label htmlFor="password" className="mt-3">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-outline-dark d-flex justify-content-center mt-4"
          onClick={handleLogin}
        >
          Login
        </button>
      </StyledForm>
    </StyledDashboard>
  );
};

export default Dashboard;
