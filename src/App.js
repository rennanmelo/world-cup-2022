import React from "react";
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
      <>
        <Featured />
      </>
      <>
        <EventInfo />
      </>
      <>
        <Highlights />
      </>
      <>
        <Pricing />
      </>
      <>
        <Location />
      </>
      <Footer />
    </div>
  );
};

export default App;
