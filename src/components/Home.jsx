import React from "react";
import pic from "../assets/home-pic.png";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1 className="heading">
          Let's create <br /> something great <br /> together
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          sed corporis quia! At amet mollitia, aliquid in doloremque dolorem
          iure!
        </p>
        <button>Let's Talk</button>
      </div>
      <div className="img-box">
        <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default Home;
