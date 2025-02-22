// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Job Postings</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/create-job">Post Job</Link>
      </div>
    </nav>
  );
};

export default Navbar;
