import React from "react";
import "./testiCard.css";
import { Fade } from "react-awesome-reveal";
const TestiCard = ({ img, text, name }) => {
  return (
    <Fade triggerOnce="true">
      <div className="testi-card d-flex gap-3">
        <img src={img} />
        <div className="testi-info">
          <p>{name}</p>
          <span>{text}</span>
        </div>
      </div>
    </Fade>
  );
};

export default TestiCard;
