import React, { useState } from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { now, today, month } from '../../../Assets/Assets';
import './SiteSpeed.css';

const SiteSpeed = () => {
  const [siteSpeedData, setSiteSpeedData] = useState(now);
  const [selectedValue, setSelectedValue] = useState(now[0].value);

  const maxValue = 100;

  const handleOptionClick = (option) => {
    if (option === 'Now') {
      setSiteSpeedData(now);
      setSelectedValue(now[0].value);
    } else if (option === 'Today') {
      setSiteSpeedData(today);
      setSelectedValue(today[0].value);
    } else if (option === 'Month') {
      setSiteSpeedData(month);
      setSelectedValue(month[0].value);
    }
  };

  const handleItemClick = (item) => {
    setSelectedValue(item.value);
  };

  return (
    <div className="site-speed-container">
      <div className="site-speed-header">
        <h2>Site Speed</h2>
        <div className="site-speed-chart-options">
          <button onClick={() => handleOptionClick('Now')}>Now</button>
          <button onClick={() => handleOptionClick('Today')}>Today</button>
          <button onClick={() => handleOptionClick('Month')}>Month</button>
        </div>
      </div>

      <div className="site-speed-chart-and-details">
        <div className="site-speed-chart-container">
          <RadialBarChart
            width={180}  
            height={180}
            innerRadius="80%"
            outerRadius="100%"
            data={[{ value: (selectedValue / maxValue) * 100, fill: '#82ca9d' }]}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar minAngle={15} background clockWise dataKey="value" />
            <Tooltip />
            <Legend />
          </RadialBarChart>

          {/* Value at the center of the chart */}
          <div className="site-speed-inside-circle">
            <h2>{selectedValue}</h2>
          </div>
        </div>

        {/* Displaying the site speed data in a 2x2 grid beside the chart */}
        <div className="site-speed-details">
          {siteSpeedData.map(item => (
            <div key={item.id} className="site-speed-item" onClick={() => handleItemClick(item)}>
              <h3>{item.message}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteSpeed;
