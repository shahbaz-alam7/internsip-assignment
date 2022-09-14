import React from "react";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo"  />
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink  to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <button>
                <NavLink to="/contact">Get in Touch</NavLink>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
