import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Computationalgastronomy = () => {
    const footerRef = useRef();
    const scheduleRef = useRef();

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Navbar scrollToFooter={scrollToFooter} scheduleRef={scheduleRef} />
            <PageHeader
                title="Computational Gastronomy"
                subtitle="Build for India"
                description="Research Innovation and Incubation Showcase Events (RIISE), 
                the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, 
                industry, and government under a roof, building a platform that transcends boundaries, 
                transforming academic brilliance into tangible impact."
                image="/Computationalgastronomy.png"
            />
            <Speakers />
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Computationalgastronomy;
