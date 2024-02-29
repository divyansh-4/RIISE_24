import React from "react";
import "./Keynote.css";
import Card from "../containers/Card";
import RowOverflow from "../containers/RowOverflow";

const Keynote = () => {
  return (
    <div className="keynote-container">
      <h2 className="theme-heading">EVENTS</h2>
      <h1 className="section-heading">KEYNOTE SPEAKERS</h1>
      <div className="keynote-card-row-container">
        <RowOverflow center={true} countRelWidth={[5, 5, 3, 3, 3]}>
          <Card
            title="Jaswinder Chadha"
            body="President & CEO @ Axtria | AI Software for Life Science Industry"
            image={"/mrjaswinder.png"}
            alt="jaswinderchadha"
            hover={false}
          />
        </RowOverflow>
      </div>
    </div>
  );
};

export default Keynote;
