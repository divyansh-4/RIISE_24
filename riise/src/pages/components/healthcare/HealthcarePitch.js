import { SubTitle, MainTitle } from "../PageTitles";
import { InfoCard1, InfoCard2 } from "../InfoCards";
import "./HealthcarePitch.css";

const SpaceDivider = () => {
  return <div style={{ padding: "1rem" }} />;
};

const HealthcarePitch = () => {
  return (
    <div className="healthcare-pitch-body">
      <SubTitle>BUILD FOR INDIA</SubTitle>
      <MainTitle>EVENTS</MainTitle>
      <SpaceDivider />
      <MainTitle>HEALTHTECH INNOVATION PITCH</MainTitle>
      <SpaceDivider />

      <div className="healthcare-pitch-about-wrapper">
        <span className="healthcare-pitch-about">
          HealthTech innovations refer to advancements and innovations in
          technology that are aimed at improving healthcare delivery, diagnosis,
          treatment, monitoring, and overall patient care. HealthTech
          innovations hold immense promise for addressing India's healthcare
          challenges and transforming the delivery and cost of healthcare
          services nationwide. By harnessing the power of technology,
          collaboration, and innovation, India can build a more resilient,
          inclusive, and sustainable healthcare ecosystem that meets the needs
          of its diverse population.
          <br />
          <br />
          Do you have a groundbreaking HealthTech solution that could transform
          patient care and improve outcomes? If you are a visionary student,
          researcher, or entrepreneur who is passionate about leveraging
          technology to revolutionize healthcare, here is a wonderful
          opportunity!
          <br />
          <br />
          We're thrilled to announce our upcoming HealthTech Innovation Pitch
          Competition, where the brightest minds in academia and industry will
          showcase their cutting-edge solutions and compete for recognition,
          mentorship, and funding opportunities. IIIT Delhi has state-of-the-art
          incubation centers that are supported by its research capabilities.
        </span>
        <div
          className="healthcare-pitch-about-sidebar"
          style={{ backgroundImage: "url('/healthcare_pitch_sidebar.png')" }}
        />
      </div>
      <SpaceDivider />
      <SpaceDivider />

      <InfoCard1>
        <MainTitle> Why Participate</MainTitle>
        <ul className="healthcare-pitch-participate-ul">
          <li>Gain exposure for your HealthTech startup or innovation.</li>
          <li>
            Pitch to a panel of industry experts, investors, and potential
            partners.
          </li>
          <li>
            Receive valuable feedback and insights to develop or refine your
            product/business model.
          </li>
          <li>
            Compete for cash prizes, mentorship of experts, and
            incubator/accelerator opportunities.
          </li>
          <li>
            Network with fellow innovators, thought leaders, and stakeholders in
            the healthcare ecosystem.
          </li>
        </ul>
      </InfoCard1>

      <SpaceDivider />
      <SpaceDivider />

      <MainTitle>Competition Categories</MainTitle>
      <SpaceDivider />

      <div className="healthcare-pitch-categories">
        <InfoCard2 classname="healthcare-pitch-category-box">
          <div className="healthcare-pitch-category-box-title">
            Theme 1: HealthTech Innovations for Incubation
          </div>
          <SpaceDivider />
          <div className="healthcare-pitch-category-box-content">
            If you have a validated prototype that can revolutionize the
            industry, and your dream is to turn your innovation into a
            successful HealthTech startup, look no further!
            <br />
            <br />
            Here, aspiring entrepreneurs will have an opportunity to embark on a
            transformative journey to bring their HealthTech innovations to
            life. You will get access to a dynamic environment for inspiration,
            education, and empowerment that will help you to navigate the path
            from ideation to incubation. Showcase your HealthTech innovation to
            a panel of judges for a chance to win funding, incubator/accelerator
            opportunities, and other resources to accelerate your startup
            growth.
          </div>
        </InfoCard2>
        <InfoCard2 classname="healthcare-pitch-category-box">
          <div className="healthcare-pitch-category-box-title">
            Theme 2: HealthTech Product for clinical validation
          </div>
          <SpaceDivider />
          <div className="healthcare-pitch-category-box-content">
            Do you have a HealthTech product, but lack expertise in clinical
            research and validation? So, if you are looking for partners to
            collaborate on the clinical validation of your groundbreaking
            HealthTech product, we have something to offer!
            <br />
            <br />
            Showcase your HealthTech innovation to a panel of medical experts,
            express your interest in partnering with them and get access to
            their mentorship to validate the effectiveness, safety, and
            usability of your product in real-world clinical settings.
            <br />
            Together, let's harness the power of collaboration and innovation to
            validate our HealthTech solution and make a meaningful impact on
            patient care and healthcare delivery.
          </div>
        </InfoCard2>
      </div>
      <SpaceDivider />
      <SpaceDivider />
      <div className="healthcare-pitch-process-wrapper">
        <div className="healthcare-pitch-process-instructions">
          <h3>Application process: </h3>
          <ol>
            <li>
              {" "}
              Fill in the online application and share the required details
              related to your HealthTech idea/product
            </li>
            <li>
              {" "}
              Submissions will be evaluated based on innovation, impact,
              feasibility, scalability, and market potential.
            </li>
            <li>
              {" "}
              Shortlisted teams will present a compelling pitch deck
              highlighting their HealthTech innovation.
            </li>
          </ol>
          <div>
            <span>Application Form: </span>
            <a href="https://forms.gle/rQgrVropWguPgXSA9" target="_blank">
              https://forms.gle/rQgrVropWguPgXSA9
            </a>
          </div>
        </div>
        <InfoCard1 classname="healthcare-pitch-date-box">
          <div className="healthcare-pitch-date-box-header">
            Important dates:{" "}
          </div>
          <div className="healthcare-pitch-date-box-body">
            <div>
              <div className="healthcare-pitch-date">
                <div>Application Start date: </div> <div>Feb 22, 2024</div>
              </div>
              <div className="healthcare-pitch-date">
                <div>Application Close date: </div> <div>March 4, 2024</div>
              </div>
              <div className="healthcare-pitch-date">
                <div>Shortlisting: </div> <div>March 9, 2024</div>
              </div>
              <div className="healthcare-pitch-date">
                <div>Pitch Competition Date: </div> <div>March 16, 2024</div>
              </div>
            </div>
            <div style={{ marginTop: "2em" }}>
              Location: B003, RnD Building, IIIT-Delhi
            </div>
          </div>
        </InfoCard1>
      </div>
      <SpaceDivider />
      <div className="healthcare-pitch-outcome">
        <h3>Final Outcome:</h3>
        <ol>
          <li> Cash award for the winning teams under each category.</li>
          <li>
            {" "}
            Support for incubation and mentorship (for winners under Theme 1)
          </li>
          <li>
            {" "}
            Mentorship from medical experts and support for clinical validation
            (for winners under Theme 2)
          </li>
        </ol>
        <span>
          <h3 style={{ display: "inline" }}>Funding Opportunity: </h3>
          Shortlisted startups will get an opportunity to pitch to Investors.
          Investors will also be a part of the judging panel. Innovative
          ideas/products may also find funding opportunities.
        </span>
        <SpaceDivider />
      </div>
    </div>
  );
};

export default HealthcarePitch;
