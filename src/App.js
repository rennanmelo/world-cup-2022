import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";

const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
      </>
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
