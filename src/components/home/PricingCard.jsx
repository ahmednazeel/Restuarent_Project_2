import {
  faInfinity,
  faLeaf,
  faPause,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './pricingcard.css'
const PricingCard = () => {
  return (
    <div className="pricing-cards">
      <div className="price-card">
        <FontAwesomeIcon className="icon" icon={faPause} />
        <p>Never cook again!</p>
        <p>Our subscriptions cover 365 days per year, even including major holidays.</p>
        
      </div>
      <div className="price-card">
        <FontAwesomeIcon className="icon" icon={faLeaf} />
        <p>Local and organic

</p>

        <p>Our cooks only use local, fresh, and organic products to prepare your meals.</p>
      </div>
      <div className="price-card">
        <FontAwesomeIcon className="icon" icon={faThumbsUp} />
        <p>No waste

</p>

        <p>All our partners only use reusable containers to package all your meals.</p>
      </div>
      <div className="price-card">
        <FontAwesomeIcon className="icon" icon={faInfinity} />
        <p>Pause anytime</p>

        <p>Going on vacation? Just pause your subscription, and we refund unused days.</p>
      </div>
    </div>
  );
};

export default PricingCard;
