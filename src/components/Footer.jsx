import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 left-foot p-5">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">» Admissions </a>
              </li>
              <li>
                <a href="#">» Hostel Facilities</a>
              </li>
              <li>
                <a href="#">» Jobs and Careers</a>
              </li>
              <li>
                <a href="#">» CBSE Mandatory Disclosure</a>
              </li>
              <li>
                <a href="#"> » Alumni Portal</a>
              </li>
              <li>
                <a href="#">» Privacy Policy</a>
              </li>
              <li>
                <a href="#">» Reach Us</a>
              </li>
            </ul>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center mid-foot p-4"
          >
            <img src="./images/footer-logo.png" className="py-3" alt="" />
            <p>
              Delhi Public School Yamunanagar under the aegis of Delhi Public
              School Society, Delhi believes that quality education is about
              possibilities. We at DPS-YNR view education as a process which
              takes along students, educators and parents on an inviting journey
              - exploring the worlds of intellectual, emotional and spiritual
              learning.
            </p>
            <div className="icons">
              <img width="30" className="mx-1" src="./images/facebook.png" alt=""/>
              <img width="30" className="mx-1" src="./images/insta.png" alt=""/>
              <img width="30" className="mx-1" src="./images/youtube-logo.png" alt=""/>
              <img width="30" className="mx-1" src="./images/linkedin.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 right-foot p-5">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <img className='mx-2' width="30" src="./images/placeholder.png" alt="" />
                <span>
                  Delhi Public School Yamuna NagarVill. Bhambholi, 9 Km
                  Milestone,Jagadhri – Ambala Road, Opposite Power Grid Station
                  Jagadhri, District Yamuna Nagar, Pin – 133103 Haryana (INDIA)
                </span>
              </li>
              <li className="py-2">
                <img className='mx-2' width="30" src="./images/email.png" alt="" />
                <a href="mailto:info@dpsyamunanagar.com">
                  info@dpsyamunanagar.com
                </a>
              </li>
              <li className="py-2">
                <img className='mx-2' width="30" src="./images/call.png" alt="" />
                <a href="tel:1800-8911-007">
                  1800-8911-007
                </a>
              </li>
              <li className="py-2">
                <img className='mx-2' width="30" src="./images/globe.png" alt="" />
                <span>
                  www.dpsyamunanagar.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" row footer-bottom">
          © 2024-2025 Delhi Public School, Yamuna Nagar.
        </div>
      </div>
    </footer>
  )
}

export default Footer