import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Fade } from 'react-awesome-reveal';
import { Dialog } from '@headlessui/react';

const projectsData = [

  // https://i.ibb.co.com/84bS0g5g/gadget2.png

  {
    title: 'Smarty Product (Gadget) Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase, MongoDb and implement Payment Gateway. Smarty Product is your one-stop solution for all things gadget-related. Whether you’re looking for the latest computers, smartphones, smartwatches, chargers, or power banks, Smarty Product has everything you need. With a modern and responsive web app, you can easily explore, purchase, and get detailed information about your favorite gadgets!',
    image: 'https://i.ibb.co.com/84bS0g5g/gadget2.png',
    liveLink: 'https://superb-chaja-5589ab.netlify.app/',
    githubRepo: 'https://github.com/Shakaet/Product-MangeMent-Client',
  },


  {
    title: 'Lost & Found Items Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase and MongoDb. An interactive and user-friendly application to help users manage lost and found items with ease. This portal simplifies item submission, updates, and tracking with a modern UI and robust features.This project is designed to assist users in reporting, updating, and retrieving lost or found items efficiently. The platform integrates advanced features like user authentication, smooth animations, and a responsive design to enhance user experience.',
    image: 'https://i.ibb.co.com/RD9CSRY/Screenshot-2025-01-04-221236.png',
    liveLink: 'https://findlostitem-1ef05.web.app/',
    githubRepo: 'https://github.com/Shakaet/Lost-Found-Item-Client',
  },
  {
    title: 'Winter Donation Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase. Winter-Donation is an interactive web application showcasing inspiring stories of generosity and donations. With engaging animations, a responsive design, and reusable components, it highlights the transformative power of kindness.',
    image: 'https://i.ibb.co.com/WPXC8zV/p1.png',
    liveLink: 'https://splendid-pixie-22a5e2.netlify.app/',
    githubRepo: 'https://github.com/Shakaet/react-winter-clothes-donation',
  },
  {
    title: 'Crowdcube Campaign Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase and MongoDb. A dynamic and intuitive platform to explore and support meaningful campaigns. Whether you are looking to create, share, or donate to a cause, we make it simple and impactful.',
    image: 'https://i.ibb.co.com/wB8s0jQ/p2.png',
    liveLink: 'https://crowd-funding-application.web.app/',
    githubRepo: 'https://github.com/Shakaet/phA-10-Client-Crowd_Founding',
  },
  {
    title: 'Animal Adoption Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React and Tailwind CSS.Peddy is a web application designed to help users find and adopt pets. The platform brings families together by providing a streamlined and informative adoption process. Users can browse various pets, sort them by price, and initiate the adoption process seamlessly.',
    image: 'https://i.ibb.co.com/XtvhYTQ/p3.png',
    liveLink: 'https://superlative-dusk-352c79.netlify.app/',
    githubRepo: 'https://github.com/Shakaet/Cats-Dog_API_website',
  },
  // {
  //   title: 'Flood Donation WebSite',
  //   category: 'Web Development',
  //   description: 'A responsive portfolio built with HTML, CSS, Tailwind CSS and JavaScript(DOM)',
  //   image: 'https://i.ibb.co.com/dJ8W6Rs/p6.png',
  //   liveLink: 'https://minhazuddin10.github.io/DonationProjects/index.html',
  //   githubRepo: 'https://github.com/Shakaet/floodDonationbyDom',
  // },
  {
    title: 'Ultimate Cricket Match Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React and Tailwind CSS. The Cricket Player Auction App is a dynamic web application that provides a platform for managing player auctions, where users can add and remove players based on available funds. With a user-friendly interface and real-time notifications, this app offers a smooth and enjoyable experience for cricket fans!',
    image: 'https://i.ibb.co.com/fMwb0mS/p5.png',
    liveLink: 'https://tourmaline-duckanoo-6dad00.netlify.app/',
    githubRepo: 'https://github.com/Shakaet/react-cricket-players',
  },
  {
    title: 'Gadget Store Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React and Tailwind CSS. The website features a well-organized product catalog with categories like Computers, Phones, and Smart Watches, ensuring easy navigation. Users can add items to a wishlist or read list, stored in localStorage for seamless access later. Products display real-time availability status, with clear indicators for out-of-stock items. Toast notifications provide instant feedback when adding products to lists. Each product includes detailed specifications, helping users make informed purchasing decisions.',
    image: 'https://i.ibb.co.com/80cHcCj/p4.png',
    liveLink: 'https://storied-quokka-ac9054.netlify.app/',
    githubRepo: 'https://github.com/Shakaet/react-gadget-store',
  },
  // {
  //   title: 'Fitness Website',
  //   category: 'Web Development',
  //   description: 'A responsive portfolio built with HTML and CSS',
  //   image: 'https://i.ibb.co.com/vPxT5h2/p8.png',
  //   liveLink: 'https://minhazuddin10.github.io/Responsive_Css/',
  //   githubRepo: 'https://github.com/Shakaet/web_assignment2',
  // },
  // {
  //   title: 'Smart Home Website',
  //   category: 'Web Development',
  //   description: 'A responsive portfolio built with HTML, CSS and Tailwind CSS',
  //   image: 'https://i.ibb.co.com/WpkVcY9/p7.png',
  //   liveLink: 'https://minhazuddin10.github.io/smart_home_assignment/',
  //   githubRepo: 'https://github.com/Shakaet/smart_home_website',
  // },
 

];

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
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
                <p className="text-gray-300 my-2">{project.description.slice(0,39)}</p>
              </div>

              {/* Live Link Button */}
              <motion.div
                className="absolute inset-0 flex flex-col gap-3 items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500 text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-purple-400"
                  data-tooltip-id={project.title}
                >
                  View Live
                </a> 
                <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-500"
                  >
                    GitHub Repo
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-purple-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-purple-400"
                  >
                    View Details
                  </button>
                
                
                
              </motion.div>
              
             
              <Tooltip id={project.title} place="top" content={`Visit ${project.title}`} />



              

              
            </motion.div>
            
            
          ))}
        </div>
                </Fade>

       
      </div>

      {/* Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 text-white p-6 rounded-lg shadow-xl relative z-10 max-w-lg w-full"
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-400"
              >
                Close
              </button>
            </div>
          </motion.div>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
