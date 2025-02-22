// src/pages/JobDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!job) {
    return <div className="container"><p>Loading job details...</p></div>;
  }

  return (
    <div className="container">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description || 'No description provided.'}</p>
      <Link to="/jobs" className="back-link">Back to Jobs</Link>
    </div>
  );
};

export default JobDetail;
