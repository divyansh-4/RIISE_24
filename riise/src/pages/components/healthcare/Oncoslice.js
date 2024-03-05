// import image from '../images/Cells.jpg';
import "./Oncoslice.css";

const OnCoSlice = () => {
  return (
    <div className="main">
      <h1 className="top-heading">ONCOSLICE HACKATHON</h1>
      <h5 className="second-heading">
        Localize and Extract Cancer Cells from Microscopic Images
      </h5>
      <div className="first-section">
        <div className="text">
          <p>
            The hackathon focuses on developing computer-assisted diagnostic
            tools for the precise diagnosis of cancer, particularly Multiple
            Myeloma (MM), a type of blood cancer, through advanced image
            processing techniques. The provided dataset specifically addresses
            the segmentation of plasma cells, a crucial aspect of MM diagnosis.
            Challenges in segmentation arise from variations in cell morphology,
            clustering, and color variations due to staining techniques. The
            dataset encompasses images captured using various cameras and
            includes stain color-normalized images to ensure uniformity and
            accuracy. Ground truth annotations are available for both training
            and validation sets to facilitate algorithm development and
            evaluation. Researchers interested in proposing deep learning or
            advanced machine learning solutions for plasma cell segmentation are
            encouraged to participate.<br></br>
            <br></br>
            Perform the segmentation and upload results by the team name on the
            leaderboard on the <a href="https://segpc-2021.grand-challenge.org/evaluation/final-test-phase/leaderboard/">test data</a>. Any team can upload the results at max
            5 times. on the leaderboard. One can upload the results on the
            leaderboard by joining the page <a href="https://segpc-2021.grand-challenge.org/evaluation/challenge/leaderboard/">here</a>. Upload the paper in the IEEE
            ISBI conference template provided as an attachment. The Submissions
            will be made using this <a href="https://www.figma.com/exit?url=https%3A%2F%2Fforms.gle%2FvVBekDQVaAVhLmvM6">link</a> and the link to the dataset is provided <a href="https://ieee-dataport.org/open-access/segpc-2021-segmentation-multiple-myeloma-plasma-cells-microscopic-images">here</a>.
          </p>
        </div>
        <div className="image">
          <img src={"onsolice.png"} alt="oncoslice logo" />
        </div>
      </div>
      <div className="second-section">
        <div className="s-text">
          <h3>Organizers:</h3>
          <br></br>
          <li>Prof. Anubha Gupta, Centre of Excellence in Healthcare</li>
          <li>Dr. Jaspreet Kaur, Centre of Excellence in Healthcare</li>
          <br></br>
          <h3>Dataset Acknowledgements:</h3>
          <br></br>
          <li>
            Prof.Anubha Gupta acknowledges SERB,Department of Science &
            Technology, Govt. of India, for Grant no. SPF/2021/000209. The
            organizers also thank the Centre of Excellence in Healthcare,
            IIIT-Delhi, for supporting this event.
          </li>
          <li>Dataset Description and Availability: <a href="https://ieee-dataport.org/open-access/segpc-2021-segmentation-multiple-myeloma-plasma-cells-microscopic-images">SEGPC-2021 Dataset</a></li>
        </div>
        <div className="s-prizes">
          <h2>Prizes</h2>
          <table>
    <tbody>
      <tr>
        <td>1st Place</td>
        <td>Rs.15000</td>
      </tr>
      <tr>
        <td>2nd Place</td>
        <td>Rs.10000</td>
      </tr>
      <tr>
        <td>3rd Place</td>
        <td>Rs.5000</td>
      </tr>
    </tbody>
  </table>
        </div>
      </div>
      <div className="third-section">
        <div className="t-text">
          <h3>Application Process</h3>
          <br></br>
          <p>
            1)  Participants are required to register for the hackathon through
            a Google Form
          </p>
          <br></br>
          <p>
            <span>Application Form:</span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZaT76uqYmGERq3SvsYqRq8gpLFx_fxcLEt0nLSctei9KW-w/viewform">
              Register Here
            </a>
          </p>
        </div>
      </div>
      <div className="fourth-section">
        <h2>Timeline</h2>
        <div className="boxes">
          <div className="box_1">
            <div className="text-margin">
              <h4>Phase I</h4>
              <ul>
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
                      Papers will be reviewed, and results announced by March
                      12, 2024, for poster and paper presentation at RIISE 2024
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
          </div>
          <div className="box_2">
            <div className="text-margin">
              <h4>Phase II</h4>
              <ul>
                <li>
                  Dates:
                  <ul>
                    <li>
                      {" "}
                      After RIISE 2024, specific dates will be communicated
                    </li>
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
          </div>
        </div>
        <div className="lastline">
          <p>
            {" "}
            For any further information, you can contact us using <a href="https://riise@iiitd.ac.in/">RIISE</a> email
            id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnCoSlice;
