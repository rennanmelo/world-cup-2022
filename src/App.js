import React from "react";
import { Element } from "react-scroll";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import EventInfo from "./components/EventInfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="eventinfo">
        <EventInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
