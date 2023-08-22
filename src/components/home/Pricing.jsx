import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/common.css";
import "./pricing.css";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <Container>
      <div className="pricing">
        <div className="head_comp">
          <p className="fs_1-8 color-primary font_rubik">pricing</p>
          <h3 className="fs_4-4 fw-bold">
            Eating well without breaking the bank
          </h3>
        </div>
        <div className="pricing-plans d-flex algin-items-center justify-content-center">
          <div className="plan">
            <div className="plan-heading text-center">
                <p className="fs_1-8 color-primary font_rubik">pricing</p>
                <h3 className="fs_4-4 fw-bold">$399</h3>
                <span className="month fs_1-6 c-gray">per month. That's just $13 per meal!</span>
            </div>
            <ul >
              <li className="fs_1-8">
                <FontAwesomeIcon className="color-primary" icon={faCheck} />
                 <span className="c-gray">1 meal per day</span>{" "}
              </li>
              <li className="fs_1-8">
                <FontAwesomeIcon className="color-primary" icon={faCheck} />{" "}
                <span className="c-gray">Order from 11am to 9pm</span>{" "}
              </li>
              <li className="fs_1-8">
                <FontAwesomeIcon className="color-primary" icon={faCheck} /> 
                <span className="c-gray">Delivery is free</span>{" "}
              </li>
              <li className="fs_1-8">
                <FontAwesomeIcon className="color-primary" icon={faXmark} />{" "}
                <span className="c-gray">Get access to latest recipes</span>{" "}
              </li>
            </ul>
            <button className="fs_1-8 font_rubik">start eating well</button>
          </div>
          <div className="plan background-Primary">
            <label className="label-plan" >BEST VALUE</label>
            <div className="plan-heading text-center">
                <p className="fs_1-8 color-primary font_rubik">pricing</p>
                <h3 className="fw-bold">$399</h3>
                <span className="month fs_1-6 c-gray">per month. That's just $13 per meal!</span>
            </div>
            <ul >
              <li className="fs_1-8">
                <FontAwesomeIcon className="color-primary" icon={faCheck} />
                 <span className="c-gray">1 meal per day</span>{" "}
              </li>
              <li className="fs_1-8">
                <FontAwesomeIcon className="color-primary" icon={faCheck} />{" "}
                <span className="c-gray">Order from 11am to 9pm</span>{" "}
              </li>
              <li className="fs_1-8">
                <FontAwesomeIcon className="color-primary" icon={faCheck} /> 
                <span className="c-gray">Delivery is free</span>{" "}
              </li>
              <li className="fs_1-8">
                <FontAwesomeIcon className="color-primary" icon={faXmark} />{" "}
                <span className="c-gray">Get access to latest recipes</span>{" "}
              </li>
            </ul>
            <button className="fs_1-8 font_rubik">start eating well</button>
          </div>
        </div>
        <p className="my-5 text-center fs_1-6 c-gray">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
        <PricingCard/>
      </div>
    </Container>
  );
};

export default Pricing;
