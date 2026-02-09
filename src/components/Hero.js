import React from 'react';

import './Hero.css';
const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero-parallax' aria-hidden='true'>
        <div className='hero-layer layer-image' />
        <div className='hero-layer layer-glow' />
        <div className='hero-layer layer-noise' />
      </div>
      <div className='hero-content'>
        <p className='hero-eyebrow'>Nail Artist • Designer • Beauty Studio</p>
        <h1>LANA NAILS</h1>
        <p className='hero-subtitle'>
          Modern, clean nail art with a soft edge. Precision work, elevated
          palettes, and a signature shine.
        </p>
        <div className='hero-actions'>
          <a className='btn btn-primary' href='#projects'>
            View Work
          </a>
          <a className='btn btn-ghost' href='#contact'>
            Book a Session
          </a>
        </div>
      </div>
      <div className='hero-scroll'>Scroll</div>npm start -- --host 0.0.0.0
    </section>
  );
};

export default Hero;
