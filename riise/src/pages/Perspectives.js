import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

const Perspectives = () => {
    const footerRef = useRef();
    const speakerData = [
        {
          title: "Prof. Kanchana Mahadevan",
          body: "Dept. of Philosophy, University of Bombay",
          image: "/kanchana-mahadevan 1.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Prof. Babu Thaliath",
          body: "Center for German Studies, J.N.U.",
          image: "/bthaliath_0 1.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Dr. Arun Iyer ",
          body: "HSS,  IIT Bombay",
          image: "/avatar.jpeg",
          alt: "ARUN IYER",
        },
        {
          title: "Prof. Nirmala Narayan Chakraborty ",
          body: "Dept. of Philosophy, Rabindra INDIAi University, Kolkata",
          image: "/download 1.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Dr. Huzaifa Siddiqui",
          body: "Dept. of English, Ashoka University",
          image: "/photo 1.png",
          alt: "jaswinderchadha",
        },
        {
          title: "Prof. Saulius Genuisas",
          body: "Dept. of Philosophy, The Chinese University of Hong Kong, online presentation",
          image: "/0079c660-a533-4b4c-8859-e2d6be64e9a3-wpcf_220x330 1.png",
          alt: "jaswinderchadha",
        },
        {
            title: "Prof. Ananya Vajpeyi",
            body: "Center for the Study of Developing Societies, Delhi",
            image: "/1650523387_av banner 1.png",
            alt: "jaswinderchadha",
          },
          {
            title: "Dr. Meghant Sudan",
            body: "Dept. of Philosophy, Boise State University, U.S.A. online presentation",
            image: "/Sudan-upright-and-smiling 1.png",
            alt: "jaswinderchadha",
          },
          {
            title: "Dr. R. Krishnaswamy",
            body: "Center for Social and Political Research, Jindal Global University, co-organizer",
            image: "/R 1.png",
            alt: "jaswinderchadha",
          },
          {
            title: "Prof . Nishad Patnaik",
            body: "SSH, IIITD, co-organizer",
            image: "/nishad 1.png",
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
                title="Perspectives on time, Modernity and history"
                subtitle="Exploring the interplay of lived experience, clock time, and historical narratives affecting the modern world."
                description=""
                image="/history.png"
            />
      <Speakers speakerData={speakerData} heading="SPEAKERS" countRelWidth={[4,4,3,1]}/>
            <Footer footerRef={footerRef} />
        </div>
    );
};

export default Perspectives
    ;
