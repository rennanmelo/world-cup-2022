import React from "react";

const Countdown = () => {
  return (
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
  );
};

export default Countdown;
