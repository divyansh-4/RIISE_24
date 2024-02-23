// src/App.js
import React, { useRef } from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import ThemePage from "./components/Themes";

const App = () => {
  const footerRef = useRef();

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Navbar scrollToFooter={scrollToFooter}/>
      <Header />
      <ThemePage />
      <Schedule />
      <Footer footerRef={footerRef}/>
    </div>
  );
};

export default App;
