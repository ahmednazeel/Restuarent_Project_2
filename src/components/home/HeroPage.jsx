import React from "react";
import { Container } from "react-bootstrap";
import "./heroPage.css";
import "../../styles/common.css";
import heroPageImage from "../../img/hero.png";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgCustomer from "../../img/customers/ben.jpg";
import imgCustomer_5 from "../../img/customers/customer-5.jpg";
import imgCustomer_6 from "../../img/customers/customer-6.jpg";
import imgCustomer_7 from "../../img/customers/dave.jpg";
import imgCustomer_8 from "../../img/customers/hannah.jpg";
import imgCustomer_9 from "../../img/customers/steve.jpg";
import { Slide } from "react-awesome-reveal";
const HeroHome = () => {
  const imagesCustomers = [
    imgCustomer,
    imgCustomer_9,
    imgCustomer_5,
    imgCustomer_6,
    imgCustomer_7,
    imgCustomer_8,
  ];
  return (
    <div className="background-Primary">
      <Container>
        <div className="hero-content p-5  d-flex align-items-center justify-content-center gap-5">
          <Slide triggerOnce="true" direction="left">
            <div className="hero_info">
              <h2 className="heading-primary">
                A healthy meal delivered to your door, every single day
              </h2>
              <p className="fs_1-8 line_1-6">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <div className="btn-hero d-flex align-items-center gap-3 flex-wrap">
                <button className="one fs_1-8 font_rubik">
                  start eating wall
                </button>
                <button className="two fs_1-8 font_rubik">
                  learn more <FontAwesomeIcon icon={faArrowDown} />
                </button>
              </div>
              <div className="hero-customers d-flex align-items-center gap-3 flex-wrap">
                <div className="customers-img">
                  {imagesCustomers.map((img) => (
                    <img src={img} className="img-cust" />
                  ))}
                </div>
                <div className="customers-dsc fs_1-8 ">
                  <span className="color-primary">250,000+</span> delivered
                  meals last year!
                </div>
              </div>
            </div>
          </Slide>

          <Slide triggerOnce="true" direction="right">
            <div className="hero_img">
              <img src={heroPageImage} alt="" style={{ width: "100%" }} />
            </div>
          </Slide>
        </div>
      </Container>
    </div>
  );
};

export default HeroHome;
