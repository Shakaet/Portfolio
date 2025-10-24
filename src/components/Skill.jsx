import React from 'react';
import Reveal, { Fade } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import skillsAnimation from '../assets/skill.json'; // Replace with your Lottie file path

const Skill = () => {
  const skillSet = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 88 },
    { name: 'TypeScript', level: 85 },
    { name: 'Mongoose', level: 85 },
    { name: 'Redux', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Firebase', level: 82 },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
     

      <Fade direction="right" duration={1500}>
          <h2 className="text-4xl font-bold text-center mb-28">
            My <span className="text-purple-400">Skills</span>
          </h2>
        </Fade>

        <div className="mb-12 marquee marquee--pause">
        <div className="marquee__track">
          {[
            { name: 'HTML', icon: 'fa-brands fa-html5', color: '#e34f26' },
            { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
            { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
            { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178C6' },
            { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
            { name: 'Redux', icon: 'fa-solid fa-diagram-project', color: '#764abc' },
            { name: 'Next.js', icon: 'fa-solid fa-n', color: '#ffffff' },
            { name: 'Node.js', icon: 'fa-brands fa-node', color: '#3C873A' },
            { name: 'Express.js', icon: 'fa-solid fa-server', color: '#999999' },
            { name: 'MongoDB', icon: 'fa-solid fa-database', color: '#47A248' },
            { name: 'Mongoose', icon: 'fa-solid fa-leaf', color: '#880e0e' },
            { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38BDF8' },
            { name: 'Firebase', icon: 'fa-solid fa-fire', color: '#FFCA28' },
          ].concat([
            { name: 'HTML', icon: 'fa-brands fa-html5', color: '#e34f26' },
            { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
            { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
            { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178C6' },
            { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
            { name: 'Redux', icon: 'fa-solid fa-diagram-project', color: '#764abc' },
            { name: 'Next.js', icon: 'fa-solid fa-n', color: '#ffffff' },
            { name: 'Node.js', icon: 'fa-brands fa-node', color: '#3C873A' },
            { name: 'Express.js', icon: 'fa-solid fa-server', color: '#999999' },
            { name: 'MongoDB', icon: 'fa-solid fa-database', color: '#47A248' },
            { name: 'Mongoose', icon: 'fa-solid fa-leaf', color: '#880e0e' },
            { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38BDF8' },
            { name: 'Firebase', icon: 'fa-solid fa-fire', color: '#FFCA28' },
          ]).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              <i className={`${item.icon}`} style={{ color: item.color }}></i>
              <span className="text-sm text-gray-200">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
          

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Fade direction="left" duration={1500}>
              <Lottie animationData={skillsAnimation} loop={true} className="max-w-md mx-auto" />
            </Fade>
          </div>

          {/* Skills Details */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {skillSet.map((skill, index) => (
                <Fade
                  key={skill.name}
                  cascade
                  duration={1200}
                  delay={index * 200} // Stagger effect for each skill
                >
                  <div className="flex items-center justify-between hover:scale-105 transition-transform">
                    <span className="text-xl font-medium">{skill.name}</span>
                    <div className="relative w-3/5 h-6 bg-gray-700 rounded-full">
                      <div
                        className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold">{skill.level}%</span>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
