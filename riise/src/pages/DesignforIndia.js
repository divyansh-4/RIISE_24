import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";
import "./HealthcarePage.css";

const DesignforIndia = () => {
    const footerRef = useRef();
      const keynoteData = [
        {
          title: "Prof. Pradeep Yammiyavar",
          body: "Design Group, Dept of MMAE, IIT Dharwad",
          image: "/image 41.png",
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
                title="Design For India"
                subtitle="Human-centered solutions for India's unique challenges"
                description=""
                image="/designforIndian.png"
            />
            <Speakers speakerData={keynoteData} heading="SPEAKER"/>

            <Footer footerRef={footerRef} />
        </div>
    );
};

export default DesignforIndia;
