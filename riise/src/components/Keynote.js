import React from "react";
import "./Keynote.css";
import image1 from "./Design for india.png";
import image2 from "./Robotics and space technology.png";
import image3 from "./Bridging Theory and Practice.png";
import image4 from "./Computational Gastronomy.png";
import image5 from "./Sustainable Mobility.png";
import image6 from "./5G-6G.png";
import image7 from "./Advanced Multicore System.png";
import image8 from "./healthcare_card.png";
import Card from "../containers/Card";
import RowOverflow from "../containers/RowOverflow";
import { Link } from "react-router-dom";

const Keynote = () => {
    return (
        <div className="keynote-container">
            <h2 className="theme-heading">EVENTS</h2>
            <h1 className="section-heading">KEYNOTE SPEAKERS</h1>
            <div className="keynote-card-row-container">
                <RowOverflow count={4}>
                        <Card
                            title="Healthcare"
                            body="Leveraging technology and tools to build accessible and affordable healthcare"
                            image={image8}
                            alt="India"
                        />
                </RowOverflow>
            </div>
        </div>
    );
};

export default Keynote;
