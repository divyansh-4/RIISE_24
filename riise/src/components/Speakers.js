import React from "react";
import "./Themes.css";
import image1 from "./Design for india.png";
import image2 from "./Robotics and space technology.png";
import image3 from "./Bridging Theory and Practice.png";
import image4 from "./Computational Gastronomy.png";
import image5 from "./Sustainable Mobility.png";
import image6 from "./5G-6G.png";
import image7 from "./Advanced Multicore System.png";
import Card from "../containers/Card";
import RowContainer from "../containers/RowContainer";

const Speakers = () => {
  return (
    <div className="theme-container">
      <h2 className="theme-heading">EVENTS</h2>
      <h1 className="section-heading">SPEAKERS</h1>
      <RowContainer scroll={true} speed={7}>
        <Card
          title="Design for India"
          body="orem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet"
          image={image1}
          alt="India"
        />
        <Card
          title="Robotics and space technology"
          body="orem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet"
          image={image2}
          alt="India"
        />
        <Card
          title="Bridging theory and practice"
          body="orem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet"
          image={image3}
          alt="India"
        />
        <Card
          title="Computational gastronomy"
          body="orem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet"
          image={image4}
          alt="India"
        />
        <Card
          title="Sustainable mobility"
          body="orem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet"
          image={image5}
          alt="India"
        />
        <Card
          title="5G/6G "
          body="orem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet"
          image={image6}
          alt="India"
        />
        <Card
          title="Advanced multicore systems"
          body="orem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet"
          image={image7}
          alt="India"
        />
      </RowContainer>
    </div>
  );
};

export default Speakers;
