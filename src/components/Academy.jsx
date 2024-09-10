import React from 'react'

const Academy = () => {
  return (
    <section className="academy-area mt-5 py-4">
      <div className="container-fluid">
        <h2 className="text-center pt-5 my-4">
          Rohit Sharma Academy at DPS, Yamuna Nagar
        </h2>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-5 col-sm-12 col-xs-12 position-relative my-2"
            >
              <img
                width="100%"
                src="./images/rohit-academy.png"
                alt=""
              />
            </div>
            <div
              className="col-lg-5 col-md-5 col-sm-12 col-xs-12 position-relative my-2"
            >
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.It is
                a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
            </div>
            <div
              className="col-lg-2 col-md-2 col-sm-12 col-xs-12 position-relative my-2"
            >
              <div className="">
                <div className="about-img2">
                  <img
                    width="100%"
                    src="./images/rohit-academy2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Academy