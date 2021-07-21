import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const Countdown = () => {
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

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
          {renderItem(time.days, "days")}
          {renderItem(time.hours, "hs")}
          {renderItem(time.minutes, "min")}
          {renderItem(time.seconds, "sec")}
        </div>
      </div>
    </Slide>
  );
};

export default Countdown;
