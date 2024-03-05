import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Bharatai = () => {
    const footerRef = useRef();
    const speakerData = [
        {
          title: "Dr Manohar",
          body: "Professor at IIIT Delhi",
          image: "/manohar.png",
          alt: "jaswinderchadha",
        },
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
          title: "Mr. Shailabh S",
          body: "LinkedIn Top Voice",
          image: "/shailabh.png",
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
                title="Bharat AI"
                subtitle="Build for India"
                description="Research Innovation and Incubation Showcase Events (RIISE), 
                the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, 
                industry, and government under a roof, building a platform that transcends boundaries, 
                transforming academic brilliance into tangible impact"
                image="/bharatai.png"
            />
            <Speakers speakerData={speakerData} heading="SPEAKERS" countRelWidth={[4,4,3,1]}/>
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Bharatai
    ;
