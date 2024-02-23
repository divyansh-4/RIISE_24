import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import Hackathon from "./components/Hackathon";
import "./Healthcare.css";

const HealthcarePage = () => {
  const footerRef = useRef();

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollToFooter={scrollToFooter} />
      <PageHeader
        title="Healthcare"
        subtitle="Build for India"
        description="Research Innovation and Incubation Showcase Events (RIISE), the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, industry, and government under a roof, building a platform that transcends boundaries, transforming academic brilliance into tangible impact to leverage technology and tools to build accessible and affordable healthcare"
        image="/healthcare.png"
      />
      <Speakers />
      <Hackathon
        title="Localize and Extract Cancer Cells from Microscopic Images: A Medical Segmentation Problem"
        message="Prof. Anubha Gupta would like to thank SERB, Department of Science & Technology, Govt. of India for Grant no. SPF/2021/000209. Organizers would also like to thank the Centre of Excellence in Healthcare, IIIT-Delhi for the support to conduct this activity. "
        registerLink="https://docs.google.com/forms/d/e/1FAIpQLSfZaT76uqYmGERq3SvsYqRq8gpLFx_fxcLEt0nLSctei9KW-w/viewform"
        organisers={[
          {
            name: "Dr. Jaspreet Kaur",
            designation: "Centre of Excellence in Healthcare",
            image: "/drjaspreet.png",
          },
          {
            name: "Prof. Anubha Gupta",
            designation: "Centre of Excellence in Healthcare",
            image: "/profanubha.png",
          },
        ]}
      />
      <div className="healthcare-newbody">
        {/* <div className="healthcare-newbody-trans"></div> */}
        <div className="header">
          <h1>Timeline</h1>
        </div>
        <div className="divider"></div>
        <div className="paragraph">
          <h2 className="phase-heading">Phase 1: <span className="date-range">20th Feb, 2024 - March 10, 2024</span></h2>
          <p className="paragraph-content">1. Register for the hackathon.<br></br>
          2. Perform the segmentation and upload results by the team name at the leaderboard on the <a href="https://segpc-2021.grand-challenge.org/evaluation/challenge/leaderboard/">test data</a><br></br>
          3. Any team can upload the results at max 5 times on the leaderboard. (One can upload the results on the leaderboard by joining the page <a href="https://segpc-2021.grand-challenge.org/evaluation/challenge/leaderboard/">here</a>)<br></br>
          4. Upload the paper in the IEEE ISBI conference template provided as an attachment.<br></br>
          Link to the dataset: <a href="https://ieee-dataport.org/open-access/segpc-2021-segmentation-multiple-myeloma-plasma-cells-microscopic-images">here</a></p>
        </div>
        <div className="divider"></div>
        <div className="paragraph">
          <h2 className="phase-heading">Outcome</h2>
          <p className="paragraph-content">1. The papers will be reviewed and the results will be announced by March 12, 2024 for poster and paper presentation at RIISE 2024.<br></br>
          2. There would be cash awards for the top 3 teams (Rs, 15k for the top team, 10k for the first runner-up, and 5k for the 2nd runner-up).<br></br>
          3. Goodies for participating teams by the clubs...???<br></br></p>
        </div>
        <div className="divider"></div>
        <div className="paragraph">
          <h2 className="phase-heading">Phase 2: <span className="date-range">10th Feb, 2024</span></h2>
          <p className="paragraph-content">1. The improvements will be suggested by the audience and/or the experts during RIISE. The challenge will continue and the second phase results and updated papers are required to be submitted by April 10, 2024. <br></br>
          2. A small amount of new test data may also be released during this phase. The updated papers are also required to be submitted by this date.</p>
        </div>
        <div className="divider"></div>
        <div className="paragraph">
          <h2 className="phase-heading">Final Outcome</h2>
          <p className="paragraph-content">1. The organizers will publish a research journal paper with the top 3 to 5 teams (depending on the quality of the final works).<br></br>
          2. Another round of presentations will be conducted in the hybrid mode on April 20, 2024.</p>
        </div>
        <br></br>
      </div>
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default HealthcarePage;
