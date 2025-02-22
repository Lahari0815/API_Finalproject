// server/models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  company: String,
  location: String,
  international: { type: Boolean, default: false },//job postings specific to international Students
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
