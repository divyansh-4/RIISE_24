import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Bharatai = () => {
    const footerRef = useRef();


    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Navbar scrollToFooter={scrollToFooter} />
            <PageHeader
                title="Bharat AI"
                subtitle="Build for India"
                description="Research Innovation and Incubation Showcase Events (RIISE), 
                the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, 
                industry, and government under a roof, building a platform that transcends boundaries, 
                transforming academic brilliance into tangible impact"
                image="/bharatai.png"
            />
            <Speakers />
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Bharatai
    ;