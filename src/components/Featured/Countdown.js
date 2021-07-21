import React from "react";
import { Slide } from "react-awesome-reveal";

const Countdown = () => {
  const renderItem = (time, tag) => (
    <div className="countdown__item">
      <div className="countdown__time">{time}</div>
      <div className="countdown__tag">{tag}</div>
    </div>
  );
  return (
    <Slide>
      <div className="countdown">
        <div className="countdown__top">Event starts in</div>
        <div className="countdown__bottom">
          {renderItem(24, "days")}
          {renderItem(24, "hs")}
          {renderItem(24, "min")}
          {renderItem(24, "sec")}
        </div>
      </div>
    </Slide>
  );
};

export default Countdown;
