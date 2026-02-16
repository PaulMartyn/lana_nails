import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const updateScroll = () => {
      document.documentElement.style.setProperty(
        '--scrollY',
        `${window.scrollY}px`
      );
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className='App'>
      <Navbar />   
      <Hero id='hero' />
      <About id='about' />
      <div className='parallax-band band-one' aria-hidden='true' />
      <Projects id='projects' />
      <div className='parallax-band band-two' aria-hidden='true' />
      <Contact id='contact' />

    </div>
  );
}

export default App;
