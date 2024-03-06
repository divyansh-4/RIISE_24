import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Isac = () => {
    const footerRef = useRef();
    const speakerData = [
        {
          title: " Prof. Sumit Darak",
          body: "Assoc. Prof. and Dean of Academic Affairs at IIIT Delhi",
          image: "/image 42.png",
            alt: "jaswinderchadha",
      },
      {
        title: "Dr. Shobha Sundar",
        body: "Assoc. Professor, ECE Department and Dean of Student Affairs, IIIT Delhi",
        image: "/image 47.png",
        alt: "jaswinderchadha",
      },
        // {
        //   title: "Dr. Neelesh Mehta",
        //   body: "Chair, ECE Department, IISc Bengaluru",
        //   image: "/image 43.png",
        //   alt: "jaswinderchadha",
        // },
        // {
        //   title: "Dr. Swades De",
        //   body: "Professor, Department of Electrical Engineering, IIT Delhi",
        //   image: "/image 44.png",
        //   alt: "jaswinderchadha",
        // },
        // {
        //   title: "Dr. Aditya Jagannatham",
        //   body: "Professor, Department of Electrical Engineering, IIT Kanpur",
        //   image: "/image 45.png",
        //   alt: "jaswinderchadha",
        // },
        // {
        //   title: "Dr. A. Anil Kumar",
        //   body: "Senior Scientist at Tata Consultancy Services",
        //   image: "/image 48.png",
        //   alt: "jaswinderchadha",
        // },
        // Add more keynote speakers as needed
      ];

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div>
            <Navbar scrollToFooter={scrollToFooter} />
            <PageHeader
                title="Integrated Sensing and Communication"
                subtitle="Tackling  spectral congestion for efficient next-gen networks"
                description=""
                image="/isac.png"
            />
           <Speakers speakerData={speakerData} heading="SPEAKERS" countRelWidth={[4,4,3,1]}/>
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Isac
    ;
