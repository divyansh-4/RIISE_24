import React from "react";
import "./Keynote.css";
import Card from "../containers/Card";
import RowOverflow from "../containers/RowOverflow";

const Speaker = ({ speakerData, heading, countRelWidth = [5, 5, 3, 3, 1] }) => {
  return (
    <div className="keynote-container">
      <h1 className="section-heading2">{heading}</h1>
      <br />
      <div className="keynote-card-row-container">
        <RowOverflow center={true} countRelWidth={countRelWidth}>
          {speakerData.map((speaker, index) => (
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

export default Speaker;
