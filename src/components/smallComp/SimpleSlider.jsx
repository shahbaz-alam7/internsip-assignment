import Comp1 from "../../assets/Comp1.png";
import Comp2 from "../../assets/Comp2.png";
import Comp3 from "../../assets/Comp3.png";
import Comp4 from "../../assets/Comp4.png";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function App() {
  const renderSlides = () =>
    [Comp1, Comp2, Comp3, Comp4].map((pic) => (
      <div className="slider-box">
        <img src={pic} alt="" />
      </div>
    ));

  return (
    <div className="App">
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        // autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
