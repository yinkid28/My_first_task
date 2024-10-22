import React from 'react';
import { latestEventsData } from '../../../Assets/Assets'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LatestEvents.css';

const LatestEvents = () => {
  return (
    <div className="latest-events">
      <header className="events-header">
        <h2>Latest Events</h2>
      </header>
      <div className="events-body">
        {latestEventsData.map((item) => (
          <div className="event-item" key={item.id}>
            <div className="event-left">
              <div className="event-icon">
                <FontAwesomeIcon style={{ color: item.fontColor }} icon={item.icon} />
              </div>
            </div>
            <div className="event-right">
              <div className="event-details">
                <span className="event-time">{item.time}</span>
                <span className="event-option">{item.option}</span>
                <span className="event-user">{item.user}</span>
              </div>
              <div className="message">{item.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestEvents;
