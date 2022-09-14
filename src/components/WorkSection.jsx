import React from "react";
import Work from "./smallComp/Work";

const WorkSection = () => {
  return (
    <div className="work-section">
      <h1>Our Work</h1>
      <div className="work-container">
        <Work title="Project 1" />
        <Work title="Project 2" />
        <Work title="Project 3" />
      </div>
      <button>View More</button>
    </div>
  );
};

export default WorkSection;
