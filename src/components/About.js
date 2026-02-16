import React from 'react';
import './About.css';
import profileImg from '../content/gallery/profile.JPG'; // add your image here

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about-container'>
        <div className='about-text'>
          <p className='section-label'>About</p>
          <h2>
            Crafting nail art that feels effortless and elevated.
          </h2>
          <p className='about-intro'>
            I’m a professional nail technician with a focus on refined details,
            long-lasting wear, and modern silhouettes.
          </p>
          <p>
            From minimalist gloss to sculptural accents, each set is designed to
            match your mood and lifestyle. I blend trend awareness with a calm,
            precise technique so every appointment feels curated.
          </p>
          <div className='about-highlights'>
            <div>
              <span>6+ Years</span>
              Experience
            </div>
            <div>
              <span>200+ Sets</span>
              Custom Designs
            </div>
            <div>
              <span>Studio</span>
              London Based
            </div>
          </div>
        </div>
        <div className='about-image'>
          <div className='about-frame'>
            <img src={profileImg} alt='Profile' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
