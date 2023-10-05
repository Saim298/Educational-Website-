import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Create a styled component for the Navbar
const StyledNavbar = styled.nav`
  padding: 20px 0px;
  background-color: white;
  .navbar-brand {
    color: black;
  }
  .navbar-toggler-icon {
    font-size: 20px;
  }
  .navbar-nav .nav-link {
    color: black;
  }
  .btn-outline-dark {
    border-radius: 40px;
    padding: 6px 20px;
  }
  .navbar-nav {
    gap: 20px;
  }
  span {
    font-weight: 900;
    font-size: 28px;
  }
  .navbar-brand {
    font-size: 28px;
  }
  a {
    cursor: pointer;
  }
  .instructor-link {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 992px) {
    .navbar-nav {
      gap: 0px;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b>
            Tutor<span>.</span>
          </b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mentor">
                Mentors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn me-2">
              {JSON.parse(localStorage.getItem("userID")) ? (
                <b>
                  <Link to="/becomeInstructor" className="instructor-link">
                    Become Instructor
                  </Link>
                </b>
              ) : (
                <b>
                  <Link to="/signup" className="instructor-link">
                    Sign in
                  </Link>
                </b>
              )}
            </button>

            <button className="btn btn-outline-dark">
              <b>Get Started</b>
            </button>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
