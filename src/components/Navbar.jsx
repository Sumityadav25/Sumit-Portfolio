import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <h1 className="text-yellow-400 text-xl font-bold">👨‍💻Sumit.Dev</h1>

        <div className="hidden sm:flex space-x-5 text-sm font-medium text-gray-200">
          <button onClick={() => scrollTo('hero')} className="hover:text-yellow-400 transition">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:text-yellow-400 transition">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-yellow-400 transition">Projects</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-yellow-400 transition">Skills</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-yellow-400 transition">Contact</button>

          <a
            href="/Sumit_Kumar_Yadav_Resume.pdf"
            download
            className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-500 transition font-semibold"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
