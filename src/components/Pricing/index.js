import React from "react";
import "./index.css";

const Pricing = () => {
  const pricingItems = [
    {
      value: 100,
      package: "balcony",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique, lorem nec malesuada aliquam.",
    },
    {
      value: 150,
      package: "medium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique, lorem nec malesuada aliquam, aslco soplasds quedim.",
    },
    {
      value: 300,
      package: "star",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique, lorem nec.",
    },
  ];
  return (
    <div className="pricing">
      <h2 className="pricing__title">Pricing</h2>
      <div className="pricing__content">
        {pricingItems.map((item) => (
          <div className="pricing__item" key={item.package}>
            <span className="pricing__value">${item.value}</span>
            <span className="pricing__package">{item.package}</span>
            <p className="pricing__description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
