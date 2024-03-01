// src/components/Navbar.js

import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for the navbar styles
import LogoSvg from "../components/nav_logo.svg"; // Import your SVG logo

const Navbar = ({scrollToSchedule, scrollToFooter , scrollToKeynote }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={LogoSvg} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="#" className="navbar-button" onClick={scrollToSchedule}>
            Schedule
          </Link>
          <Link to="#" className="navbar-button" onClick={scrollToKeynote}>
            Speakers
          </Link>
          {/* <Link to="#" className="navbar-button" onClick={handleAboutClick}>
            About Us
          </Link> */}
          <Link to="#" className="navbar-button" onClick={scrollToFooter}>
            Contact Us
          </Link>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSd9CcVMj2jj9REtWkVmSXNwv6zVc2sw4DLEZGzZstuJQtEKjw/viewform?usp=sf_link" className="navbar-register-button">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
