import { MainTitle, SubTitle } from "../PageTitles";
import { InfoCard1, InfoCard2 } from "../InfoCards";
import { Link } from "react-router-dom";
import "./Oncoslice.css";

const SpaceDivider = () => {
  return <div style={{ padding: "1rem" }} />;
};

const HealthcarePitch = () => {
  return (
    <div className="oncoslice-body">
      <SpaceDivider />
      <MainTitle>ONCOSLICE HACKATHON</MainTitle>
      <SubTitle>
        Localize and Extract Cancer Cells from Microscopic Images
      </SubTitle>
      <SpaceDivider />

      <div className="oncoslice-about-wrapper">
        <span className="oncoslice-about">
          The hackathon focuses on developing computer-assisted diagnostic tools
          for the precise diagnosis of cancer, particularly Multiple Myeloma
          (MM), a type of blood cancer, through advanced image processing
          techniques. The provided dataset specifically addresses the
          segmentation of plasma cells, a crucial aspect of MM diagnosis.
          Challenges in segmentation arise from variations in cell morphology,
          clustering, and color variations due to staining techniques. The
          dataset encompasses images captured using various cameras and includes
          stain color-normalized images to ensure uniformity and accuracy.
          Ground truth annotations are available for both training and
          validation sets to facilitate algorithm development and evaluation.
          Researchers interested in proposing deep learning or advanced machine
          learning solutions for plasma cell segmentation are encouraged to
          participate.
          <br />
          <br />
          Perform the segmentation and upload results by the team name on the
          leaderboard on the{" "}
          <Link
            to="https://segpc-2021.grand-challenge.org/evaluation/final-test-phase/leaderboard/"
            target="_blank"
          >
            test data
          </Link>
          . Any team can upload the results at max 5 times. on the leaderboard.
          One can upload the results on the leaderboard by joining the page{" "}
          <Link
            to="https://segpc-2021.grand-challenge.org/evaluation/challenge/leaderboard/"
            target="_blank"
          >
            here
          </Link>
          . Upload the paper in the IEEE ISBI conference template provided as an
          attachment. The Submissions will be made using this{" "}
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSfJSZg5Sf9z00p9iDHU_ba-YLv7Q7jw8sHP98lfd7Z6iN9ohQ/viewform"
            target="_blank"
          >
            link
          </Link>{" "}
          and the link to the dataset is provided{" "}
          <Link
            target="_blank"
            to={
              "https://ieee-dataport.org/open-access/segpc-2021-segmentation-multiple-myeloma-plasma-cells-microscopic-images"
            }
          >
            here
          </Link>
          .
        </span>
        <div
          className="oncoslice-about-sidebar"
          style={{ backgroundImage: "url('/onsolice.png')" }}
        />
      </div>

      <SpaceDivider />
      <SpaceDivider />
      {/* <SpaceDivider />
      <SpaceDivider /> */}

      <div className="oncoslice-process-wrapper">
        <div className="oncoslice-process-instructions">
          <h3>Organizers: </h3>
          <ol>
            <li>Prof. Anubha Gupta, Centre of Excellence in Healthcare</li>
            <li>Dr. Jaspreet Kaur, Centre of Excellence in Healthcare</li>
          </ol>
          <h3>Dataset Acknowledgements:</h3>
          <ol>
            <li>
              Prof.Anubha Gupta acknowledges SERB,Department of Science &
              Technology, Govt. of India, for Grant no. SPF/2021/000209. The
              organizers also thank the Centre of Excellence in Healthcare,
              IIIT-Delhi, for supporting this event.
            </li>
            <li>
              Dataset Description and Availability:{" "}
              <Link
                to={
                  "https://ieee-dataport.org/open-access/segpc-2021-segmentation-multiple-myeloma-plasma-cells-microscopic-images"
                }
                target="_blank"
              >
                SEGPC-2021 Dataset
              </Link>
            </li>
          </ol>
          <h3>Application process:</h3>
          <ol>
            <li>
              Participants are required to register for the hackathon through a
              Google Form
            </li>
          </ol>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSfZaT76uqYmGERq3SvsYqRq8gpLFx_fxcLEt0nLSctei9KW-w/viewform"
            className="oncoslice-register-button2"
            target="_blank"
          >
            Application Form
          </Link>
        </div>

        <div className="oncoslice-prize-card">
          <div className="oncoslice-prize-card-header">PRIZES</div>
          <div className="oncoslice-prize-card-body">
            <div>
              <span>1st Place</span>
              <span>₹15,000</span>
            </div>
            <div>
              <span>2nd Place</span>
              <span>₹10,000</span>
            </div>
            <div>
              <span>3rd Place</span>
              <span>₹5,000</span>
            </div>
          </div>
        </div>
      </div>
      <SpaceDivider />
      <SpaceDivider />
      {/* <SpaceDivider /> */}

      <MainTitle>Timeline</MainTitle>
      <SpaceDivider />

      <div className="oncoslice-categories">
        <InfoCard2 classname="oncoslice-category-box">
          <div className="oncoslice-category-box-title">Phase I</div>
          <SpaceDivider />
          <div className="oncoslice-category-box-content">
            <ul className="oncoslice-timeline-outerlist">
              <li>
                Dates:
                <ul>
                  <li>February 20, 2024, to March 10, 2024</li>
                </ul>
              </li>
              <li>
                Tasks:
                <ul>
                  <li>Register for the Hackathon</li>
                  <li>
                    Perform the segmentation and upload results to the
                    leaderboard on the test data
                  </li>
                  <li>Each team can upload results up to 5 times</li>
                  <li>
                    Upload a paper in IEEE ISBI conference template format
                  </li>
                </ul>
              </li>
              <li>
                Outcome:
                <ul>
                  <li>
                    Papers will be reviewed, and results announced by March 12,
                    2024, for poster and paper presentation at RIISE 2024
                  </li>
                  <li>
                    Cash awards for the top 3 teams: Rs. 15k for the top team,
                    Rs. 10k for the first runner-up, and Rs. 5k for the second
                    runner-up
                  </li>
                  <li>Goodies for participating teams</li>
                </ul>
              </li>
            </ul>
          </div>
        </InfoCard2>
        <InfoCard2 classname="oncoslice-category-box">
          <div className="oncoslice-category-box-title">Phase II</div>
          <SpaceDivider />
          <div className="oncoslice-category-box-content">
            <ul className="oncoslice-timeline-outerlist">
              <li>
                Dates:
                <ul>
                  <li>After RIISE 2024, specific dates will be communicated</li>
                </ul>
              </li>
              <li>
                Tasks:
                <ul>
                  <li>Audience and/or expert suggestions for improvements</li>
                  <li>
                    Updated papers and results submission by April 10, 2024
                  </li>
                  <li>New test data may be released</li>
                </ul>
              </li>
              <li>
                Outcome:
                <ul>
                  <li>
                    Research journal paper publication with top 3 to 5 teams
                  </li>
                  <li>
                    Round of presentations in hybrid mode on April 20, 2024
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </InfoCard2>
      </div>
      <SpaceDivider />
      <div style={{ textAlign: "center", fontFamily: "'Lato', sans-serif" }}>
        For any further information, you can contact us using{" "}
        <a href={"mailto:riise@iiitd.ac.in"}>RIISE</a> email id.
      </div>
      <SpaceDivider />
    </div>
  );
};

export default HealthcarePitch;
