import "./Hackathon.css";
import { useState, useEffect, useRef } from "react";

const Hackathon = ({
  title,
  organisers,
  message,
  registerLink,
  timelineBlocks,
  scheduleRef
}) => {
  const mssgTextRef = useRef(null);
  const [padding, setPadding] = useState(50);

  useEffect(() => {
    function adjustPadding(e) {
      const height = mssgTextRef.current.getBoundingClientRect().height;
      setPadding(height);
    }

    adjustPadding();
    window.addEventListener("resize", adjustPadding);
    return () => {
      window.removeEventListener("resize", adjustPadding);
    };
  }, []);

  return (
    <div className="hackathon-component-container">
      <div className="hackathon-header-text">HACKATHON</div>
      <h2 className="hackathon-title-text">{title}</h2>
      <h3 className="hackathon-organisers-header-text">Organisers</h3>
      <div className="organisers-section">
        <div
          className="organisers-container-wrapper"
          style={{ paddingBottom: `${padding}px` }}
        >
          <div className="organisers-container">
            {organisers.map(({ image, name, designation }) => {
              return (
                <div className="organiser-card">
                  <div
                    className="organisers-img-container"
                    style={{ backgroundImage: `url('${image}')` }}
                  />
                  <div className="organiser-name-text">{name}</div>
                  <div className="organiser-designation-text">
                    {designation}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hackathon-message-text" ref={mssgTextRef}>
            {message}
          </div>
        </div>
      </div>
      <div className="hackathon-register-btn-container">
        <a href={registerLink} target="_blank">
          <div className="hackathon-register-btn">Register</div>
        </a>
      </div>

      <div className="hackathon-newbody" ref = {scheduleRef}>
        <div className="hackathon-newbody-trans"></div>
        <div className="hackathon-timeline-header">Timeline</div>

        {timelineBlocks.map(({ heading, timerange, body }) => {
          return (
            <div className="hackathon-timeline-block-body-container">
              <div className="hackathon-divider"></div>
              <div>
                <span className="hackathon-timeline-block-header">{`${heading}${
                  timerange ? ": " : ""
                }`}</span>
                <span className="hackathon-timeline-block-timerange">{`${
                  timerange ? timerange : ""
                }`}</span>
              </div>
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hackathon;
