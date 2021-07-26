import React from "react";
import "./index.css";

const Location = () => {
  return (
    <div className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295124.13259721856!2d55.087663322102586!3d25.075956713037215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sbr!4v1627287221765!5m2!1sen!2sbr"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        title="Qatar"
      ></iframe>
      <div className="location__tag">
        <span className="location__label">Location</span>
      </div>
    </div>
  );
};

export default Location;
