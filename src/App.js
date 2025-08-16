import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <Education />
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <Achievements />
      
      <section id="contact"><Contact /></section>
      
      <Footer />
    </div>
  );
}

export default App;
