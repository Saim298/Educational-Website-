import React from "react";
import styled from "styled-components";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Started from "./Started";

const StyledSlider = styled.div`
  background-color: #F6F5EE;
  margin-top: 2rem;
  .row {
    padding: 0px 16rem;
  }
  .col-md-6 {
    text-align: left;
  }

  .text-left h4,
  h6 {
    font-size: 21px;
    line-height: 1.55;
  }

  .text-left h6 {
    font-weight: 700;
  }
  .text-left h5 {
    font-weight: 400;
    color: #818181;
    font-size: 17px;
  }

  /* Custom styles for Swiper navigation buttons */
  .swiper-button-prev,
  .swiper-button-next {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    box-shadow: 0px 1px 5px black;
    height: 50px;
    font-size: 10px;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    font-size: 13px;
    font-weight: 700;
  }

  @media (max-width: 992px) {
    .row {
      padding: 0px 0rem;
    }
  }
`;

const Slider = () => {
  return (
   <div>
     <StyledSlider>
      <div className="container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          speed={400}
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-md-6">
                <img src={slider1} alt="" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="text-left ">
                  <h4>
                    “I’m proud to wake up knowing my work is helping people
                    around the world improve their careers and build great
                    things. While being a full-time instructor is hard work, it
                    lets you work when, where, and how you want.”
                  </h4>
                  <h6>Frank Kane</h6>
                  <h5>Data Science & IT Certifications</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-md-6">
                <img src={slider2} alt="" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="text-left ">
                  <h4>
                    “Udemy has changed my life. It’s allowed me to follow my
                    passion and become a teacher I love to see my students
                    succeed and hear them say they’ve learned more, quicker,
                    from my courses than they did in college. It’s so humbling.”
                  </h4>
                  <h6>Paulo Dichone</h6>
                  <h5>Developer (Android Speciality)</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <div className="col-md-6">
                <img src={slider3} alt="" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="text-left ">
                  <h4>
                    “Teaching on Udemy has provided me with two important
                    elements: the opportunity to reach more learners than I ever
                    would be able to on my own and a steady stream of extra
                    income.”
                  </h4>
                  <h6>Deborah Grayson Riege</h6>
                  <h5>Leadership, Communication</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledSlider>
    <Started/>
   </div>
  );
};

export default Slider;
