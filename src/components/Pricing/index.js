import React from "react";
import "./index.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <h2 className="pricing__title">Pricing</h2>
      <div className="pricing__content">
        <div className="pricing__item">
          <span className="pricing__value">$100</span>
          <span className="pricing__package">balcony</span>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique, lorem nec malesuada aliquam.
          </p>
        </div>
        <div className="pricing__item">
          <span className="pricing__value">$150</span>
          <span className="pricing__package">medium</span>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique, lorem nec malesuada aliquam, aslco soplasds quedim.
          </p>
        </div>
        <div className="pricing__item">
          <span className="pricing__value">$300</span>
          <span className="pricing__package">star</span>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique, lorem nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
