import React, { useState } from "react";
import styled from "styled-components";
import curriculum from "../../assets/curriculum.jpg";
import video from "../../assets/video.jpg";
import launch from "../../assets/launch.jpg";
import Slider from "./Slider";

const StyledTabs = styled.div`
  text-align: center;
  .tab {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .tab button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18px;
    padding: 10px 15px;
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  .tab button.active {
    /* background-color: #ccc; */
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 1);
    font-weight: 800;
  }
  .tabcontent {
    display: none;
    text-align: left;
    padding: 20px;
    border-top: none;
  }
  .tabcontent.active {
    display: block;
  }

  img {
    width: 100%;
  }

  .container1 {
    padding: 0px 18rem;
  }
  
  @media (max-width:992px){
    .container1 {
        padding: 0px 0rem;
    }
  }
  
  p{
    font-weight: 500;
    font-size: 18px;
    line-height: 1.6;
  }

  @media (min-width:992px){
        margin-top: 5rem !important;
        margin-bottom: 9rem !important;
        .container1 {
          padding-bottom: 3rem;
      }
  }
`;

const HowToStart = () => {
  const [activeTab, setActiveTab] = useState("planYourCurriculum");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <StyledTabs>
      <h1 className="mt-5 heading-reasons">How to Begin</h1>
      <div className="tab mt-5 container">
        <button
          className={`tablinks tabs-text ${
            activeTab === "planYourCurriculum" ? "active" : ""
          }`}
          onClick={() => openCity("planYourCurriculum")}
        >
          Plan Your Curriculum
        </button>
        <button
          className={`tablinks ${
            activeTab === "recordYourVideo" ? "active" : ""
          }`}
          onClick={() => openCity("recordYourVideo")}
        >
          Record Your Video
        </button>
        <button
          className={`tablinks ${
            activeTab === "LaunchYourCourse" ? "active" : ""
          }`}
          onClick={() => openCity("LaunchYourCourse")}
        >
          Launch Your Course
        </button>
      </div>
      <div className="container1">
        <div
          id="planYourCurriculum"
          className={`tabcontent ${
            activeTab === "planYourCurriculum" ? "active" : ""
          }`}
        >
          <div className="row">
            <div className="col-md-6 mt-5">
              <p className="knowledge">
                You start with your passion and knowledge. Then choose a
                promising topic with the help of our Marketplace Insights tool.
                <p>
                  The way that you teach — what you bring to it — is up to you.
                </p>
                <h5>How we help you</h5>
                We offer plenty of resources on how to create your first course.
                And, our instructor dashboard and curriculum pages help keep you
                organized.
              </p>
            </div>
            <div className="col-md-6">
              <img src={curriculum} alt="" />
            </div>
          </div>
        </div>

        <div
          id="recordYourVideo"
          className={`tabcontent ${
            activeTab === "recordYourVideo" ? "active" : ""
          }`}
        >
          <div className="row">
            <div className="col-md-6 mt-5">
              <p className="knowledge">
              Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.
                <p>
                If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.
                </p>
                <h5>How we help you</h5>
                Our support team is available to help you throughout the process and provide feedback on test videos.
              </p>
            </div>
            <div className="col-md-6">
              <img src={video} alt="" />
            </div>
          </div>
        </div>

        <div
          id="LaunchYourCourse"
          className={`tabcontent ${
            activeTab === "LaunchYourCourse" ? "active" : ""
          }`}
        >
          <div className="row">
            <div className="col-md-6 mt-5">
              <p className="knowledge">
              Gather your first ratings and reviews by promoting your course through social media and your professional networks.
                <p>
                Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.
                </p>
                <h5>How we help you</h5>
                Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.
              </p>
            </div>
            <div className="col-md-6">
              <img src={launch} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Slider/>
    </StyledTabs>
  );
};

export default HowToStart;
