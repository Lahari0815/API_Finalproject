// src/pages/JobCreate.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobCreate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        alert('Job posted successfully!');
        navigate('/jobs');
      } else {
        alert('Failed to post job.');
      }
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="container">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit} className="job-form">
        <label>
          Job Title:
          <input type="text" name="title" value={form.title} onChange={handleChange} required />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={form.company} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={form.location} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" />
        </label>
        <button type="submit" className="submit-btn">Post Job</button>
      </form>
    </div>
  );
};

export default JobCreate;
