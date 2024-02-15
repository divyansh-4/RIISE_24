// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for the footer styles
import footer_logo from '../components/footer_logo.svg';
import iglogo from './ig.jpg';
import twitlogo from './twott.jpg';
import fb from './fb.jpg';
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
            <a href="https://www.instagram.com/riise_iiitd/"><img src={iglogo} alt="Instagram" className="social-icon" /></a>
            <a href="https://twitter.com/IIITDelhi"><img src={twitlogo} alt="Twitter" className="social-icon" /></a>
            <a href="https://www.facebook.com/IIITDelhi/"><img src={fb} alt="Facebook" className="social-icon" /></a>
  
          </div>
        </div>

        {/* Horizontal line */}
        <hr />

        {/* Copyright text */}
      </div>
    </div>
  );
}

export default Footer;
