import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Bridgingthoeryandpractice = () => {
    const footerRef = useRef();
    const speakerData = [
        {
          title: "Jaswinder Chadha",
          body: "President & CEO @ Axtria | AI Software for Life Science Industry",
          image: "/mrjaswinder.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Jaswinder Chadha",
          body: "President & CEO @ Axtria | AI Software for Life Science Industry",
          image: "/mrjaswinder.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Jaswinder Chadha",
          body: "President & CEO @ Axtria | AI Software for Life Science Industry",
          image: "/mrjaswinder.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Jaswinder Chadha",
          body: "President & CEO @ Axtria | AI Software for Life Science Industry",
          image: "/mrjaswinder.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Jaswinder Chadha",
          body: "President & CEO @ Axtria | AI Software for Life Science Industry",
          image: "/mrjaswinder.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Jaswinder Chadha",
          body: "President & CEO @ Axtria | AI Software for Life Science Industry",
          image: "/mrjaswinder.png",
          alt: "jaswinderchadha",
        },
        // Add more keynote speakers as needed
      ];
      const keynoteData = [
        {
          title: "Jaswinder Chadha",
          body: "President & CEO @ Axtria | AI Software for Life Science Industry",
          image: "/mrjaswinder.png",
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
                title="Bridging thoery and Practice"
                subtitle="Build for India"
                description="Research Innovation and Incubation Showcase Events (RIISE), 
                the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, 
                industry, and government under a roof, building a platform that transcends boundaries, 
                transforming academic brilliance into tangible impact."
                image="/Bridgingthoeryandpractice.png"
            />
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Bridgingthoeryandpractice;
