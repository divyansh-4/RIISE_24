import React from 'react';
import Slider from "react-slick";
import './Themes.css';
import image1 from './Design for india.png';
import image2 from './Robotics and space technology.png';
import image3 from './Bridging Theory and Practice.png';
import image4 from './Computational Gastronomy.png';
import image5 from './Sustainable Mobility.png';
import image6 from './5G-6G.png';
import image7 from './Advanced Multicore System.png';

const ThemePage = () => {
    return (
        <div className="container">
            <h2 className="theme-heading">THEME</h2>
            <h1 className="section-heading">BUILD FOR BHARAT</h1>
            <div className="card-row">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Design for India</h5>
                    </div>
                    <div className="card-body">
                        <img src={image1} alt="Design for India" />
                        <p>lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Robotics and Space Technology</h5>
                    </div>
                    <div className="card-body">
                        <img src={image2} alt="Robotics and Space Technology" />
                        <p>lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Bridging Theory and Practice</h5>
                    </div>
                    <div className="card-body">
                        <img src={image3} alt="Bridging Theory and Practice" />
                        <p>lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Computational Gastronomy</h5>
                    </div>
                    <div className="card-body">
                        <img src={image4} alt="Computational Gastronomy" />
                        <p>lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Sustainable Mobility</h5>
                    </div>
                    <div className="card-body">
                        <img src={image5} alt="Sustainable Mobility" />
                        <p>lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">5G/6G</h5>
                    </div>
                    <div className="card-body">
                        <img src={image6} alt="5G/6G" />
                        <p>lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Advanced Multicore System</h5>
                    </div>
                    <div className="card-body">
                        <img src={image7} alt="Advanced Multicore System" />
                        <p>lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet lorem ipsum dolor imet</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThemePage;