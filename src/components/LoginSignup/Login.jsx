import React, { useState } from 'react';
import './LoginSignup.css';
import Dashboard from '../dashboard';
import img1 from './img1.jpg';
import appleicon from './apple-logo.png';
import googleicon from './googleicon.jpg';

const Login = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLoginClick = () => {
    setShowDashboard(true);
  };

  return (
    <div className="homepage">
      {!showDashboard ? (
        <div className="component1">
          <div className="sidepage">
            <h1>Sign In to</h1>
            <h3>Lorem ipsum is simply</h3>
            <div className="image-section">
              <p>
                If you already have an account you can{' '}
                <button onClick={handleLoginClick}>Register here!</button>
              </p>

              <img src={img1} alt="myimage" />
            </div>
          </div>
          <div className="container">
            <div className="header">
              <div className="text">Sign In</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="input">
                <input type="password" placeholder="Password" />
              </div>
              <div className="forgett">
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className="submit">
              <button onClick={handleLoginClick}>Login</button>
            </div>
            <div className="continuewith">
              <p>or continue with</p>
              <div className="images-icon">
                <img src={appleicon} alt="myimage" />
                <img src={googleicon} alt="myimage" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Login;
