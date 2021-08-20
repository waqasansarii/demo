import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination ,Autoplay} from "swiper/core";
// import  styles
import "swiper/swiper-bundle.css";
import "./style.css";
// assets
import img1 from "../Assets/std.jpg";
import hat from "../Assets/hat.png";
import house from "../Assets/house.svg";

SwiperCore.use([Navigation, Pagination,Autoplay]);

const Slider = () => {
  return (
    <div className='slider_container'>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        speed={3000}
      >
        {[1, 2, 3].map(() => (
          <SwiperSlide>
            <div className="cards_sliders">
              <div className="cardHead">
                <img src={img1} alt="..." />
                <div className="headTitl">
                  <p className="quotes"></p>
                  <p className='std_info'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    praesentium sed ducimus voluptates omnis est minima
                    possimus veniam
                  </p>
                  <p className="name">Unknown</p>
                  <p className="uni">MIT University</p>
                </div>
              </div>
              <div className="cardMOreInfo">
                <h2>We do more than Greek</h2>
                <p className='moreInfo_para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  veritatis deleniti quas accusamus! Dolorem minus, dicta magnam
                  doloribus provident possimus tempora tenetur.
                </p>
                <div className="educationInfo">
                  <div className="infoEdt1">
                    <img className="edt_img" src={hat} alt="..." />
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
                <button className='cusBlck_btn'>Get Started</button>
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
