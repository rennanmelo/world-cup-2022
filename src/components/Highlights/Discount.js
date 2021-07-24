import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Discount = () => {
  const totalPercentage = 30;
  // Create the state variable with the default state
  const [percentage, setPercentage] = useState(0);

  const upPercentage = () => {
    // Use the default prevCount variable given by useState
    setPercentage((prevCount) => prevCount + 1);
  };

  // Every time the percentage value changes it will run again
  useEffect(() => {
    if (percentage > 0 && percentage < totalPercentage) {
      setTimeout(() => {
        upPercentage();
      }, 30);
    }
  }, [percentage]);

  return (
    <div className="discount">
      <div className="discount__content">
        <Fade
          triggerOnce
          onVisibilityChange={(inView) => {
            if (inView) {
              upPercentage();
            }
          }}
        >
          <div className="discount__percentage">
            <span className="discount__value">{percentage}%</span>
            <span className="discount__label">off</span>
          </div>
        </Fade>
        <Slide direction="right">
          <div className="discount__description">
            <h3 className="discount__title">
              Purchase ticket before 20th July
            </h3>
            <p className="discount__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pretium blandit est accumsan porttitor. Donec a ornare massa.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
