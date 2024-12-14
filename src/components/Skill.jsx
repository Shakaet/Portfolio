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
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Fade direction="right" duration={1500}>
          <h2 className="text-4xl font-bold text-center mb-28">
            My <span className="text-purple-400">Skills</span>
          </h2>
        </Fade>
          

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
