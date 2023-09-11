import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Check Firebase initialization status
    if (!firebase.apps.length) {
      console.log('Firebase is not initialized yet');
    } else {
      console.log('Firebase is initialized');
    }
  }, []);
  // Define properties to be passed to child components
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="App">
      {/* Pass properties to Login and Registration components */}
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Registration isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
    </div>
  );
}

export default App;
