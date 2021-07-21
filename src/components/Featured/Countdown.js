import React from "react";
import { Slide } from "react-awesome-reveal";

const Countdown = () => {
  return (
    <Slide>
      <div className="countdown">
        <div className="countdown__top">Event starts in</div>
        <div className="countdown__bottom">
          <div className="countdown__item">
            <div className="countdown__time">27</div>
            <div className="countdown__tag">days</div>
          </div>
          <div className="countdown__item">
            <div className="countdown__time">27</div>
            <div className="countdown__tag">hs</div>
          </div>
          <div className="countdown__item">
            <div className="countdown__time">27</div>
            <div className="countdown__tag">min</div>
          </div>
          <div className="countdown__item">
            <div className="countdown__time">27</div>
            <div className="countdown__tag">sec</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Countdown;
