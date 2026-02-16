import React from 'react';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='projects-header'>
        <p className='section-label'>Portfolio</p>
        <h2>Selected sets & signature styles.</h2>
        <p className='projects-intro'>
          A snapshot of my most requested looks. Each design is adapted to your
          nail shape, tone, and day-to-day rhythm.
        </p>
      </div>
      <div className='project-list'>
        <article className='project'>
          <h3>Glass French</h3>
          <p>Micro-french tips with translucent blush and chrome edge.</p>
          <span>Gloss • Detail • Minimal</span>
        </article>
        <article className='project'>
          <h3>Velvet Aura</h3>
          <p>Soft gradient aura with velvet matte finish and fine line art.</p>
          <span>Matte • Gradient • Editorial</span>
        </article>
        <article className='project'>
          <h3>Studio Sculpt</h3>
          <p>Structured almond set with sculpted accents and glazed topcoat.</p>
          <span>Sculpt • Shine • Statement</span>
        </article>
      </div>
    </section>
  );
};

export default Projects;
