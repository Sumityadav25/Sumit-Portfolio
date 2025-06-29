import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 px-6 py-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-8">About Me</h2>

        <p className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-300">
          I'm <span className="font-semibold text-white">Sumit Kumar Yadav</span>, a passionate
          <span className="text-blue-400 font-medium"> MERN Stack Developer</span> and
          <span className="text-green-400 font-medium"> DSA Enthusiast</span> from
          Bhopal, Madhya Pradesh. I love solving real-world problems with full-stack web development and
          continuously exploring new technologies.
        </p>

        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Interests & Hobbies</h3>
        <ul className="space-y-2 text-lg text-gray-400">
          <li>🏏 Playing Cricket</li>
          <li>🎧 Listening to Music</li>
          <li>📜 Interest in History</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
