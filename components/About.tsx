import React from 'react';

export default function About() {
  return (
    <section id="about-me" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <h2 className="text-2xl font-bold text-[#4ade80] mb-8 flex items-center whitespace-normal md:whitespace-nowrap after:content-[''] after:block after:h-[1px] after:w-[300px] md:after:w-full md:after:max-w-[15rem] after:bg-[#374151] after:ml-6" data-aos="fade-up">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-start md:justify-between" data-aos="fade-up" data-aos-delay="100">
        <div className="flex-1 md:max-w-xl">
          <p className="text-[#8892b0] text-lg mb-4 leading-relaxed">
            Hi there! I&apos;m Sampath Menuka Chandimal, a Software Engineering Undergraduate from Sabaragamuwa University of
            Sri Lanka. I specialize in Java, Spring Boot, React.js, and Node.js, with a passion for building reliable
            and scalable web applications from REST APIs and JWT-secured backends to responsive React frontends and robust
            database schemas.
          </p>
          <p className="text-[#8892b0] text-lg mb-4 leading-relaxed">
            I&apos;m currently seeking internship opportunities to apply my skills in real-world projects and gain industry
            experience. I&apos;m enthusiastic about continuous learning and dedicated to delivering high-quality solutions that
            solve meaningful problems.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-[300px] flex justify-center">
          <div className="relative rounded-lg border-2 border-[#4ade80] p-2 transition-transform duration-300 hover:-translate-y-1 w-[300px] max-w-full">
            <img src="/assets/myphoto.svg" alt="Sampath Menuka" className="w-full h-auto rounded-sm block" />
          </div>
        </div>
      </div>
    </section>
  );
}
