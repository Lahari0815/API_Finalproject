// src/pages/JobEdit.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const JobEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then(res => res.json())
      .then(data => setForm({
        title: data.title,
        company: data.company,
        location: data.location,
        description: data.description
      }))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        alert('Job updated successfully!');
        navigate('/jobs');
      } else {
        alert('Failed to update job.');
      }
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Job</h2>
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
        <button type="submit" className="submit-btn">Update Job</button>
      </form>
    </div>
  );
};

export default JobEdit;
