// src/components/Schedule.js

import React from 'react';
import './Schedule.css'; // Import the CSS file for the header styles
import sched_logo from './Sched-img.png';


const Schedule = ({scheduleRef}) => {
  return (
    <div ref={scheduleRef} className="events">
      <div className="event-text">EVENTS</div>
      <div className="schedule-text">SCHEDULE</div>
      <div className="date-text">15TH - 16TH MARCH</div>
      <div className="coming-soon-text">COMING SOON</div>
      <img src={sched_logo}  className="imge" />
    </div>
  );
}

export default Schedule;
