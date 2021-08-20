import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
// import  styles
import "swiper/swiper-bundle.css";
import "./style.css";
// assets
import img1 from "../Assets/std.jpg";
import hat from "../Assets/Brand icon.png";
import house from "../Assets/Brand icon (2).png";
import vector from "../Assets/Vector.png";
// import house from "../Assets/house.svg";
import dp1 from "../Assets/Image.png";
import dp2 from "../Assets/Image (2).png";
import dp3 from "../Assets/Image (3).png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const sliderData = [
  {
    profile: dp1,
    desc: "Best Custom Apperal Website on the Market",
    name: "Calaway Scholes",
    uni: "University of Central Missouri Lambda Chi Alpha",
  },
  {
    profile: dp2,
    desc: "Best Custom Apperal Website on the Market",
    name: "Kelly Itatani",
    uni: "Chapman University",
  },
  {
    profile: dp3,
    desc: "Best Custom Apperal Website on the Market",
    name: "Caitlyn Lux",
    uni: "The Ohio State University Alpha Gamma Delta",
  },
];
const Slider = () => {
  return (
    <div className="slider_container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // centeredSlides={true}
        loop={true}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        speed={3000}
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: true,
            centeredSlidesBounds: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {sliderData.map((val) => (
          <SwiperSlide>
            <div className="cards_sliders">
              <div className="cardHead">
                <img src={val.profile} alt="..." />
                <div className="headTitl">
                  <p className="quotes"></p>
                  <p className="std_info">
                    {val.desc}
                  </p>
                  <p className="name">{val.name}</p>
                  <p className="uni">{val.uni}</p>
                </div>
              </div>
              <div className="cardMOreInfo">
                <h2>We do more than Greek</h2>
                <p className="moreInfo_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  veritatis deleniti quas accusamus! Dolorem minus, dicta magnam
                  doloribus provident possimus tempora tenetur.
                </p>
                <div className="educationInfo">
                  <div className="infoEdt1">
                    <img className="edt_img3" src={vector} alt="..." />
                    <h6>College Orgs & Department</h6>
                  </div>
                  <div className="infoEdt">
                    <img className="edt_img" src={hat} alt="..." />
                    <h6>High Schools</h6>
                  </div>
                  <div className="infoEdt">
                    <img className="edt_img" src={house} alt="..." />
                    <h6>Businesses & More</h6>
                  </div>
                </div>
                <button className="cusBlck_btn">Get Started</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide> */}
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        ...
      </Swiper>
    </div>
  );
};

export default Slider;
