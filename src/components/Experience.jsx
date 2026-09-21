import React from 'react';
import { Fade } from 'react-awesome-reveal';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Classic IT & Sky Mart Ltd',
    link: 'https://classicit.com.bd/',
    duration: 'Nov 2025 – Present',
    mode: 'Onsite',
    current: true,
  },
  {
    role: 'Full Stack Developer',
    company: 'World Wise Scholars',
    link: 'https://www.facebook.com/worldwisesocial',
    duration: 'Sep 2025 – Mar 2026',
    mode: 'Remote',
  },
  {
    role: 'Full Stack Developer',
    company: 'Infinoid Technologies',
    link: 'https://www.infinoid.com/',
    duration: 'Mar 2025 – Jun 2025',
    mode: 'Remote',
  },
  {
    role: 'Intern Developer',
    company: 'Stamasoft Technologies',
    link: 'https://stamasoft.com/',
    duration: '2024 – 2025',
    mode: 'Onsite',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="down" duration={1200}>
          <h2 className="text-4xl font-bold text-center mb-16">
            Work <span className="text-purple-400">Experience</span>
          </h2>
        </Fade>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-pink-500 via-purple-400 to-yellow-300 md:-translate-x-1/2"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Fade
                  key={index}
                  direction={isLeft ? 'right' : 'left'}
                  duration={1000}
                  delay={index * 150}
                  triggerOnce
                >
                  <div
                    className={`relative flex items-start md:items-center ${
                      isLeft ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* dot */}
                    <span
                      className={`absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-900 z-10 ${
                        exp.current
                          ? 'bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,0.9)]'
                          : 'bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.7)]'
                      }`}
                    ></span>

                    <div
                      className={`w-full pl-12 md:pl-0 md:w-[calc(50%-2.5rem)] ${
                        isLeft ? 'md:pr-10' : 'md:pl-10'
                      }`}
                    >
                      <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-5 shadow-lg hover:shadow-2xl hover:border-pink-500/50 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300">
                            <i className="fa-solid fa-briefcase"></i>
                          </span>
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                        </div>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-200 font-medium hover:text-pink-400 transition-colors inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                        <p className="text-sm text-gray-400 italic mt-1">{exp.duration}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border ${
                              exp.mode === 'Onsite'
                                ? 'bg-sky-400/10 text-sky-300 border-sky-400/30'
                                : 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30'
                            }`}
                          >
                            <i className={`fa-solid ${exp.mode === 'Onsite' ? 'fa-building' : 'fa-house-laptop'} text-[10px]`}></i>
                            {exp.mode}
                          </span>
                          {exp.current && (
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-yellow-300/10 text-yellow-300 border border-yellow-300/30">
                              Currently Working
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
