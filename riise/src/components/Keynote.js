import React from "react";
import "./Keynote.css";
import Card from "../containers/Card";
import RowOverflow from "../containers/RowOverflow";

const Keynote = ({ KeynoteRef, keynoteData }) => {
  return (
    <div ref={KeynoteRef} className="keynote-container">
      {/* <h2 className="theme-heading2">EVENTS</h2> */}
      <h1 className="section-heading2">Chief Guest</h1>
      <div className="keynote-card-row-container">
        <RowOverflow center={true} countRelWidth={[5, 5, 3, 3, 1]}>
          {keynoteData.map((speaker, index) => (
            <Card
              key={index}
              title={speaker.title}
              body={speaker.body}
              image={speaker.image}
              alt={speaker.alt}
              hover={false}
            />
          ))}
        </RowOverflow>
      </div>
    </div>
  );
};

export default Keynote;
