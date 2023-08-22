import React from "react";
import { Container } from "react-bootstrap";
import "./testimonails.css";
import TestiCard from "./TestiCard";
import img_1 from "../../img/customers/customer-1.jpg";
import img_2 from "../../img/customers/customer-2.jpg";
import img_3 from "../../img/customers/customer-3.jpg";
import img_4 from "../../img/customers/customer-4.jpg";
// testimonial Images
import img_5 from "../../img/gallery/gallery-1.jpg";
import img_6 from "../../img/gallery/gallery-10.jpg";
import img_7 from "../../img/gallery/gallery-11.jpg";
import img_8 from "../../img/gallery/gallery-12.jpg";
import img_9 from "../../img/gallery/gallery-2.jpg";
import img_11 from "../../img/gallery/gallery-4.jpg";
import img_12 from "../../img/gallery/gallery-5.jpg";
import img_13 from "../../img/gallery/gallery-6.jpg";
import img_14 from "../../img/gallery/gallery-6.jpg";
import img_15 from "../../img/gallery/gallery-7.jpg";
import img_16 from "../../img/gallery/gallery-8.jpg";
import img_17 from "../../img/gallery/gallery-9.jpg";
import { Zoom } from "react-awesome-reveal";

const Testimonials = () => {
  const cardOpj = [
    {
      img: img_1,
      name: "— Dave Bryson",
      text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    },
    {
      img: img_2,
      name: "— Ben Hadley",
      text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    },
    {
      img: img_3,
      name: "— Steve Miller",
      text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    },
    {
      img: img_4,
      name: "— Hannah Smith",
      text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    },
  ];
  const imgGallery = [
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_11,
    img_12,
    img_13,
    img_14,
    img_15,
    img_16,
    img_17,
  ];
  return (
    <div className="testimonial background-Primary ">
      <Container>
        <div className="head_comp">
          <p className="fs_1-8 color-primary font_rubik">TESTIMONIALS</p>
          <h3 className="fs_4-4 fw-bold">Once you try it, you can't go back</h3>
        </div>
        <div className="testimonial-content d-flex align-items-center">
          <div className="testi-desc">
            {cardOpj.map(card => <TestiCard img={card.img} name={card.name} text={card.text} /> )}
          </div>
          <Zoom triggerOnce="true">
            <div className="gallery-images d-flex flex-wrap justify-content-center">
              {imgGallery.map( img =>  <div className="gallery-img-wrapper"><img src={img} /></div> )}
            </div>
          </Zoom>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
