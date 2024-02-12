// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for the header styles

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="vertical-line"></div>
        <div className="heading-container" >
          <p className="header-heading">RIISE</p>
          <p className="subheading">IIIT Delhi’s Annual Research Expo </p>
          <p className="description">Research Innovation and Incubation Showcase Events (RIISE), 
                                    the annual<br></br> flagship event of IIIT Delhi, brings together the brightest 
                                    minds from <br></br> academia, industry, and government under a roof, building a 
                                    platform that <br></br>  transcends boundaries, transforming academic brilliance into 
                                    tangible impact.</p>
          <Link to="/register">
          <button className="register-button">Register Here</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
