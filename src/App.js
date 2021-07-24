import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import EventInfo from "./components/EventInfo";
import Highlights from "./components/Highlights";

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
      <div
        id="pricing"
        style={{ backgroundColor: "orange", height: "500px" }}
      ></div>
      <div
        id="location"
        style={{ backgroundColor: "pink", height: "500px" }}
      ></div>
      <Footer />
    </div>
  );
};

export default App;
