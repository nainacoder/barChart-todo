// src/BarChart.js
import React from 'react';

const BarChart = () => {
  const data = [40, 400, 600, 60, 40, 700]; // Your data array

  // Calculate the maximum value in the data for scaling purposes
  const maxValue = Math.max(...data);

  return (
    <div>
      <h1>Bar Chart Example</h1>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '300px', border: '1px solid white' }}>
        {data.map((value, index) => (
          <div
            key={index}
            style={{
               width: '50px',
              height: `${(value / maxValue) * 100}%`, // Scale the height relative to the max value
              backgroundColor: '#007bff', // Blue color for the bars
              margin: '0 10px',
            //   textAlign: 'center',
            //   color: 'white',
            //   lineHeight: '1.5',
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
