import { SubTitle, MainTitle } from "../PageTitles";
import { InfoCard1, InfoCard2 } from "../InfoCards";
import { Link } from "react-router-dom";
import "./HealthEquityIdeathon.css";

const SpaceDivider = () => {
  return <div style={{ padding: "1rem" }} />;
};

const HealthEquityIdeathon = () => {
  return (
    <div className="healthequity-component">
      <SpaceDivider />
      <SpaceDivider />
      <SpaceDivider />
      <MainTitle>HEALTH EQUITY IDEATHON</MainTitle>
      <SubTitle>Empowering Healthcare Access for All!</SubTitle>
      <SpaceDivider />
      <SpaceDivider />
      <InfoCard2>
        Dear Researchers, Innovators, Entrepreneurs, and Problem Solvers,
        <br />
        <br />
        Today, we embark on a journey to revolutionize healthcare accessibility
        and affordability for all. At RIISE (Revolutionizing Innovation In
        Sustainable Endeavors), we believe that healthcare is a fundamental
        human right, yet millions suffer due to the financial burden imposed by
        healthcare spending. Oncology and chronic lifestyle-based diseases have
        emerged as leading causes, pushing countless individuals below the
        poverty line each year.
        <br />
        <br />
        It's time to change the narrative.
        <br />
        <br />
        Our Ideathon calls upon visionaries like you to unleash your creativity
        and expertise toward crafting innovative solutions. We seek
        transformative ideas addressing the core challenges of inaccurate or
        delayed diagnostics and limited access to quality healthcare. By
        harnessing the power of technology, collaboration, and ingenuity, we aim
        to make treatment and diagnosis more accessible and cost-effective for
        everyone.
      </InfoCard2>
      <SpaceDivider />
      <SpaceDivider />
      <div className="healthequity-about-wrapper">
        <InfoCard1 classname="healthequity-about-participate">
          <h3 className="healthequity-about-info-header">Why Participate?</h3>
          <div className="healthequity-about-participate-text">
            <div>
              Impact: Your idea could directly impact millions of lives,
              breaking the cycle of poverty caused by healthcare expenses.
            </div>
            <div>
              Recognition: Gain visibility for your innovation within the global
              community and among industry leaders.
            </div>
            <div>
              Prizes: The winning team will receive exclusive RIISE merchandise
              and exciting surprise prizes!
            </div>
            <div>
              Networking: Connect with like-minded individuals, potential
              collaborators, and mentors who share your passion for healthcare
              innovation
            </div>
          </div>
        </InfoCard1>
        <div>
          <h3>Application process:</h3>
          <li>
            Form a Team: Gather a diverse team of thinkers, doers, and dreamers.
            Collaboration fuels creativity!
          </li>
          <li>
            Brainstorm: Dive deep into the problem statement. Explore
            unconventional ideas and approaches.
          </li>
          <li>
            Develop Your Idea: Transform your vision into a tangible
            perspective. Leverage interdisciplinary domain knowledge to create
            an impactful notion in the healthcare domain.
          </li>
          <li>
            Submit Your Proposal: Complete the{" "}
            <Link
              to={
                "https://docs.google.com/forms/d/e/1FAIpQLSeZPf55TtGx8BbTKrtqoRAjGEKxU2TXQ7lb2rBESxiq9uolcw/viewform"
              }
              target="_blank"
            >
              Google Form
            </Link>{" "}
            by March 10th, 2024, to officially enter the competition.
          </li>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSeZPf55TtGx8BbTKrtqoRAjGEKxU2TXQ7lb2rBESxiq9uolcw/viewform"
            className="healthequity-register-btn"
            target="_blank"
          >
            Application Form
          </Link>
          <SpaceDivider />
          <InfoCard1 classname="healthequity-about-date-card">
            <h3 className="healthequity-about-info-header">Important Dates:</h3>
            <div>
              <span>Submission Deadline:</span>
              <span>March 12, 2024</span>
            </div>
            <div>
              <span>Presentation and Winner Announcement:</span>
              <span>March 15, 2024</span>
            </div>
          </InfoCard1>
        </div>
      </div>
      <SpaceDivider />
      <SpaceDivider />
    </div>
  );
};

export default HealthEquityIdeathon;
