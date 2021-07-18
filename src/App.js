import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div
        id="featured"
        style={{ backgroundColor: "blue", height: "500px" }}
      ></div>
      <div
        id="eventinfo"
        style={{ backgroundColor: "red", height: "500px" }}
      ></div>
      <div
        id="highlights"
        style={{ backgroundColor: "green", height: "500px" }}
      ></div>
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
