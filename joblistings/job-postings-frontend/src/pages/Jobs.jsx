// src/pages/Jobs.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  // Fetch jobs from your backend
  useEffect(() => {
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        const res = await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
        if (res.ok) {
          // Update the state to remove the deleted job
          setJobs(jobs.filter(job => job._id !== id));
        } else {
          console.error('Failed to delete job');
        }
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Available Jobs</h2>
      {jobs.length > 0 ? (
        <ul className="jobs-list">
          {jobs.map(job => (
            <li key={job._id} className="job-item">
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.company} - {job.location}</p>
              </div>
              <div className="job-actions">
                <button onClick={() => navigate(`/edit-job/${job._id}`)} className="action-btn edit-btn">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(job._id)} className="action-btn delete-btn">
                  <FaTrash />
                </button>
                <Link to={`/jobs/${job._id}`} className="details-link">
                  Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No job postings found.</p>
      )}
    </div>
  );
};

export default Jobs;
