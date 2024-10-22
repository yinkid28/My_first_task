'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthData, sixMonthData, yearData } from '../../../Assets/Assets';
import '../UserStat/UserStat.css';

const UserStat = () => {
  const [chartData, setChartData] = useState(monthData);
  const [activeOption, setActiveOption] = useState('Month');

  const handleOptionClick = (option) => {
    if (option === 'Month') {
      setChartData(monthData);
    } else if (option === '6 Months') {
      setChartData(sixMonthData);
    } else if (option === 'Year') {
      setChartData(yearData);
    }
    setActiveOption(option); // Update active option
  };

  return (
    <div className="user-stat-chart-container" style={{ width: '100%', height: '300px' }}>
      <div className="header">
        <h2>User Stats</h2>
        <div className="user-stat-chart-options">
          <button onClick={() => handleOptionClick('Month')} className={activeOption === 'Month' ? 'active-button' : ''}>
            Month
          </button>
          <button onClick={() => handleOptionClick('6 Months')} className={activeOption === '6 Months' ? 'active-button' : ''}>
            6 Months
          </button>
          <button onClick={() => handleOptionClick('Year')} className={activeOption === 'Year' ? 'active-button' : ''}>
            Year
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={5}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="none" />
          <Bar dataKey="pv" fill="rgb(5, 179, 5)" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserStat;
