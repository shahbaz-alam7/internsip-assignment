import React from "react";
import Companies from "./Companies";
import Footer from "./Footer";
import Home from "./Home";
import WorkSection from "./WorkSection";
const Main = () => {
  return (
    <div className="container">
      <Home />
      <Companies />
      <WorkSection />
      <Footer />
    </div>
  );
};

export default Main;
