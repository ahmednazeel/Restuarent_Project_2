import React from "react";
import "./mealsCard.css";
import { Link } from "react-router-dom";
const MealsCard = ({ img }) => {
  return (
    <div className="card-meals">
      <div>
        <img src={img} />
      </div>
      <div className="p-5">
        <div className="py-4">
          <p className="p-2 bg-success type rounded">VEGETARIAN</p>
          <span className="fs_2-4 fw-bold">Avocado Salad</span>
        </div>
        <ul className="list-group-flush">
          <li>
            <span className="fs_1-8 fw-bold">650 calories</span>
          </li>
          <li>
            <span className="fs_1-8 fw-bold">NutriScore ® 74</span>{" "}
          </li>
          <li>
            <span className="fs_1-8 fw-bold">4.9 rating (537)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealsCard;
