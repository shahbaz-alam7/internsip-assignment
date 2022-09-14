import React from "react";
import logo from "../assets/Logo2.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import facebook from "../assets/Facebook.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="box-1">
        <h1>
          Let's work <br /> together
        </h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
          <button>Let's talk</button>
        </div>
      </div>
      <div className="box-2">
        <div className="social-media">
          <img id="logo" src={logo} alt="logo" />
          <div className="allmedia">
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className="address">
          <h5>Address</h5>
          <p>0199 Taylor Park</p>
          <p>North Dakota, USA</p>
        </div>
        <div className="callUs">
          <h5>Call us on</h5>
          <p>+19873 42023</p>
          <p>info@logipsum.com</p>
        </div>
        <div className="policy">
          <h5>Our Policies</h5>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Refund Policy</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-note">
        <p>Copyright &copy; Webalar. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
