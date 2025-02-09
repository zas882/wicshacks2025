import logo from './logo.svg';
import './App.css';
import welcome from './assets/welcome.png';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate
import Names from './Names'; // Import the Names component
import HomePage from './HomePage.js';

function App() {
  return (
    <Router> {/* Set up the Router to enable navigation */}
      <Routes>
        {/* The default route to load the welcome page */}
        <Route path="/" element={<Main />} />
        {/* The route to navigate to the Names page */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

// Main component where the click listener and navigation happen
function Main() {
  const navigate = useNavigate(); // useNavigate inside a Router context

  useEffect(() => {
    // Event listener for the entire document
    const handleClick = () => {
      navigate('/home'); // Navigate to /names on any click
    };

    // Add the event listener to the document
    document.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return (
    <div className="App">
      <img src={welcome} className="Welcome" alt="logo" />
      {/* The entire screen will navigate to /names when clicked */}
    </div>
  );
}

export default App;
