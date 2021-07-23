import React from "react";
import { Zoom } from "react-awesome-reveal";
import "./index.css";
import { DateRange, LocationOn } from "@material-ui/icons";

const EventInfo = () => {
  return (
    <div className="event-info">
      <Zoom className="event-info__item">
        <div className="event-info__outer">
          <div className="event-info__inner">
            <div className="event-info__icon-square">
              <DateRange className="event-info__icon" />
            </div>
            <div className="event-info__icon"></div>
            <div className="event-info__title">Event Date & Time</div>
            <div className="event-info__description">Nov 21, 2022 at 8 AM</div>
          </div>
        </div>
      </Zoom>

      <Zoom className="event-info__item" delay={500}>
        <div className="event-info__outer">
          <div className="event-info__inner">
            <div className="event-info__icon-square">
              <LocationOn className="event-info__icon" />
            </div>
            <div className="event-info__icon"></div>
            <div className="event-info__title">Event Location</div>
            <div className="event-info__description">Qatar - Arab homeland</div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default EventInfo;
