import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January'],
      datasets: [{
        label: 'Values',
        data: [100, 250, 50, 700, 200, 550, 600],
        borderColor: 'blue',
        fill: false,
        lineTension: 0.4
      }]
    };

    if (myChart !== null) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 800
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

  return (
    <div>
      <h3>Balance History</h3>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Graph;
