import React from "react";

const Hero = () => {
  return (
    <>
      <section className="container-area">
        <div className="position-relative">
          <div className="header position-absolute">
            <img width="70%" src="./images/logo.png" alt="" />
          </div>
          <div className="">
            <div className="hero">
              <img width="100%" src="./images/image_1.png" alt="" />
            </div>
          </div>
          <div className="hero-text position-absolute text-center text-bold">
            <h4>
              Bringing <br />
              Excellence to Students
            </h4>
          </div>
        </div>
      </section>

      {/* counter section start from here */}
      <section className="counter-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 pd-0">
              <div className="counter text-center">
                <div className="count-number">
                  <span className="count">1400 </span>
                  <span className="plus">+</span>
                </div>
                <h6>Students</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 pd-0">
              <div className="counter text-center">
                <div className="count-number">
                  <span className="count">75</span>
                  <span className="plus">+</span>
                </div>
                <h6>Teachers</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 pd-0">
              <div className="counter text-center">
                <div className="ico"></div>
                <div className="count-number">
                  <span className="count">40</span>
                  <span className="plus">+</span>
                </div>
                <h6>Classes</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 pd-0">
              <div className="counter text-center">
                <div className="count-number">
                  <span className="count">10</span>
                  <span className="plus">+</span>
                </div>
                <h6>Labs</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
