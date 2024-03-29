import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Sustainablemobility= () => {
    const footerRef = useRef();

    const speakerData = [
        {
            title: "IAS Shahzad Alam",
            body: "Special Commisioner Transport, Delhi Government",
            image: "/shahzad.png",
            alt: "ShahzadAlam",
        },
    ];
    
    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Navbar scrollToFooter={scrollToFooter} />
            <PageHeader
                title="Sustainable Mobility"
                subtitle="Building Green, Accessible and Inclusive mobility solutions"
                description=""
                image="/Sustainablemobility.png"
            />
            <Speakers speakerData={speakerData} heading="SPEAKERS" />
      
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Sustainablemobility;
