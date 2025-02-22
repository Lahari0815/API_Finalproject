// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    socketTimeoutMS: 30000,
    connectTimeoutMS: 30000
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Import routes
const jobRoutes = require('./routes/jobRoutes');
app.use('/api/jobs', jobRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
