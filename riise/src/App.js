// src/App.js
import "./main.css";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add BrowserRouter for routing
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import ThemePage from "./components/Themes";
// import HealthcarePage from "./pages/HealthcarePage";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ThemePage />
      <Schedule />
      <Footer />
    </div>
  );
};

export default App;
