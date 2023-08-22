import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/common.css";
import "./navbar.css";
import { Fade, Zoom } from "react-awesome-reveal";
export const addEventOnEle = (e) => {
  e.classList.toggle("active");
};
const Navbar = () => {
  const nav = useRef(null);
  const overLay = useRef(null);
  const hideOverlay = () => {
    overLay.current.classList.remove("active");
    nav.current.classList.remove("active");
  };
  const showNavbar = () => {
    addEventOnEle(nav.current);
    addEventOnEle(overLay.current);
  };

  return (
    <>
      <div className="navbar container-fluid d-flex align-items-center justify-content-between">
        <a href="#" className="color-primary fs_3-6 font_rubik">
            
            omnifood
        </a>

        <ul className="nav-links d-flex align-items-center justify-content-center gap-5">
          <li className="link-item">
            <Link>
              <a className="fs_1-8 color-secondary" href="#">
                How it works
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <a className="fs_1-8 color-secondary" href="#">
                Meals
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <a className="fs_1-8 color-secondary" href="#">
                How it works
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <a className="fs_1-8 color-secondary" href="">
                Testimonials
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <a className="fs_1-8 color-secondary" href="">
                Pricing
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <button className="fs_1-8 font_rubik">try for free</button>
            </Link>
          </li>
        </ul>

        <ul ref={nav} className="nav-links-mobile d-flex align-items-center">
          <li className="link-item">
            <Link>
              <a
                onClick={hideOverlay}
                className="fs_1-8 color-secondary"
                href="#"
              >
                How it works
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <a
                onClick={hideOverlay}
                className="fs_1-8 color-secondary"
                href="#"
              >
                Meals
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <a
                onClick={hideOverlay}
                className="fs_1-8 color-secondary"
                href="#"
              >
                How it works
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <a
                onClick={hideOverlay}
                className="fs_1-8 color-secondary"
                href=""
              >
                Testimonials
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <a
                onClick={hideOverlay}
                className="fs_1-8 color-secondary"
                href=""
              >
                Pricing
              </a>
            </Link>
          </li>
          <li className="link-item">
            <Link>
              <button onClick={hideOverlay} className="fs_1-8 font_rubik">
                try for free
              </button>
            </Link>
          </li>
        </ul>

        <button onClick={showNavbar} className="btn_toggle">
          <span></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </button>
      </div>
      <div ref={overLay} onClick={hideOverlay} className="overlay"></div>
    </>
  );
};

export default Navbar;
