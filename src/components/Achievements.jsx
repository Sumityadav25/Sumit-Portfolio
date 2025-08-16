import React from 'react';

const Achievements = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 px-6 py-16"
      id="achievements"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-12">
          Achievements & Certifications
        </h2>

         {/* Certificate 3 */}
          <div className="bg-gray-800 shadow-lg shadow-yellow-500/10 rounded-xl p-6 text-left hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold text-white mb-1">💻 Oasis InfoByte AICTE OIB-SIP Web Development Internship</h3>
            <p className="text-sm text-gray-300">
              Completed and  <span className="text-blue-400">Awarded Appreciation Certificate and LOR</span> for outstanding performance.
            </p>
          </div>

           {/* Certificate 4 */}
          <div className="bg-gray-800 shadow-lg shadow-yellow-500/10 rounded-xl p-6 text-left hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold text-white mb-1">🌐 Virtual Web Development Internship</h3>
            <p className="text-sm text-gray-300">
              Completed at <span className="text-blue-400">CodSoft</span>, focusing on responsive design,
              JavaScript interactivity, and real-world project building.
            </p>
          </div>

        <div className="space-y-6">
          {/* Certificate 1 */}
          <div className="bg-gray-800 shadow-lg shadow-yellow-500/10 rounded-xl p-6 text-left hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold text-white mb-1">📜 MERN Stack Development Training</h3>
            <p className="text-sm text-gray-300">
              Completed from <span className="text-blue-400">Saksham Digital Technology</span> (2025)
            </p>
          </div>

          

          {/* Certificate 2 */}
          <div className="bg-gray-800 shadow-lg shadow-yellow-500/10 rounded-xl p-6 text-left hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold text-white mb-1">📊 Data Science on Anaconda</h3>
            <p className="text-sm text-gray-300">
              Participated in <span className="text-blue-400">Sage Winter School</span> workshop
            </p>
          </div>

         

         
        </div>
      </div>
    </section>
  );
};

export default Achievements;
