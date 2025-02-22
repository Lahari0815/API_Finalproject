// server/routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const Job = require('../model/job');

// API 1: GET /api/jobs - List all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API 2: GET /api/jobs/international - List jobs for international students
router.get('/international', async (req, res) => {
  try {
    const jobs = await Job.find({ international: true });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API 3: GET /api/jobs/:id - Get a specific job
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API 4: POST /api/jobs - Create a new job listing
router.post('/', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API 5: PUT /api/jobs/:id - Update a job listing
router.put('/:id', async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJob) return res.status(404).json({ error: 'Job not found' });
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API 6: DELETE /api/jobs/:id - Delete a job listing
router.delete('/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ error: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
