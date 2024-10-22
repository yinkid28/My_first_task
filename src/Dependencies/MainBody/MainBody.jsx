import React from 'react';
import FirstSection from './FirstSection/FirstSection';
import UserStat from './UserStat/UserStat';
import Statistics from './Statistics/Statistics';
import LatestEvents from './LatestEvents/LatestEvents';
import SiteSpeed from './SiteSpeed/SiteSpeed';
import './MainBody.css';

const MainBody = () => {
  return (
    <div className="main-grid">
      <div className="first-column">
        <FirstSection />
        <UserStat />
        <Statistics />
      </div>
      <div className="right-column">
        <div className="top-box">
          <LatestEvents />
        </div>
        <div className="bottom-box">
          <SiteSpeed />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
