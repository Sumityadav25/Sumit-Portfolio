import React from 'react';

const projects = [
  {
    title: 'AI Chatbot (Rule-based + OpenAI)',
    description: 'A smart chatbot that responds using both custom logic and OpenAI’s GPT trial for natural conversation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenAI API'],
    link: 'https://github.com/Sumityadav25/chatbot-project'
  },
  {
    title: 'Weather Forecast App',
    description: '5-day weather forecast app using Chart.js for graphs, with real-time location support.',
    tech: ['React', 'Chart.js', 'API','HTML','CSS','Javascript'],
    link: 'https://github.com/Sumityadav25/weather-forecast-app'
  },
  {
    title: 'AI-Driven Recipe Sharing App',
    description: 'Users can share recipes and get suggestions using AI. Built with full-stack MERN.',
    tech: ['MERN', 'OpenAI API', 'Tailwind CSS','Node.js','Express.js','MongoDB','JWT','REST APIs'],
    link: 'https://github.com/Sumityadav25/recipe-sharing-ai'
  },
  {
    title: 'Aarogyam-The Indian Hospital Management System*',
    description: 'A full-stack MERN project (in progress) to help users find nearby hospitals, check real-time bed/blood/organ availability, access emergency care, and connect with hospitals',
    tech: [' React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Socket.io', 'Google Maps API']
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 text-white"
    >
      <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{proj.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-yellow-300 px-2 py-1 text-xs rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
