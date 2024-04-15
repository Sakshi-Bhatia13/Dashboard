import React, { useState } from 'react';
import Signup from './components/LoginSignup/Signup';
import Login from './components/LoginSignup/Login';
import Dashboard from './components/dashboard';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignupSuccess = () => {
    setShowLogin(true);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        !showLogin ? (
          <Signup onSignupSuccess={handleSignupSuccess} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
