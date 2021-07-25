import React from "react";
import { Zoom } from "react-awesome-reveal";
import "./index.css";

const Pricing = () => {
  const pricingItems = [
    {
      value: 100,
      package: "balcony",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique, lorem nec malesuada aliquam.",
      delay: 500,
    },
    {
      value: 150,
      package: "medium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique, lorem nec malesuada aliquam, aslco soplasds quedim.",
      delay: 0,
    },
    {
      value: 300,
      package: "star",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique, lorem nec.",
      delay: 500,
    },
  ];
  return (
    <div className="pricing">
      <h2 className="pricing__title">Pricing</h2>
      <div className="pricing__content">
        {pricingItems.map((item) => (
          <Zoom key={item.package} className="pricing__item" delay={item.delay}>
            <div>
              <span className="pricing__value">${item.value}</span>
              <span className="pricing__package">{item.package}</span>
              <p className="pricing__description">{item.description}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
