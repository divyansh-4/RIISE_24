// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for the navbar styles
import LogoSvg from "../components/nav_logo.svg"; // Import your SVG logo

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={LogoSvg} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/schedule" className="navbar-button">
            Schedule
          </Link>
          <Link to="/speakers" className="navbar-button">
            Speakers
          </Link>
          <Link to="/gallery" className="navbar-button">
            Gallery
          </Link>
          <Link to="/about-us" className="navbar-button">
            About Us
          </Link>
          <Link to="/contact-us" className="navbar-button">
            Contact Us
          </Link>
          <Link to="/register" className="navbar-register-button">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
