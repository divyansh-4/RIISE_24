// src/App.js
import React, { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import ThemePage from "./components/Themes";
import Navbar from "./components/Navbar-home";
import About from "./components/About";
import Keynote from "./components/Keynote";

const App = () => {
  const footerRef = useRef();
  const ScheduleRef = useRef();
  // const AboutRef = useRef();
  const KeynoteRef = useRef();
  //

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSchedule = () => {
    ScheduleRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToKeynote = () => {
    KeynoteRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const keynoteData = [
    {
      title: "Jaswinder Chadha",
      body: "President & CEO @ Axtria | AI Software for Life Science Industry",
      image: "/mrjaswinder.png",
      alt: "jaswinderchadha",
    },
    // Add more keynote speakers as needed
  ];
  return (
    <div>
      <Navbar scrollToSchedule={scrollToSchedule} scrollToFooter={scrollToFooter} scrollToKeynote={scrollToKeynote}/>
      <Header />
      <About />
      <ThemePage />
      <Keynote KeynoteRef={KeynoteRef} keynoteData={keynoteData} />
      <Schedule ScheduleRef={ScheduleRef}/>
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default App;
