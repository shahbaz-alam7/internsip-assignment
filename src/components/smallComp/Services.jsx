import React from "react";

const Services = ({img,title}) => {
  return (
    <div className="child">
      <img src={img} alt="s" />
      <br />
      <img src={title} alt="s" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore
        expedita repellendus voluptate delectus enim!
      </p>
    </div>
  );
};

export default Services;
