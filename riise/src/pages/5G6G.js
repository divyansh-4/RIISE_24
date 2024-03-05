import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const _5G6G = () => {
    const footerRef = useRef();
    const speakerData = [
        {
          title: "Mr. Bhuvnesh",
          body: "Senior VP, HFCL",
          image: "/bhuvnesh.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Mr. Manoj Dwivedi",
          body: " Product Development Manager, BEL",
          image: "/manoj.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Mr. Anindya Saha ",
          body: "Tejas networks",
          image: "/anindya.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Ms. Laxmi Mukund ",
          body: "CISCO",
          image: "/laxmi.png",
          alt: "jaswinderchadha",
        },
        // Add more keynote speakers as needed
      ];
      const keynoteData = [
        {
          title: "Mr. Sudipta Bhaumik",
          body: "STL",
          image: "/sudipta.png",
          alt: "jaswinderchadha",
        },
        {
            title: "Mr. Rakesh Kapoor ",
            body: "TSDSI",
            image: "/rakeshk.png",
            alt: "jaswinderchadha",
          },
          {
            title: "Mr. Rakesh Desai",
            body: "TEC Govt of India",
            image: "/rakeshd.png",
            alt: "jaswinderchadha",
          },
          {
            title: "Mr. Jishnu",
            body: "Tejas Networks",
            image: "/jishnu.png",
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
                title="5G/6G"
                subtitle="Build for India"
                description="Research Innovation and Incubation Showcase Events (RIISE), 
                the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, 
                industry, and government under a roof, building a platform that transcends boundaries, 
                transforming academic brilliance into tangible impact."
                image="/5G6G.png"
            />
            
            <Speakers speakerData={speakerData} heading="SPEAKERS" countRelWidth={[4,4,3,1]}/>
            <Speakers speakerData={keynoteData} heading="PANELISTS"/>
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default _5G6G;
