import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import "../styles/lineChart.css"

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['2022-04-01', '2022-04-02', '2022-04-03', '2022-04-04', '2022-04-05', '2022-04-06', '2022-04-07','2024-03-03'],
    prices: [65, 59, 80, 81, 56, 55, 40,99]
  });

  const filterOptions = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
    { label: 'All Time', value: 'all' }
  ];

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    const newData = {
      labels: ['2022-04-01', '2022-04-02', '2022-04-03', '2022-04-04', '2022-04-05', '2022-04-06', '2022-04-07'],
      prices: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100))
    };
    setChartData(newData);
  };

  return (
    <div className='chart-container'>
      <h2 className='chart-title'>Crude Plam Oil</h2>
      <div className='filter-select'>
        <select className='chart-select' onChange={handleFilterChange}>
          {filterOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <Line
      className='chart-canvas'
        data={{
          labels: chartData.labels.map(date => new Date(date).toLocaleDateString()), // Convert date strings to Date objects
          datasets: [
            {
              label: 'Prices',
              data: chartData.prices,
              fill: false,
              borderColor: '#0f0870',
              tension: 0.1
            }
          ]
        }}
      />
    </div>
  );
};

export default LineChart;
