import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="footer-content d-flex justify-content-around">
          <div className="footer-logo">
            <a href="#" className="color-primary fs_3-6 font_rubik">
              omnifood
            </a>
            <div className="copyright">
              Copyright © 2023 by Omnifood, Inc.
              <br /> All rights reserverd.
            </div>
          </div>
          <div className="footer-address">
            <p className="fs_1-8 fw-bold c-gray font_rubik">Address</p>
            <p className="fs_1-6 fw-bold mb-4 c-gray">
              623 Harrison St., 2nd Floor,
              <br /> San Francisco, CA 94107
            </p>
            <p className="fs_1-6 fw-bold c-gray">
              415-201-6370
              <br />
              hello@omnifood.com{" "}
            </p>
          </div>
          <ul className="footer-list">
            <p className="fs_1-8 fw-bold c-gray first font_rubik">Account</p>
            <li className="mb-4">Create account</li>
            <li className="mb-4">Sign in</li>
            <li className="mb-4">IOS app</li>
            <li>Android app</li>
          </ul>
          <ul className="footer-list">
            <p className="fs_1-8 fw-bold c-gray first font_rubik">Help center</p>
            <li className="mb-4">About Omnifood</li>
            <li className="mb-4">For Business</li>
            <li className="mb-4">Cooking partners</li>
            <li>Careers</li>
          </ul>
          <ul className="footer-list">
            <p className="fs_1-8 fw-bold c-gray first font_rubik">Resources</p>

            <li className="mb-4">Recipe directory</li>
            <li className="mb-4">Help center</li>
            <li>Privacy & terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
