import React from 'react';

interface ExperienceItem {
  title: string;
  organization: string;
  description: string[];
  image: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Project Chair',
    organization: 'NEXORA 1.0 – IEEE WIE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Led and coordinated the NEXORA 1.0 project as Project Chair.',
      'Managed project planning, execution, and team coordination for successful event delivery.'
    ],
    image: '/assets/NEXORA.png'
  },
  {
    title: 'Public Speaker',
    organization: 'Career Compass – IEEE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Delivered presentations and shared insights on career development and professional growth.',
      'Engaged with students to provide guidance and mentorship on career pathways.'
    ],
    image: '/assets/public_speaker.png'
  },
  {
    title: 'Instructor',
    organization: 'HOPE – IEEE WIE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Conducted instructional sessions and workshops for students in the HOPE program.',
      'Provided technical guidance and support to help participants develop their skills.'
    ],
    image: '/assets/hope.jpg'
  },
  {
    title: 'Logistics Team Member',
    organization: 'IEEE Day – IEEE Student Branch, Sabaragamuwa University of Sri Lanka',
    description: [
      'Coordinated logistics and operational aspects for IEEE Day celebrations.',
      'Ensured smooth execution of event activities and supported team operations.'
    ],
    image: '/assets/logistic.jpg'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title" data-aos="fade-up">
        Experience
      </h2>
      <div className="experience-grid">
        <div>
          <div className="experience-heading">IEEE Activities</div>

          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div>
                <h3 className="job-title">{exp.title}</h3>
                <p className="company-info">
                  <span>{exp.organization}</span>
                </p>
                <ul className="job-duties">
                  {exp.description.map((duty, dutyIndex) => (
                    <li key={dutyIndex}>{duty}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-image">
                <img src={exp.image} alt={`${exp.title} event`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
