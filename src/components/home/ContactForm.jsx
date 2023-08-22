import React from "react";
import "./contactFrom.css";
import { Container } from "react-bootstrap";
// import image from ''
const ContactForm = () => {
  return (
    <Container>
      <div className="form-wrapper shadow d-flex justify-content-between">
        <form className="form">
          <div className="form-head">
            <h3 className="fs_4-4 fw-bold font_rubik">
              Get your first meal for free!
            </h3>
            <p className="fs_1-8 c-grey">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
          </div>
          <div className="form-detail">
            <div>
              <div className="inputs">
                <label style={{ display: "block",fontSize:"1.8rem" }} htmlFor="name">
                  Full Name
                </label>
                <input id="name" type="text" placeholder="Ahmed Nazeel" />
              </div>
              <select name="" id="hear-form-us">
                <option  className="fs_1-8 c-gray" value="">Where did you hear form us?</option>
                <option  className="fs_1-8 c-gray" value="">Friends ond family</option>
                <option  className="fs_1-8 c-gray" value="">Facebook</option>
                <option  className="fs_1-8 c-gray" value="">Youtube</option>
                <option  className="fs_1-8 c-gray" value="">Bodcast</option>
                <option  className="fs_1-8 c-gray" value="">Others</option>
              </select>
            </div>

            <div>
              <div className="inputs">
                <label style={{ display: "block",fontSize:"1.8rem" }} htmlFor="email">
                  Your name
                </label>
                <input id="email" type="text" placeholder="Ahmed Nazeel" />
              </div>
              <button className="fs_1-8 font_rubik">sign up now</button>
            </div>
          </div>
        </form>
        <div className="contact-image"></div>
      </div>
    </Container>
  );
};

export default ContactForm;
