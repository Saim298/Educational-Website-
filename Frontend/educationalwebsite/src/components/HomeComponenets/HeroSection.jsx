import React from "react";
import styled from "styled-components";
import resumeIcon from "../../assets/play.png";
import Students from "../../assets/Students.jpg";

// Create a styled component for the Navbar
const StyledHero = styled.nav`
  background-color: #f6f5ee;
  .hero-h1 {
    padding-top: 55px;
    padding-bottom: 55px;
  }

  .hero-h1 h1 {
    font-weight: 700;
    font-size: 57px;
    line-height: 1.1;
  }

  .hero-para {
    margin-top: 35px;
    margin-bottom: 35px;
  }

  .getStarted {
    border-radius: 0px;
    padding: 13px 30px;
  }
  .howItWorks {
    margin-left: 20px;
    width: 50px;
    border: 2px solid black;
    border-radius: 50px;
    height: 49px;
  }

  .howItWorks img {
    width: 20px;
    padding-left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .howItWorksbtn {
    margin-left: 20px;
    font-size: 17px;
    font-weight: 800;
  }

  .students {
    width: 113%;
    height: 100%;
  }

  .container {
    margin-left: 5%;
    max-width: 90%;
  }

  @media (max-width: 992px) {
    .hero-h1 h1 {
      font-size: 37px;
    }
    .getStarted {
      border-radius: 0px;
      padding: 1px 17px;
    }
    .students {
      width: 113%;
      height: 100%;
    }
  }
  @media (max-width:768px){
    .students {
      width: 100%;
      height: 100%;
    }
  }
`;
const HeroSection = () => {
  return (
    <StyledHero>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 hero-h1">
            {" "}
            {/* Add pr-0 class */}
            <b>
              <h1>Get world class </h1>
              <h1>courses from world</h1>
              <h1>class mentors</h1>
            </b>
            <p className="hero-para">
              Get quality courses with us with the best price. Now you can get
              the best course from us. We have top mentor around the globe
            </p>
            <div className="d-flex">
              <button className="btn getStarted btn-dark">Get Started</button>

              <button className="howItWorks btn rounded-lg">
                <img src={resumeIcon} alt="resume video icon" />
              </button>

              <h4 className="d-flex align-items-center justify-content-center howItWorksbtn">
                How it works?
              </h4>
            </div>
          </div>
          <div className="col-md-6 sec-part">
            <img className="students" src={Students} alt="Students Studying" />
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default HeroSection;
