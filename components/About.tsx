import React from 'react';

export default function About() {
  return (
    <section id="about-me" className="section-container">
      <h2 className="section-title" data-aos="fade-up">
        About Me
      </h2>
      <div className="about-content" data-aos="fade-up" data-aos-delay="100">
        <div className="about-text">
          <p className="section-text">
            Hi there! I&apos;m Sampath Menuka Chandimal, a Software Engineering Undergraduate from Sabaragamuwa University of
            Sri Lanka. I specialize in Java, Spring Boot, React.js, and Node.js, with a passion for building reliable
            and scalable web applications from REST APIs and JWT-secured backends to responsive React frontends and robust
            database schemas.
          </p>
          <p className="section-text">
            I&apos;m currently seeking internship opportunities to apply my skills in real-world projects and gain industry
            experience. I&apos;m enthusiastic about continuous learning and dedicated to delivering high-quality solutions that
            solve meaningful problems.
          </p>
        </div>
        <div className="about-image-wrapper">
          <div className="about-image">
            <img src="/assets/myphoto.svg" alt="Sampath Menuka" />
          </div>
        </div>
      </div>
    </section>
  );
}
