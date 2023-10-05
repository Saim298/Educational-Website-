import React from 'react';
import styled from "styled-components";

const StyledTabs = styled.div`
    margin: 2rem 0;
    background-color: #F6F5EE;
    padding-top: 5px;
    padding-bottom: 2rem;
    h4 {
        margin-top: 1rem;
        font-size: 20px;
        line-height: 1;
    }
`

const instructor = () => {
  if (localStorage.getItem("userID")) {
    // Navigate to instructorDashboard page
    window.location.href = '/instructorDashboard';
  } else {
    // Navigate to login page
    window.location.href = '/signup';
  }
}

const Started = () => {
  return (
    <StyledTabs>
      <div className="text-center mt-5">
        <h1>Become an instructor today</h1>
        <h4>Join one of the world’s largest online learning </h4>
        <h4>marketplaces.</h4>
        <button className="btn-dark btn mt-3" onClick={instructor}>Get Started</button>
      </div>
    </StyledTabs>
  )
}

export default Started;
