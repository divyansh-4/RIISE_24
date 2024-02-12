// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Add BrowserRouter for routing
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
      </div>
    </Router>
  );
}

export default App;
