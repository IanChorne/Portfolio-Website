import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <Router basename="/Portfolio-Website">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add more routes later */}
      </Routes>
    </Router>
  );
};

export default App;
