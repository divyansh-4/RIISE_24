import React from "react";
import "./Themes.css";
import image1 from "./Design for india.png";
import image2 from "./Robotics and space technology.png";
import image3 from "./Bridging Theory and Practice.png";
import image4 from "./Computational Gastronomy.png";
import image5 from "./Sustainable Mobility.png";
import image6 from "./5G-6G.png";
import image7 from "./Advanced Multicore System.png";
import image8 from "./healthcare_card.png"
import Card from "../containers/Card";
import RowContainer from "../containers/RowContainer";
import { HashRouter as Router, Link } from "react-router-dom";
import { HashRouter, Routes, Route } from 'react-router-dom';


const ThemePage = () => {
  return (
    <div className="theme-container">
      <h2 className="theme-heading">THEME</h2>
      <h1 className="section-heading">BUILD FOR INDIA</h1>
      <RowContainer scroll={false} speed={7}>
        <Link to="/healthcare">
          <Card
            title={<h2>Healthcare</h2>}
            body="Leveraging technology and tools to build accessible and affordable healthcare"
            image={image8}
            alt="India"
          />
        </Link>
        <Link to="/designforindia">
        <Card
          title={<h2>Design for India</h2>}
          body="Human Centered solutions for India's unique challenges"
          image={image1}
          alt="India"
        />
        </Link>
        <Link to="/roboticsandspace">
        <Card 
          title={<h2>Robotics and Space Tech</h2>}
          body="Automating crucial tasks and unlocking space explorations"
          image={image2}
          alt="India"
        />
        </Link>
        <Link to="/bridgingthoeryandpractice">
        <Card
          title={<h2>Bridging theory and practice</h2>}
          body="Building and developing a strong foundation for innovation"
          image={image3}
          alt="India"
        />
        </Link>
        <Link to="/computationalgastronomy">
        <Card
          title={<h2>Computational gastronomy</h2>}
          body="Exploring the intersection of food, technology and culture"
          image={image4}
          alt="India"
        />
        </Link>
        <Link to="/sustainablemobility">
        <Card
          title={<h2>Sustainable mobility</h2>}
          body="Building Green, Accesible and Inclusive mobility"
          image={image5}
          alt="India"
        />
        </Link>
        <Link to="/5G-6G">
        <Card
          title={<h2>5G/6G </h2>}
          body="Powering India's Digital transformation on web connectivity"
          image={image6}
          alt="India"
        />
        </Link>
        <Link to="/advancemulticoresystems">
        <Card
          title={<h2>Advanced multicore systems</h2>}
          body="Building indigineous high-performance computing platforms"
          image={image7}
          alt="India"
        />
        </Link>
      </RowContainer>
    </div>
  );
};

export default ThemePage;
