import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Fade } from 'react-awesome-reveal';

const projectsData = [
  {
    title: 'Lost & Found Items Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase and MongoDb',
    image: 'https://i.ibb.co.com/RD9CSRY/Screenshot-2025-01-04-221236.png',
    liveLink: 'https://findlostitem-1ef05.web.app/',
  },
  {
    title: 'Winter Donation Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase',
    image: 'https://i.ibb.co.com/WPXC8zV/p1.png',
    liveLink: 'https://splendid-pixie-22a5e2.netlify.app/',
  },
  {
    title: 'Crowdcube Campaign Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase and MongoDb',
    image: 'https://i.ibb.co.com/wB8s0jQ/p2.png',
    liveLink: 'https://crowd-funding-application.web.app/',
  },
  {
    title: 'Animal Adoption Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React and Tailwind CSS',
    image: 'https://i.ibb.co.com/XtvhYTQ/p3.png',
    liveLink: 'https://superlative-dusk-352c79.netlify.app/',
  },
  {
    title: 'Flood Donation WebSite',
    category: 'Web Development',
    description: 'A responsive portfolio built with HTML, CSS, Tailwind CSS and JavaScript(DOM)',
    image: 'https://i.ibb.co.com/dJ8W6Rs/p6.png',
    liveLink: 'https://minhazuddin10.github.io/DonationProjects/index.html',
  },
  {
    title: 'Ultimate Cricket Match Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React and Tailwind CSS',
    image: 'https://i.ibb.co.com/fMwb0mS/p5.png',
    liveLink: 'https://tourmaline-duckanoo-6dad00.netlify.app/',
  },
  {
    title: 'Gadget Store Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React and Tailwind CSS',
    image: 'https://i.ibb.co.com/80cHcCj/p4.png',
    liveLink: 'https://storied-quokka-ac9054.netlify.app/',
  },
  {
    title: 'Fitness Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with HTML and CSS',
    image: 'https://i.ibb.co.com/vPxT5h2/p8.png',
    liveLink: 'https://minhazuddin10.github.io/Responsive_Css/',
  },
  {
    title: 'Smart Home Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with HTML, CSS and Tailwind CSS',
    image: 'https://i.ibb.co.com/WpkVcY9/p7.png',
    liveLink: 'https://minhazuddin10.github.io/smart_home_assignment/',
  },
 

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Fade direction="left" duration={1500}>
      <motion.h2
          className="text-4xl font-bold text-center mb-28"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My <span className="text-purple-400">Projects</span>
        </motion.h2>
        </Fade>

        <Fade direction="right" duration={1500}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform relative group"
              initial={{ opacity: 0, y: 50 }} // Initial position from bottom (can change to `x` for horizontal movement)
              animate={{ opacity: 1, y: 0 }} // Animate to default position
              transition={{
                duration: 1,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }} // Hover effect for scaling
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                <p className="text-gray-300 my-2">{project.description}</p>
              </div>

              {/* Live Link Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-400"
                  data-tooltip-id={project.title}
                >
                  View Live
                </a>
              </motion.div>
              <Tooltip id={project.title} place="top" content={`Visit ${project.title}`} />
            </motion.div>
          ))}
        </div>
                </Fade>

       
      </div>
    </section>
  );
};

export default Projects;
