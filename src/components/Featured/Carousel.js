import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";
import slide1 from "../../resources/slide_1.jpg";
import slide2 from "../../resources/slide_2.jpg";
import slide3 from "../../resources/slide_3.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    { path: slide1, name: "Qatar 1" },
    { path: slide2, name: "Qatar 2" },
    { path: slide3, name: "Qatar 3" },
  ];

  return (
    <div
      className="carousel__wrapper"
      style={{ height: `${window.innerHeight}px` }}
    >
      <Slider {...settings} className="carousel">
        {slides.map((image) => (
          <div
            className="carousel__item"
            style={{
              height: `${window.innerHeight}px`,
            }}
            key={image.name}
          >
            <div
              className="carousel__image"
              style={{
                backgroundImage: `url(${image.path})`,
                height: `${window.innerHeight}px`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
