import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ExpensePieChart = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Entertainment', 'Bills', 'Investment', 'Others'],
      datasets: [{
        data: [30, 15, 20, 35],
        backgroundColor: ['grey', 'orange', 'pink', 'blue']
      }]
    };

    if (myChart !== null) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        aspectRatio: 1, 
        plugins: {
          legend: {
            position: 'right'
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
      <h3>Expense Statistics</h3>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ExpensePieChart;
