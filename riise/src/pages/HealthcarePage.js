import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import Hackathon from "./components/Hackathon";
import "./Healthcare.css";

const HealthcarePage = () => {
  const footerRef = useRef();

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollToFooter={scrollToFooter} />
      <PageHeader
        title="Healthcare"
        subtitle="Build for India"
        description="Research Innovation and Incubation Showcase Events (RIISE), the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, industry, and government under a roof, building a platform that transcends boundaries, transforming academic brilliance into tangible impact to leverage technology and tools to build accessible and affordable healthcare"
        image="/healthcare.png"
      />
      <Speakers />
      <Hackathon
        title="Localize and Extract Cancer Cells from Microscopic Images: A Medical Segmentation Problem"
        message="Prof. Anubha Gupta would like to thank SERB, Department of Science & Technology, Govt. of India for Grant no. SPF/2021/000209. Organizers would also like to thank the Centre of Excellence in Healthcare, IIIT-Delhi for the support to conduct this activity. "
        registerLink="#"
        organisers={[
          {
            name: "Dr. Jaspreet Kaur",
            designation: "Centre of Excellence in Healthcare",
            image: "/drjaspreet.png",
          },
          {
            name: "Prof. Anubha Gupta",
            designation: "Centre of Excellence in Healthcare",
            image: "/profanubha.png",
          },
        ]}
      />
      <div className="healthcare-newbody">
        <div className="healthcare-newbody-trans"></div>
      </div>
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default HealthcarePage;
