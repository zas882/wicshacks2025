import './Names.css';
import boots from './assets/boots.png';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate

const Names = () => {
  return (
    <div>
      <img src={boots} className="Welcome" alt="logo" />
    </div>
  );
};

export default Names;
