import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeyondClass = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500, // For screens smaller than 500px
        settings: {
          slidesToShow: 1, // Show only 1 slide
        }
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2, // Show only 1 slide
        }
      },{
        breakpoint:1000, // For screens smaller than 1200px
        settings: {
          slidesToShow: 3, // Show 2 slides
        }
      }
    ]
  };
  return (
    <section className="classroom py-4">
    <div className="container-fluid">
      <h2 className="text-center pt-5 mb-4 text-light">Beyond The Classroom</h2>
      <div className="container">
        <div className="row">
        <Slider {...settings}>
          <div className="item">
          <div className="m-2">
            <div className="box2">
              <div className="about-img2">
                <img width="100%" src="./images/girls.png" alt="" />
                <div className="box-down">
                  <h6 className="mt-3">Academics</h6>
                  <p>JOIN US TO ENTHUSE, EMPOWER AND EXCEL YOUR WARD</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="item">
          <div
            className=" m-2"
          >
            <div className="box2">
              <div className="about-img2">
                <img width="100%" src="./images/football.png" alt="" />
                <div className="box-down">
                  <h6 className="mt-3">Infrastructure</h6>
                  <p>17 ACRES ECO-FRIENDLY CAMPUS</p>
                </div>
              </div>
            </div>
          </div>
          </div>
         <div className="item">
         <div
            className="m-2"
          >
            <div className="box2">
              <div className="about-img2">
                <img width="100%" src="./images/girl-1.png" alt="" />
                <div className="box-down">
                  <h6 className="mt-3">Sports</h6>
                  <p>PASSION FIRST AND EVERTHING WILL COME INTO PLACE</p>
                </div>
              </div>
            </div>
          </div>
         </div>
         <div className="item">
         <div
            className="m-2"
          >
            <div className="box2">
              <img width="100%" src="./images/girls.png" alt="" />
              <div className="box-down">
                <h6 className="mt-3">Personal Care</h6>
                <p>WHERE CARING IS NOT JUST A DUTY BUT CULTURE</p>
              </div>
            </div>
          </div>
         </div>
          
          </Slider>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BeyondClass