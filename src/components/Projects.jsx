import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Fade } from 'react-awesome-reveal';
import { Dialog } from '@headlessui/react';

const projectsData = [

  // https://i.ibb.co.com/84bS0g5g/gadget2.png
  {
    title: 'Payroll Management System',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebaseand MongoDb.Online Payroll is a feature-rich, role-based web application tailored for Admins and Employees. It simplifies the management of employee details, attendance tracking, task assignments, leave requests, daily updates, and salary payments using Stripe.',
    image: 'https://i.ibb.co/v4q06wKp/payroll.png',
    liveLink: 'https://gilded-centaur-ce11bb.netlify.app/',
    githubRepo: 'https://github.com/Shakaet/Payroll-Management-Client',
    githubBackend: 'https://github.com/Shakaet/Payroll-Management-Server',
  },
  {
    title: 'Business Analytics Dashboard (DataPulse) Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebaseand MongoDb.DataPulse is a comprehensive business analytics dashboard designed to manage user transactions and revenue data. It offers two panels: User and Admin. The User panel allows individuals to add, view, and manage their transactions, while the Admin panel provides more advanced features such as managing user roles, deleting users, and managing revenue (adding, updating, and viewing revenue). Both user types can update their profiles, and they can view graphical representations of user, revenue, and transaction data in the dashboards home section.',
    image: 'https://i.ibb.co/qMpT1w3R/dashh.png',
    liveLink: 'https://melodious-treacle-a31ff2.netlify.app/',
    githubRepo: 'https://github.com/Shakaet/Business-Analytics-Dashboard-Client',
    githubBackend: 'https://github.com/Shakaet/Business-Analytics-Dashboard-Server',
  },
 

  {
    title: 'Smarty Product (Gadget) Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase, MongoDb and implement Payment Gateway. Smarty Product is your one-stop solution for all things gadget-related. Whether you’re looking for the latest computers, smartphones, smartwatches, chargers, or power banks, Smarty Product has everything you need. With a modern and responsive web app, you can easily explore, purchase, and get detailed information about your favorite gadgets!',
    image: 'https://i.ibb.co.com/84bS0g5g/gadget2.png',
    liveLink: 'https://superb-chaja-5589ab.netlify.app/',
    githubRepo: 'https://github.com/Shakaet/Product-MangeMent-Client',
    githubBackend: 'https://github.com/Shakaet/Product-MangeMent-Server',
  },
  


  {
    title: 'Lost & Found Items Website',
    category: 'Web Development',
    description: 'A responsive portfolio built with React, Tailwind CSS, Firebase and MongoDb. An interactive and user-friendly application to help users manage lost and found items with ease. This portal simplifies item submission, updates, and tracking with a modern UI and robust features.This project is designed to assist users in reporting, updating, and retrieving lost or found items efficiently. The platform integrates advanced features like user authentication, smooth animations, and a responsive design to enhance user experience.',
    image: 'https://i.ibb.co.com/RD9CSRY/Screenshot-2025-01-04-221236.png',
    liveLink: 'https://findlostitem-1ef05.web.app/',
    githubRepo: 'https://github.com/Shakaet/Lost-Found-Item-Client',
    githubBackend: 'https://github.com/Shakaet/Lost-Found-Item-Server',
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
    githubBackend: 'https://github.com/Shakaet/Lost-Found-Item-Server',
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };
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
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-500"
                  >
                    Server Code
                  </a>
                )}
                <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-500"
                  >
                    Client Code
                  </a>
                  <button
                    onClick={() => openProject(project)}
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

      {/* Full-screen Details Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="fixed overflow-y-auto inset-0 z-50">
          <div className="absolute inset-0 bg-black/75"></div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex min-h-screen items-start overflow-y-auto"
          >
            <div className="mx-auto w-full max-w-6xl bg-[#0f172a] text-white rounded-xl overflow-hidden shadow-2xl my-6 border border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <button onClick={() => setSelectedProject(null)} className="text-sm text-gray-300 hover:text-white">
                  ← Back to Projects
                </button>
                <button onClick={() => setSelectedProject(null)} className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20">Close</button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Left: Slider */}
                <div className="lg:col-span-2">
                  <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                    {(() => {
                      const slides = (selectedProject.images && selectedProject.images.length > 0)
                        ? selectedProject.images
                        : [selectedProject.image];
                      const safeIndex = ((currentSlide % slides.length) + slides.length) % slides.length;
                      return (
                        <img src={slides[safeIndex]} alt={`${selectedProject.title} ${safeIndex+1}`} className="w-full h-full object-cover" />
                      );
                    })()}
                    {/* Arrows */}
                    <button
                      aria-label="Previous image"
                      onClick={() => setCurrentSlide((s) => s - 1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center"
                    >
                      ‹
                    </button>
                    <button
                      aria-label="Next image"
                      onClick={() => setCurrentSlide((s) => s + 1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center"
                    >
                      ›
                    </button>
                  </div>
                  {/* Thumbnails */}
                  <div className="mt-4 flex gap-3 overflow-x-auto">
                    {((selectedProject.images && selectedProject.images.length > 0)
                      ? selectedProject.images
                      : [selectedProject.image]).slice(0, 6).map((src, idx) => (
                      <button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-16 w-24 rounded-md overflow-hidden border ${currentSlide === idx ? 'border-pink-400' : 'border-white/10'}`}>
                        <img src={src} alt={`${selectedProject.title} thumb ${idx+1}`} className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Info */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold">{selectedProject.title}</h2>
                  <p className="mt-3 text-gray-300">{selectedProject.description}</p>
                  {/* Tech chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(selectedProject.tech || [selectedProject.category]).filter(Boolean).map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10">{t}</span>
                    ))}
                  </div>
                  {/* Key features */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold">Key Features</h3>
                    <ul className="mt-3 space-y-2 text-gray-200 list-disc list-inside">
                      {(selectedProject.features || [
                        'Responsive UI with smooth animations',
                        'Clean component structure and reusable parts',
                        'Deployed live with fast assets',
                      ]).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  {/* CTA buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {selectedProject.liveLink && (
                      <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
                        <span className="h-2.5 w-2.5 rounded-full bg-white"></span>
                        Live Demo
                      </a>
                    )}
                    {(selectedProject.githubFrontend || selectedProject.githubRepo) && (
                      <a href={selectedProject.githubFrontend || selectedProject.githubRepo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-600 hover:bg-sky-500 text-white font-semibold">
                        <span className="h-2.5 w-2.5 rounded-full bg-white"></span>
                        Client Code
                      </a>
                    )}
                    {selectedProject.githubBackend && (
                      <a href={selectedProject.githubBackend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-500 text-white font-semibold">
                        <span className="h-2.5 w-2.5 rounded-full bg-white"></span>
                        Server Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
