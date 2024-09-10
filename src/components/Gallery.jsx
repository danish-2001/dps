import React from 'react'

const Gallery = () => {
  return (
     <section className="grid-img-sec">
    <div className="container">
      <div className="grid-up">
        <h2 className="my-4">School Highlights</h2>
        <button className="gallery-btn">
          Full Gallery
          <img width="20" src="./images/right_arrow_1.png" alt="gridimg" />
        </button>
      </div>

      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 my-2">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 mt-3">
              <img
                className="grid-img"
                width="100%"
                src="./images/grid4.png"
                alt="gridimg"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3">
              <img
                className="grid-img"
                width="100%"
                src="./images/grid2.png"
                alt="gridimg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3">
              <img className="grid-img" src="./images/grid5.png" alt="" />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 mt-3">
              <img
                className="grid-img"
                width="100%"
                src="./images/grid1.png"
                alt="gridimg"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 my-2 mt-3">
          <img
            className="grid-img height-full"
            src="./images/grid3.png"
            alt="gridimg"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Gallery