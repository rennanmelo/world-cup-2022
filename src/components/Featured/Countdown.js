import React, { useCallback, useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const Countdown = () => {
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });
  const [willHappen, setWillHappen] = useState(false);

  const renderItem = (time, tag) => (
    <div className="countdown__item">
      <div className="countdown__time">{time}</div>
      <div className="countdown__tag">{tag}</div>
    </div>
  );

  const getCountdown = useCallback((deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time >= 0) {
      setWillHappen(true);
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setTime({
        seconds,
        minutes,
        hours,
        days,
      });
    }
  }, []);

  useEffect(() => {
    setInterval(() => getCountdown("Nov, 21, 2022, 00:00:00"), 1000);
  }, [getCountdown]);

  return (
    <>
      {willHappen && (
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
      )}
    </>
  );
};

export default Countdown;
