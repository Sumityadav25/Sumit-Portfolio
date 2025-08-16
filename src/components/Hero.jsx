import React from 'react';
import profile from '../assets/profile.jpg'; // Image path

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 text-center">

      <img
        src={profile}
        alt="Sumit Kumar Yadav"
        className="w-40 h-40 rounded-full shadow-xl border-4 border-yellow-400 mb-4"
      />

      <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">
        Sumit Kumar Yadav
      </h1>

      <p className="text-xl text-blue-400 font-medium mb-1">
        Full Stack Developer | DSA Enthusiast
      </p>

      <p className="text-sm text-gray-300 mb-4">
        Bhopal, Madhya Pradesh
      </p>

      <a
        href="/resume.pdf"
        download
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
