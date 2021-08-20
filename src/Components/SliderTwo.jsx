import React from "react";
import Slider from "react-slick";
import "./style.css";

// assets
import img1 from "../Assets/std.jpg";
import hat from "../Assets/hat.png";
import house from "../Assets/house.svg";
export const AutoPlay=()=> {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows:false,
      className: "center",
      centerMode: true,
      centerPadding: "0px",
    }
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
            {/* <div className="container_slider"> */}

            {[1,2,3,4].map(()=>(
                
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
            ))}
                    {/* </div> */}
        </Slider>
      </div>
    );
}