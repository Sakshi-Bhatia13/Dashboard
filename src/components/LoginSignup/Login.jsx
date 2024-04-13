import React, { useState } from 'react';
import './LoginSignup.css';
import Signup from './Signup'; 
const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowSignup(true);
  };

  return (
    <div className="homepage">
      {!showSignup ? (
        <div className="component1">
          <div className="sidepage">
            <h1>SignIn to</h1>
            <h3>Lorem ipsum is simply</h3>
            <p>If you already have an account</p>
            <p>
              you can <button onClick={handleLoginClick}>Signup here!</button>
            </p>
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
            </div>
            <div className="submit">
              <button>Login</button>
            </div>
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </div>
  );
};

export default Login;
