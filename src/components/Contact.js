import React from 'react';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-card'>
        <p className='section-label'>Contact</p>
        <h2>Let’s design your next set.</h2>
        <p>
          Share your inspiration, timeline, and preferred length. I’ll get back
          with availability and a tailored recommendation.
        </p>
        <div className='contact-actions'>
          <a className='btn btn-primary' href='mailto:svmaltseva18@icloud.com'>
            Email Me
          </a>
          <a className='btn btn-ghost' href='tel:+447767598799'>
            Call Studio
          </a>
        </div>
        <div className='contact-details'>
          <span>svmaltseva18@icloud.com</span>
          <span>+44 7767 598799</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
