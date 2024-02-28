// src/App.js
import React, { useRef } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import ThemePage from "./components/Themes";
import Navbar from "./components/Navbar";
import About from './components/About';

const App = () => {
  const footerRef = useRef();
  const scheduleRef = useRef();

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // const scrollToSchedule = () => {
  //   scheduleRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div>
      <Navbar scrollToFooter={scrollToFooter} scheduleRef={scheduleRef} />
      <Header />
      <About />
      <ThemePage />
      <Schedule scheduleRef={scheduleRef}/>
      <Footer footerRef={footerRef}/>
    </div>
  );
};

export default App;
