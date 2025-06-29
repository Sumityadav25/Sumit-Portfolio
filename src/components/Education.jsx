import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 px-6 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-12">Education</h2>

        <div className="space-y-8 text-left">
          {/* College */}
          <div className="bg-gray-800 rounded-xl shadow-lg shadow-yellow-500/10 p-6 hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold text-white">
              🎓 B.Tech in Computer Science Engineering
            </h3>
            <p className="text-md text-blue-400 mt-1">
              Sagar Institute of Research and Technology, Bhopal
            </p>
            <p className="text-sm text-gray-300">2022 – 2026 | CGPA: 6.78</p>
          </div>

          {/* 12th */}
          <div className="bg-gray-800 rounded-xl shadow-lg shadow-yellow-500/10 p-6 hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold text-white">🏫 12th (MPBSE Board)</h3>
            <p className="text-md text-blue-400 mt-1">Vivekananda Vidyapeeth, Bhopal</p>
            <p className="text-sm text-gray-300">Year: 2021 | Percentage: 85%</p>
          </div>

          {/* 10th */}
          <div className="bg-gray-800 rounded-xl shadow-lg shadow-yellow-500/10 p-6 hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold text-white">🏫 10th (MPBSE Board)</h3>
            <p className="text-md text-blue-400 mt-1">Vivekananda Vidyapeeth, Bhopal</p>
            <p className="text-sm text-gray-300">Year: 2019 | Percentage: 84%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
