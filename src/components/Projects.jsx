import React from 'react';

const projects = [
  {
    title: 'College Event Managing App (Developing)',
    description:
      'A platform for managing college events, announcements, and registrations. Enables clubs to post events and students to register & get notified instantly.',
    tech: ['MERN', 'REST APIs'],
    link: '#'
  },
  {
    title: 'AI-Driven Recipe Sharing App',
    description:
      'Built with MERN stack featuring user authentication, search and image uploads. Focus on AI-based recipe recommendation.',
    tech: ['React.js', 'OpenAI API', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    link: 'https://github.com/Sumityadav25'
  },
  {
    title: 'Weather Forecast Application',
    description:
      'Developed using React.js and Chart.js. Fetched live weather data using OpenWeatherMAP API with graphical visualization.',
    tech: ['React.js', 'Chart.js', 'OpenWeatherMap API', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Sumityadav25/weather-forecast-app'
  },
  
  {
    title: 'ChatBot (Rule-Based + OpenAI API)',
    description:
      'Led frontend using React.js in a 4-member team. Integrated rule-based logic with OpenAI API for basic intelligent responses.',
    tech: ['React.js', 'OpenAI API', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Sumityadav25'
  },
  
  
  {
    title: 'Open Source Contributions',
    description:
      'Contributed to beginner-level GitHub projects, focusing on UI fixes and code optimization.',
    tech: ['Git', 'GitHub', 'HTML', 'CSS', 'JavaScript'],
    link: '#'
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

            {proj.link && proj.link !== '#' && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline text-sm"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
