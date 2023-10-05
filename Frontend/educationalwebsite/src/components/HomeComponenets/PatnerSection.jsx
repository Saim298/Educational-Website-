import React from "react";
import styled from "styled-components";
import sdyney from "../../assets/sdney.jpg";
import maquarine from "../../assets/maquarine.png";
import emory from "../../assets/emory.png";
import north_western from "../../assets/north-western.png";
import bristol from "../../assets/bristol.png";
import instructor from "../../assets/instructor.png";
import liveClass from "../../assets/online-class.png";
import support from "../../assets/support.png";

// Create a styled component for the Navbar
const StyledPatnerSection = styled.nav`
margin-top: 4rem;
  .line hr{
    width: 5.5rem;
    height: 0.4rem;
    background-color: #fdff00;
    color: #fdff00;
    border-radius: 20px;
  }
  .col-md-5 h2{
    font-weight: 700;
    font-size: 20px;
  }
  .col-md-7 img{
    width: 9rem;
    padding-right: 1.5rem;
  }
  .text h3{
    font-size: 1rem;
    font-weight: 700;
  }

  .classes-imp{
    margin-top:4rem;
    margin-bottom:4rem;
  }
  .card-width{
    width: 100%;
    border: 2px solid #c4c4c4;
    border-radius: 10px;
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
    height: 100%;
    transition: all ease 1s;
  }
  .card-width:hover{
    border:none;
    box-shadow: 0px 15px 40px #c4c4c4;
  }
  .card-width p{
    font-size: 13px;
  }
  .card-width img{
    width: 20%;
    padding: 20px;
    border-radius: 10px;
  }

  .instructors{
    background-color:#FAEB73;
    height: 80%;
  }
  .live{
    background-color:#E2B7E0;
    height: 80%;
  }
  .support{
    background-color:#87EBE5;
    height: 80%;
  }
  .text{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .card-width img {
      width: 31%;
      padding: 13px;
      border-radius: 10px;
    }
    .instructors {
      height: 45%;
    }
    .live {
      height: 45%;
    }
    .support {
      height: 45%;
    }
  }

  @media (max-width:768px){
    .instructor-margin{
      margin-top: 1rem;
    }
  }
  @media (max-width:992px){
    .instructor-margin{
    }
  }
  
  @media (max-width:568px){
    .col-md-7 img{
      width: 6rem;
    }
  @media (max-width:368px){
    .col-md-5 h2{
      font-size: 15px;
    }
  }

  
`;
const PatnerSection = () => {
  return (
    <StyledPatnerSection>
      <div className="container">
        <span className="line">
          <hr />
        </span>
        <div className="row">
          <div className="col-md-5">
            <h2>Our Trusted Partner & our proud</h2>
            <h2> investor around globe</h2>
          </div>
          <div className="col-md-7">
            <img src={sdyney} alt="" />
            <img src={maquarine} alt="" />
            <img src={emory} alt="" />
            <img src={north_western} alt="" />
            <img src={bristol} alt="" />
          </div>
        </div>

        <div className="row classes-imp">
          <div className="col-md-4 instructor-margin">
            <div className="d-flex card-width">
              <img className="instructors" src={instructor} alt="" />
              <div className="text">
                <h3>Best Instructors</h3>
                <p>
                  We have highly skilled & highly experienced instructors around
                  globe
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 instructor-margin">
            <div className="d-flex card-width">
              <img className="live" src={liveClass} alt="" />
              <div className="text">
                <h3>Live Class</h3>
                <p>
                  We take live classes to give our students best education
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 instructor-margin">
            <div className="d-flex card-width">
              <img className="support" src={support} alt="" />
              <div className="text">
                <h3>1 to 1 support</h3>
                <p>
                  We give our students best support always & all time 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPatnerSection>
  );
};

export default PatnerSection;
