import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Computationalgastronomy = () => {
    const footerRef = useRef();
    const speakerData = [
        {
          title: "Manu Bajaj",
          body: "Founder and MD NuTaste Group",
          image: "/manu.png",
          alt: "jaswinderchadha",
        },
        
        // Add more keynote speakers as needed
      ];
     
    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Navbar scrollToFooter={scrollToFooter} />
            <PageHeader
                title="Computational Gastronomy"
                subtitle="Exploring the intersection of food, technology, and culture"
                description=""
                image="/Computationalgastronomy.png"
            />
             <Speakers speakerData={speakerData} heading="SPEAKERS" />
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Computationalgastronomy;
