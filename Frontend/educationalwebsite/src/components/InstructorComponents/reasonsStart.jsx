import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import teach from "../../assets/teach.jpg";
import learner from "../../assets/learner.jpg";
import reward from "../../assets/reward.jpg";
import HowToStart from "./HowToStart";

// Create a styled component for the Navbar
const StyledBecomeInstructor = styled.section`
  .heading-reasons {
    font-weight: 800;
  }
  .img {
    width: 33%;
  }
  .col-md-4 {
    padding: 0px 40px; 

  }
  h5{
    font-weight: 700;
  }
  @media(min-width:992px){
    .mt-5{
      margin-top: 4rem !important;
    }
  }
`;
const ReasonsStart = () => {
  return (
    <StyledBecomeInstructor>
      <div className="container">
        <div className="d-flex mt-5 align-items-center justify-content-center text-center">
          <h1 className="mt-5 heading-reasons">So many reasons to start</h1>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-4 text-center">
            <img className="img" src={teach} alt="" />
            <h5>Teach your way</h5>
            <p>
              Publish the course you want, in the way you want, and always have
              control of your own content.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img className="img" src={learner} alt="" />
            <h5>Inspire learners</h5>
            <p>
              Teach what you know and help learners explore their interests,
              gain new skills, and advance their careers.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img className="img" src={reward} alt="" />
            <h5>Get rewarded</h5>
            <p>
              Expand your professional network, build your expertise, and earn
              money on each paid enrollment.
            </p>
          </div>
        </div>
      </div>
      <HowToStart/>
    </StyledBecomeInstructor>
  );
};

export default ReasonsStart;
