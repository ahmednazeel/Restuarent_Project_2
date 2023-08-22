import React from "react";
import "../../styles/common.css";
import "./meals.css";
import { Container } from "react-bootstrap";
import MealsCard from "./MealsCard";
import img_1 from '../../img/meals/meal-1.jpg'
import img_2 from '../../img/meals/meal-2.jpg'
import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Meals = () => {
  return (
    <div className="meals">
      <Container>
        <div className="head_comp text-center">
          <p className="fs_1-8 color-primary font_rubik">HOW IT WORKS</p>
          <h3 className="fs_4-4 fw-bold">
                Omnifood AI chooses from 5,000+ recipes
          </h3>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap">
            <MealsCard img={img_1}/>
            <MealsCard img={img_2}/>
            <ul className="meals-list">
               <li className="one">Works with any diet:</li> 
               <li> <FontAwesomeIcon className="color-primary" icon={faCircleCheck} /> Vegetarian</li> 
               <li> <FontAwesomeIcon className="color-primary" icon={faCircleCheck} /> Vegan</li> 
               <li> <FontAwesomeIcon className="color-primary" icon={faCircleCheck} /> Pescatarian</li> 
               <li> <FontAwesomeIcon className="color-primary" icon={faCircleCheck} /> Gluten-free</li> 
               <li> <FontAwesomeIcon className="color-primary" icon={faCircleCheck} /> Lactose-free</li> 
               <li> <FontAwesomeIcon className="color-primary" icon={faCircleCheck} /> Keto Paleo</li> 
               <li> <FontAwesomeIcon className="color-primary" icon={faCircleCheck} /> Low FODMAP</li> 
               <li> <FontAwesomeIcon className="color-primary" icon={faCircleCheck} /> Kid-friendly</li> 
            </ul>
        </div>
        <div  className="text-center pt-5 d-flex align-items-center justify-content-center">
            <Link>
                <span className="fs_1-8 color-primary fw-bold text-decoration-underline">see all recipes</span>
            </Link>
            <FontAwesomeIcon className="color-primary fs_1-8 ms-2" icon={faArrowRight} />
        </div>
      </Container>
    </div>
  );
};

export default Meals;
