import React, { useState } from 'react';
import './LoginSignup.css';
import Login from './Login'; 
import img1 from './img1.jpg';

const Signup = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin); 
  };

  return (
    <div className="homepage">
      {!showLogin ? (
        <div className="component1">
          <div className="sidepage">
            <h1>Sign Up to</h1>
            <h3>Lorem ipsum is simply</h3>
            <div className="image-section">
            <p>If you already have an account you can <button onClick={handleLoginClick}>Login here!</button></p>
            <img src={img1} alt="myimage" />
          </div>
          </div>
          {/* <div className="image">
            <img src={img1} alt="myimage" />
          </div> */}
          <div className="container">
            <div className="header">
              <div className="text">Sign Up</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="input">
                <input type="text" placeholder="Create User Name" />
              </div>
              <div className="input">
                <input type="tel" placeholder="Contact Number" />
              </div>
              <div className="input">
                <input type="password" placeholder="Password" />
              </div>
              <div className="input">
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>
            <div className="submit">
              <button>Register</button>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Signup;
