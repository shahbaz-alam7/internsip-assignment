import React from "react";
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import Line from "../assets/Line.png";
import design from "../assets/Design.png"
import development from "../assets/Development.png"
import marketing from "../assets/Marketing.png"
import SimpleSlider from "./smallComp/SimpleSlider";
import Services from "./smallComp/Services";
const Companies = () => {
  return (
    <div className="company-container">
      <div className="trus-comp">
        <div className="header">
          <div className="box"></div>
          <h1>Trusted Companies</h1>
          <div className="box"></div>
        </div>
        <SimpleSlider />
      </div>
      <div className="partition"></div>
      <div className="services-container">
        <div className="data">
          <h1>
            Our Services <br /> that we provide
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ipsam repellendus porro, natus repudiandae veritatis
            commodi repellat laudantium. Odit alias aperiam ea adipisci vel.
            Excepturi doloremque velit aliquam quidem eveniet.ea adipisci vel.
            Excepturi doloremque velit aliquam quidem eveniet.
          </p>
        </div>
        <div className="services">
         <Services title={design} img={img1}/>
          <img id="line" src={Line} alt="" />
          <Services title={development} img={img2}/>
          <img id="line" src={Line} alt="" />
          <Services title={marketing} img={img3}/>
        </div>
      </div>
    </div>
  );
};

export default Companies;
