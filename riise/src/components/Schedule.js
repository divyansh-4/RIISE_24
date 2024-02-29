// src/components/Schedule.js

import React from 'react';
import './Schedule.css'; // Import the CSS file for the header styles
// import sched_logo from '';


const Schedule = ({}) => {
  return (
    <div id="schedule-section" className="events">
      <div className="event-text">EVENTS</div>
      <div className="schedule-text">SCHEDULE</div>
      <div className="date-text">15TH - 16TH MARCH</div>
      {/* <div className="coming-soon-text">COMING SOON</div> */}
      {/* <div>
        <img src={"schedule.svg"}  className="image" />
      </div> */}
      <img src={"schedule.svg"}  className="image" />
    </div>
  );
}

export default Schedule;
