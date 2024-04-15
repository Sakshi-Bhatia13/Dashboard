import React from 'react';
import './UserDashboard.css'; 
import Firstrow from './firstrow';
import Secondrow from './secondrow1'
import Secondrow2 from './secondrow2'
import Thirdrow1 from './thirdrow1'
import Thirdrow2 from './thirdrow2'

const Dashboard = () => {
  return (
    <div className="user-dashboard">
      <div className="side-heading">
        <h2>BankDash</h2>
        <ul>
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Accounts</li>
          <li>Investments</li>
          <li>Credit Card</li>
          <li>Loans</li>
          <li>Services</li>
          <li>My Privileges</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className="content">
        <div className="overview">
          <h2>Overview</h2>
          <Firstrow/>
          <div className="secondrow">
          <div className="chart-container">
            <Secondrow />
          </div>
          <div className="chart-container">
            <Secondrow2 />
          </div>
        </div>
        <div className="thirdrow">
          <div className="chart-container">
            <Thirdrow1/>
          </div>
          <div className="chart-container">
            <Thirdrow2/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
