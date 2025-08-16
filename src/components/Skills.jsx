import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiOpenai, SiC, SiDatabricks } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: <SiC className="text-blue-500" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-600" /> },
    ],
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'Data Structures & Algorithms', icon: <SiDatabricks className="text-pink-500" /> },
      { name: 'DBMS', icon: <SiMongodb className="text-green-700" /> },
      { name: 'Computer Networks', icon: <SiExpress className="text-gray-300" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
        Tech Stack
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center bg-gray-900 rounded-lg p-4 shadow-inner hover:scale-105 transform transition duration-300"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
