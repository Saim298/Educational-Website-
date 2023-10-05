import React from "react";
import Instructor from "../../assets/Instructor.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReasonsStart from "./reasonsStart"; // Assuming this is the correct import path

const StyledBecomeInstructor = styled.section`
  background-color: #f6f5ee;
  height: 70vh;
  img {
    width: 100%;
  }
  h1 {
    font-weight: 800;
    line-height: 0.9;
  }
  h4 {
    font-size: 18px;
  }
  .btn-dark {
    border-radius: 0px;
    padding: 8px 5rem;
  }
  .margin-instructor {
    margin-top: 5rem !important;
  }
`;

const HeroSectionInstructor = () => {
  return (
    <StyledBecomeInstructor>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 margin-instructor">
            <div className="mt-5">
              <h1>Come teach</h1>
              <h1>with us</h1>
              <h4 className="mt-3">Become an instructor and change</h4>
              <h4>lives — including your own</h4>
              <button className="btn-dark btn btn-lg mt-3">Get Started</button>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <img src={Instructor} alt="" />
          </div>
        </div>
      </div>
      <ReasonsStart />
    </StyledBecomeInstructor>
  );
};

export default HeroSectionInstructor;
