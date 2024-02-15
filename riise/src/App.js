// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Add BrowserRouter for routing
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Schedule from './components/Schedule';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Schedule />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
