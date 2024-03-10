import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Bharatai = () => {
  const footerRef = useRef();
  const speakerData = [
    // {
    //   title: "Dr Manohar",
    //   body: "Professor at IIIT Delhi",
    //   image: "/manohar.png",
    //   alt: "jaswinderchadha",
    // },
    {
      title: "Mr. Soma Dhaval",
      body: "Director, ML @ Wadhwani AI",
      image: "/soma.png",
      alt: "jaswinderchadha",
    },
    {
      title: "Mr. Mihir Kulkarni",
      body: "ML Engineer, Wadhwani AI",
      image: "/mihir.png",
      alt: "jaswinderchadha",
    },
    {
      title: "Mr. Nilay Shrivastava",
      body: "AI Researcher @ Adobe Research",
      image: "/nilay.png",
      alt: "jaswinderchadha",
    },
    {
      title: "Mr. Sumit Bhatia",
      body: "Senior Machine Learning Scientist at the Media and Data Science Research Lab, Adobe Inc",
      image: "/sumit.png",
      alt: "jaswinderchadha",
    },
    {
      title: "Dr. Ankur Arora",
      body: "VP Data science/AI Garage at Mastercard",
      image: "/Ankur_Arora 1.png",
      alt: "ankurarora",
    },
    {
      title: "Dr. Manish Gupta",
      body: "Principal Director at Microsoft",
      image: "/Manish_Gupta 1.png",
      alt: "manishgupta",
    },
    {
      title: "Mr. Ishan Goel",
      body: "Associate Director of Data Science at VWO, Author of VWO Stats Blog",
      image: "/Ishan_Goel 1.png",
      alt: "Ishan Goel",
    },
    {
      title: "Mr. Shashi Jajware",
      body: "Principal Data Scientist, QuantumStreetAI",
      image: "/Shashi_jajwani 1.png",
      alt: "shashi jajware",
    },
    {
      title: "Prof. Avinash Kumar Agarwal",
      body: "SBI Endowed Chair Professor of IC Engines, Sustainable Fuels and Emission Control at IITKanpur",
      image: "/Avinash_kuamr 1.png",
      alt: "Avinash Kumar",
    },
    // {
    //   title: "Mr. Shailabh S",
    //   body: "LinkedIn Top Voice",
    //   image: "/shailabh.png",
    //   alt: "jaswinderchadha",
    // },
  ];

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollToFooter={scrollToFooter} />
      <PageHeader
        title="Bharat AI"
        subtitle="Fueling homegrown AI solutions to address and invest in India's future"
        description=""
        image="/bharatai.png"
      />
      <Speakers
        speakerData={speakerData}
        heading="SPEAKERS"
        countRelWidth={[4, 4, 3, 1]}
      />
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default Bharatai;
