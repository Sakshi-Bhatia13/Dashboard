import React, { useState } from 'react';
import Signup from './components/LoginSignup/Signup';
import Login from './components/LoginSignup/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      {!showLogin ? (
        <Signup onLoginClick={() => setShowLogin(true)} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
