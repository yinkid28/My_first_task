import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { nowData, TodayData, statisticsMonthData } from '../../../Assets/Assets'; // Different data sets
import '../Statistics/Statistics.css';

const Statistics = () => {
  const [chartData, setChartData] = useState(nowData);
  const [activeOption, setActiveOption] = useState('Now');

  const handleOptionClick = (option) => {
    if (option === 'Now') {
      setChartData(nowData);
    } else if (option === 'today') {
      setChartData(TodayData);
    } else if (option === 'month') {
      setChartData(statisticsMonthData);
    }
    setActiveOption(option);
  };

  return (
    <div className="statistics-chart-container">
      <div className="statistics-header">
        <h2>Statistics</h2>

        <div className="statistics-chart-options">
          <button 
            onClick={() => handleOptionClick('Now')} 
            className={activeOption === 'Now' ? 'active-option' : ''}
          >
            Now
          </button>
          <button 
            onClick={() => handleOptionClick('today')} 
            className={activeOption === 'today' ? 'active-option' : ''}
          >
            Today
          </button>
          <button 
            onClick={() => handleOptionClick('month')} 
            className={activeOption === 'month' ? 'active-option' : ''}
          >
            Month
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          className="statistics-bar-chart"
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={7}
        >
          <XAxis type="number" className="x-axis" />
          <YAxis type="category" dataKey="name" className="y-axis" />
          <Tooltip className="tooltip" />
          <Legend className="legend" />
          <CartesianGrid className="grid" stroke="none" />
          <Bar className="bar" dataKey="pv" fill="rgb(5, 179, 5)" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
