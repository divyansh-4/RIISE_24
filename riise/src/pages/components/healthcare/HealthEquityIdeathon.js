import React from "react";
import "./HealthEquityIdeathon.css";
import { Link } from "react-router-dom";

const HealthEquityIdeathon = () => {
    return (
        <div className="health-equity-container">
            <div className="content">
                <h1>HEALTH EQUITY IDEATHON</h1>
                <p>Empowering Healthcare Access for All!</p>
            </div>
            <div className="green-rectangle">
                <div className="rectangle-content">
                    <p>
                        Dear Researchers, Innovators, Entrepreneurs, and Problem Solvers,<br/>
                        <br />
                        Today, we embark on a journey to revolutionize healthcare accessibility and affordability for all. At RIISE (Revolutionizing Innovation In Sustainable Endeavors), we believe that healthcare is a fundamental human right, yet millions suffer due to the financial burden imposed by healthcare spending. Oncology and chronic lifestyle-based diseases have emerged as leading causes, pushing countless individuals below the poverty line each year.
                        <br /><br/>
                        It's time to change the narrative.
                        <br /><br/>
                        Our Ideathon calls upon visionaries like you to unleash your creativity and expertise toward crafting innovative solutions. We seek transformative ideas addressing the core challenges of inaccurate or delayed diagnostics and limited access to quality healthcare. By harnessing the power of technology, collaboration, and ingenuity, we aim to make treatment and diagnosis more accessible and cost-effective for everyone.
                    </p>
                </div>
            </div>
            <div className="flex-container">
                <div className="left-box">
                    <div className="left-box-rectangle-content">
                        <h2 className="left-box-heading">Why Participate?</h2>
                        <p>
                            <br/>Impact: Your idea could directly impact millions of lives, breaking the cycle of poverty caused by healthcare expenses.<br/><br/>
                            Recognition: Gain visibility for your innovation within the global community and among industry leaders.<br/>
                            Prizes: The winning team will receive exclusive RIISE merchandise and exciting surprise prizes!<br/>
                            Networking: Connect with like-minded individuals, potential collaborators, and mentors who share your passion for healthcare innovation
                        </p>
                    </div>
                </div>
                <div className="right-box">
                    <div className="application-process">
                        <h2>Application Process:</h2>
                        <p>
                            1. Form a Team: Gather a diverse team of thinkers, doers, and dreamers. Collaboration fuels creativity!<br/>
                            2. Brainstorm: Dive deep into the problem statement. Explore unconventional ideas and approaches.<br/>
                            3. Develop Your Idea: Transform your vision into a tangible perspective. Leverage interdisciplinary domain knowledge to create an impactful notion in the healthcare domain.<br/>
                            4. Submit Your Proposal: Complete the Google Form by March 10th, 2024, to officially enter the competition.<br/>
                        </p>
                        <p>
                            {/* Application Form : <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZPf55TtGx8BbTKrtqoRAjGEKxU2TXQ7lb2rBESxiq9uolcw/viewform">Google Form Link</a> */}
                            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeZPf55TtGx8BbTKrtqoRAjGEKxU2TXQ7lb2rBESxiq9uolcw/viewform" className="register-button2">
                                Application Form
                            </Link>
                        </p>
                    </div>
                    <div className="important-dates">
                        <h4>Important Dates:</h4>
                        <p>Submission Deadline:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; March 12, 2024</p>
                        <p>Presentation and Winner Announcement:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;March 15, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthEquityIdeathon;
