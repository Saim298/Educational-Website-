import React from "react";
import styled from "styled-components";

const StyledMentors = styled.section`
  background-color: #f6f5ee;
  height: 70vh;
  h1{
    font-size: 3.5rem;
    font-weight: 700;
  }
  @media (max-width: 992px){
    h1{
      font-size: 1.95rem;
      font-weight: 700;
    }
  }
`;
const MentorPages = () => {
  return (
    <StyledMentors>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h1>Build Skills With </h1>
            <h1>
              Top Mentor <span>Anytime</span>
            </h1>
            <h1>In Very Easly</h1>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </StyledMentors>
  );
};

export default MentorPages;
