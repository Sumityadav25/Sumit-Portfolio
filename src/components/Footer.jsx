import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white pt-10 pb-6 mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Glowing line */}
        <div className="w-24 h-1 mx-auto mb-6 bg-yellow-400 rounded-full animate-pulse shadow-yellow-400 shadow-md"></div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4 text-2xl">
          <a
            href="https://github.com/Sumityadav25"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-yadav-8b3832287"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 tracking-wide">
          © {new Date().getFullYear()} Sumit Kumar Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
