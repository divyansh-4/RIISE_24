// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for the footer styles
import footer_logo from '../components/footer_logo.svg';
import iglogo from './ig.jpeg';
import twitlogo from './X.jpeg';
import fb from './fb.jpg';
import linkedin from './linkedin.png';
import mail from "./mail.jpg"
// src/components/Footer.js

const Footer = ({ footerRef }) => {
  return (
    <div ref={footerRef} id="footer" className="footer">
    <div className="footer">
      <div className="footer-content">
        <div className="footer-inner">
          {/* Left side: SVG logo and text */}
          <div className="left-content">
            <img src={footer_logo} alt="Logo" />
            <div className="text-container">
              {/* <div>RIISE</div> */}
              <div className="heading">IIIT Delhi’s Annual<br></br> Research Expo </div>
            </div>
          </div>

          {/* Right side: Social media logos */}
          <div className="right-content">
            <a href="mailto:riise@iiitd.ac.in"><img src={mail} alt="Mail" className="social-icon" /></a>
            <a href="https://www.instagram.com/riise_iiitd/"><img src={iglogo} alt="Instagram" className="social-icon" /></a>
            <a href="https://twitter.com/IIITDelhi"><img src={twitlogo} alt="Twitter" className="social-icon" /></a>
            <a href="https://www.facebook.com/IIITDelhi/"><img src={fb} alt="Facebook" className="social-icon" /></a>
            <a href="https://www.linkedin.com/school/iiit-delhi/"><img src={linkedin} alt="Facebook" className="social-icon" /></a>
  
          </div>
        </div>
        <div className="Address">
          Okhla Industrial Estate, Phase III, near Govind Puri Metro Station, New Delhi, Delhi 110020.
          <a className="map" href="https://maps.app.goo.gl/dGUYg2STxucfEkaK6">Open in Maps</a>
          </div>

        {/* Horizontal line */}
        <hr />

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-text-left">
            © 2024 RIISE IIITD. All rights reserved.
            </div>
          </div>
          {/* <div className="footer-bottom-right">
            <div className="footer-text-right">
              <a href="#" >Privacy Policy</a>
              <a href="#" >Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
