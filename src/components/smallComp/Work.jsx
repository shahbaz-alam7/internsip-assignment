import React from "react";
import img from "../../assets/workArrow.png";
const Work = ({title}) => {
  return (
    <div className="work">
      <div className="brown"></div>
      <div className="desc">
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Work;
