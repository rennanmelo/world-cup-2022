import React from "react";
import { Fade } from "react-awesome-reveal";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Fade triggerOnce delay={300}>
        <div className="footer__title">
          <span>Qatar 2022</span>
        </div>
      </Fade>

      <Fade triggerOnce delay={600}>
        <div className="footer__copyright">
          <span>All rights reserved</span>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
