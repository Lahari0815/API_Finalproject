// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import JobCreate from './pages/JobCreate';
import JobEdit from './pages/JobEdit';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/create-job" element={<JobCreate />} />
        <Route path="/edit-job/:id" element={<JobEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
