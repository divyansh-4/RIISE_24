import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Roboticsandspace = () => {
  const footerRef = useRef();
  const speakerData = [
    {
      title: "Prof. Puneet Singla",
      body: "Professor of Aerospace Engineering at Penn State University",
      image: "/puneet.png",
      alt: "jaswinderchadha",
    },
    {
      title: "Prof. S K Saha",
      body: "Professor, Dept. of Mech. Eng., IIT Delhi, and Project Director, IHFC (Tech. Innovation Hub of IIT Delhi)",
      image: "/saha.png",
      alt: "jaswinderchadha",
    },
  ];
  const keynoteData = [
    {
      title: "Tushar Jadhav",
      body: "Co-Founder at Manastu Space",
      image: "/tushar.png",
      alt: "jaswinderchadha",
    },
    {
      title: "Dr. Rajesh Kumar",
      body: "Robotics and AI Architect at Addverb | PhD in Robotics - IIT Delhi",
      image: "/rajeshk.png",
      alt: "jaswinderchadha",
    },
    {
      title: "Prof. Soumya Ranjan Sahoo",
      body: "Associate Professor, Department of Electrical Engineering, IIT Kanpur",
      image: "/saumya.png",
      alt: "jaswinderchadha",
    },
  ];

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollToFooter={scrollToFooter} />
      <PageHeader
        title="Robotics and Space Technology "
        subtitle="Automating crucial tasks and unlocking space explorations"
        description=""
        image="/roboticswall.png"
      />
      <Speakers
        speakerData={speakerData}
        heading="SPEAKERS"
        countRelWidth={[4, 4, 3, 1]}
      />
      <Speakers speakerData={keynoteData} heading="PANELISTS" />
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default Roboticsandspace;
