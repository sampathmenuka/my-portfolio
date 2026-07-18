import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting" data-aos="fade-up" data-aos-delay="100">
          Hi, I am
        </p>
        <h1 className="hero-name" data-aos="fade-up" data-aos-delay="200">
          Sampath Menuka Chandimal
        </h1>
        <div className="hero-bottom">
          <div className="hero-text">
            <h2 className="hero-tagline" data-aos="fade-up" data-aos-delay="300">
              I build frontend, backend, and full-stack web applications.
            </h2>
            <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
              Software Engineering Undergraduate skilled in <strong>React.js</strong>, <strong>Node.js</strong>,{' '}
              <strong>Spring Boot</strong>, <strong>Java</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>. I
              build REST APIs, implement JWT auth, design databases, and craft responsive UIs from concept to deployment.
            </p>
            <a href="#contact" className="hero-cta" data-aos="fade-up" data-aos-delay="500">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
