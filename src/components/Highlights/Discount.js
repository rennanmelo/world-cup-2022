import React from "react";

const Discount = () => {
  return (
    <div className="discount">
      <div className="discount__content">
        <div className="discount__percentage">
          <span className="discount__value">30%</span>
          <span className="discount__label">off</span>
        </div>
        <div className="discount__description">
          <h3 className="discount__title">Purchase ticket before 20th July</h3>
          <p className="discount__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium blandit est accumsan porttitor. Donec a ornare massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
