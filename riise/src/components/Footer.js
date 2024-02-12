// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for the footer styles
import footer_logo from '../components/footer_logo.svg';
// src/components/Footer.js

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-inner">
          {/* Left side: SVG logo and text */}
          <div className="left-content">
            <img src={footer_logo} alt="Logo" />
            <div className="text-container">
              <div className="heading">RIISE</div>
              <div className="subheading">IIIT Delhi’s Annual Research Expo </div>
            </div>
          </div>

          {/* Right side: Social media logos */}
          <div className="right-content">
            {/* Add your social media logos here */}
            <img src="/path/to/instagram.svg" alt="Instagram" />
            <img src="/path/to/twitter.svg" alt="Twitter" />
            <img src="/path/to/facebook.svg" alt="Facebook" />
          </div>
        </div>

        {/* Horizontal line */}
        <hr />

        {/* Copyright text */}
        <p className="copyright-text">© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
