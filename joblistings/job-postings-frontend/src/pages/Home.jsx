// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section className="hero-section text-center py-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg text-white">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to the Job Portal</h2>
        <p className="text-xl mb-8">
          Your gateway to career opportunities tailored especially for international students.
        </p>
        <div className="flex justify-center space-x-10">
          <Link 
            to="/jobs" 
            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition duration-300"
          >
            View Jobs
          </Link>
          <Link 
            to="/create-job" 
            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition duration-300"
          >
            Post a Job
          </Link>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="mt-12 text-center">
        <h3 className="text-3xl font-bold mb-4">How We Help International Students</h3>
        <p className="text-lg max-w-2xl mx-auto">
          International students face unique challenges like visa requirements, language barriers, and limited local networks.
          Our platform curates job opportunities with visa sponsorship, multilingual work environments, and expert career advice
          to help you navigate the local job market with ease.
        </p>
      </section>

      {/* Navigation Section */}
      <section className="mt-12 text-center">
        <div className="flex justify-center space-x-10">
          <Link 
            to="/jobs" 
            className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-purple-700 transition duration-300"
          >
            Explore Jobs
          </Link>
          <Link 
            to="/create-job" 
            className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-purple-700 transition duration-300"
          >
            Post a Job
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
