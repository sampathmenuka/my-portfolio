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
    <section id="experience" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <h2 className="text-2xl font-bold text-[#4ade80] mb-8 flex items-center whitespace-normal md:whitespace-nowrap after:content-[''] after:block after:h-[1px] after:w-[300px] md:after:w-full md:after:max-w-[15rem] after:bg-[#374151] after:ml-6" data-aos="fade-up">
        Experience
      </h2>
      <div className="grid grid-cols-1 gap-8 max-w-full">
        <div>
          <div className="text-2xl font-semibold mb-6 text-[#ccd6f6]">IEEE Activities</div>

          {experiences.map((exp, index) => (
            <div className="p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start bg-gradient-to-br from-[#1e1e2e]/90 to-[#1a1a2e]/95 border border-[#64ffda]/10 hover:border-[#64ffda]/30 hover:shadow-2xl hover:shadow-[#1a1a2e] hover:-translate-y-2 transition-all duration-300 overflow-hidden mb-6" key={index}>
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-lg font-semibold text-[#ccd6f6] mb-1">{exp.title}</h3>
                <p className="text-[#8892b0] mb-3 text-sm">
                  <span>{exp.organization}</span>
                </p>
                <ul className="list-disc ml-5 mt-2 text-[#8892b0] text-sm gap-1 flex flex-col">
                  {exp.description.map((duty, dutyIndex) => (
                    <li key={dutyIndex}>{duty}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 w-full md:w-[200px] order-1 md:order-2 mb-4 md:mb-0">
                <img src={exp.image} alt={`${exp.title} event`} className="w-full h-auto rounded-lg object-cover shadow-lg" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
