import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show only 1 slide
        }
      }
    ]
  };

  return (
    <section className="testimonial my-5">
      <div className="container">
        <h2 className="text-center py-4">What Our Parents Say</h2>
        <Slider {...settings}>
          <div className="item">
            <div className="text-center card-testimonial position-relative">
              <img
                className="left_quote_2"
                src="./images/left_quote_2.png"
                alt=""
              />
              <img
                className="card-img"
                src="./images/Ellipse1.png"
                alt="user"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Shilpa Kumari</h5>
                <p className="card-text">
                  The school is living upto the standards of parents
                  expectations. The staff whether being it teaching faculty or
                  the governesses or the transportation faculty are immensely
                  understanding and supportive. The canteen and mess are
                  appluadable regarding healthy food. The managing committee and
                  principal welcomes the negative points of school with open
                  mind and take the necessary actions in this regard. We are
                  happy the ways the children are being taught the academics and
                  the way to be a better human being in future. A big kudos to
                  the DPS faculty for doing so.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="text-center card-testimonial position-relative">
              <div className="flex">
                <img
                  className="left_quote_2"
                  src="./images/left_quote_2.png"
                  alt=""
                />
                <img
                  className="card-img"
                  src="./images/Ellipse2.png"
                  alt="user"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Jasmeen Bhatia</h5>
                <p className="card-text">
                  DPS ynr is a school every parent could dream for their child.
                  A school with intriguing staff, infrastructure, studies, and
                  every thing necessary for a perfect education of our child. An
                  epitome of excellence in the field of both education and
                  sports, hence giving a fare chance of all round growth to
                  every single student.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
