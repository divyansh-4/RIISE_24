import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";
import HealthcarePitch from "./components/healthcare/HealthcarePitch";
import OnCoSlice from "./components/healthcare/Oncoslice";
import HealthEquityIdeathon from "./components/healthcare/HealthEquityIdeathon";
import Hackathon from "./components/Hackathon";
import "./HealthcarePage.css";

const HealthcarePage = () => {
  const footerRef = useRef();

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
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
  return (
    <div>
      <Navbar scrollToFooter={scrollToFooter} />
      <PageHeader
        title="Healthcare"
        subtitle="Build for India"
        description="Research Innovation and Incubation Showcase Events (RIISE), the annual flagship event of IIIT Delhi, brings together the brightest minds from academia, industry, and government under a roof, building a platform that transcends boundaries, transforming academic brilliance into tangible impact to leverage technology and tools to build accessible and affordable healthcare"
        image="/healthcare.png"
      />
      <Speakers speakerData={keynoteData} heading="KEYNOTE TALK"/>
      <Speakers speakerData={speakerData} heading="SPEAKERS" countRelWidth={[4,4,3,1]}/>
     
      <div style={{ padding: "0 4rem" }}>
        <HealthcarePitch />
      </div>
      <OnCoSlice />
      <HealthEquityIdeathon/>
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default HealthcarePage;
// {/* <Hackathon
//         title="Localize and Extract Cancer Cells from Microscopic Images: A Medical Segmentation Problem"
//         message="Prof. Anubha Gupta would like to thank SERB, Department of Science & Technology, Govt. of India for Grant no. SPF/2021/000209. Organizers would also like to thank the Centre of Excellence in Healthcare, IIIT-Delhi for the support to conduct this activity. "
//         registerLink="https://docs.google.com/forms/d/e/1FAIpQLSfZaT76uqYmGERq3SvsYqRq8gpLFx_fxcLEt0nLSctei9KW-w/viewform"
//         organisers={[
//           {
//             name: "Dr. Jaspreet Kaur",
//             designation: "Centre of Excellence in Healthcare",
//             image: "/drjaspreet.png",
//           },
//           {
//             name: "Prof. Anubha Gupta",
//             designation: "Centre of Excellence in Healthcare",
//             image: "/profanubha.png",
//           },
//         ]}
//         timelineBlocks={[
//           {
//             heading: "Phase 1",
//             timerange: "20th Feb, 2024 - March 10, 2024",
//             body: (
//               <div className="healthcare-hackathon-timeline-block-container">
//                 <ol>
//                   <li>Register for the Hackathon</li>
//                   <li>
//                     Perform the segmentation and upload results by the team name
//                     at the leaderboard on the{" "}
//                     <a
//                       href="https://segpc-2021.grand-challenge.org/evaluation/final-test-phase/leaderboard/"
//                       target="_blank"
//                     >
//                       test data
//                     </a>{" "}
//                     (https://segpc-2021.grand-challenge.org/evaluation/final-test-phase/leaderboard/)
//                   </li>
//                   <li>
//                     Any team can upload the results at max 5 times. on the
//                     leaderboard. (One can upload the results on the leaderboard
//                     by joining the page{" "}
//                     <a
//                       href="https://segpc-2021.grand-challenge.org/evaluation/challenge/leaderboard/"
//                       target="_blank"
//                     >
//                       here
//                     </a>
//                     -https://segpc-2021.grand-challenge.org/evaluation/challenge/leaderboard/)
//                   </li>
//                   <li>
//                     Upload the paper in the IEEE ISBI conference template
//                     provided as an attachment.
//                   </li>
//                 </ol>
//                 <div className="healthcare-hackathon-dataset-text">
//                   Link to Dataset{" "}
//                   <a
//                     href="https://ieee-dataport.org/open-access/segpc-2021-segmentation-multiple-myeloma-plasma-cells-microscopic-images"
//                     target="_blank"
//                   >
//                     here
//                   </a>
//                 </div>
//               </div>
//             ),
//           },
//           {
//             heading: "Outcome",
//             body: (
//               <div className="healthcare-hackathon-timeline-block-container">
//                 <ol>
//                   <li>
//                     {" "}
//                     The papers will be reviewed and the results will be
//                     announced by March 12, 2024 for poster and paper
//                     presentation at RIISE 2024.
//                   </li>
//                   <li>
//                     There would be cash awards for the top 3 teams (Rs, 15k for
//                     the top team, 10k for the first runner-up, and 5k for the
//                     2nd runner-up).
//                   </li>
//                   <li>Goodies for participating teams by the clubs...???</li>
//                 </ol>
//               </div>
//             ),
//           },
//           {
//             heading: "Phase 2",
//             timerange: "10th Feb, 2024",
//             body: (
//               <div className="healthcare-hackathon-timeline-block-container">
//                 <ol>
//                   <li>
//                     The improvements will be suggested by the audience and/or
//                     the experts during RIISE. The challenge will continue and
//                     the second phase results and updated papers are required to
//                     be submitted by April 10, 2024.
//                   </li>
//                   <li>
//                     A small amount of new test data may also be released during
//                     this phase. The updated papers are also required to be
//                     submitted by this date.
//                   </li>
//                 </ol>
//               </div>
//             ),
//           },
//           {
//             heading: "Final Outcome",
//             body: (
//               <div className="healthcare-hackathon-timeline-block-container">
//                 <ol>
//                   <li>
//                     The organizers will publish a research journal paper with
//                     the top 3 to 5 teams (depending on the quality of the final
//                     works).
//                   </li>
//                   <li>
//                     Another round of presentations will be conducted in the
//                     hybrid mode on April 20, 2024.
//                   </li>
//                 </ol>
//               </div>
//             ),
//           },
//         ]}
//       /> */}