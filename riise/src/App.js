// src/App.js
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import ThemePage from "./components/Themes";

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
