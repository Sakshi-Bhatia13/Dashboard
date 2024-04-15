import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WeeklyActivityGraph = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Deposit',
        data: generateRandomData(),
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
      }, {
        label: 'Withdraw',
        data: generateRandomData(),
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
      }]
    };

    if (myChart !== null) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (myChart !== null) {
        myChart.destroy();
      }
    };
  }, []);

  const generateRandomData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 501));
  };

  return (
    <div style={{ height: '200px' }}>
      <h3>Weekly Activity</h3>
      <canvas ref={chartRef} />
    </div>
  );
};

export default WeeklyActivityGraph;
