import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import { Reveal } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import animationData from "../assets/anim.json";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close the mobile menu after navigation
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:bg-gray-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <div className="text-white font-bold text-xl flex items-center space-x-2">
            <Lottie animationData={animationData} loop={true} className="h-8 w-8" />
            <a href="#" className="hover:text-gray-300 transition duration-300 font-extrabold text-3xl">
              <Typewriter words={['Abdulla Al Shakaet']} loop cursor />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <Reveal effect="fadeIn" duration={1500} delay={index * 200} key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-3xl dark:text-gray-300 relative group hover:text-xl hover:text-black hover:font-bold font-bold "
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute left-0 -bottom-3 w-0 h-1 bg-gray-300 dark:bg-white transition-all duration-300 group-hover:w-1/2 mx-auto"></span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white"
              data-tooltip-id="menu-tooltip"
              data-tooltip-content="Open Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <Tooltip id="menu-tooltip" />
          </div>
        </div>

        {/* Mobile Menu (Sliding Effect) */}
        <motion.div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:bg-gray-800 z-50 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ x: '-100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center space-y-6 mt-20">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white dark:text-gray-300 text-2xl transition duration-300 hover:text-xl hover:text-black hover:font-bold group-hover:w-1/2 mx-auto"
              >
                {item}
                <span className="absolute left-0 -bottom-3 w-0 h-1 bg-gray-300 dark:bg-white transition-all duration-300 group-hover:w-1/2 mx-auto"></span>
              </a>
            ))}
            <button onClick={toggleMobileMenu} className="text-white text-xl mt-4 hover:text-gray-300 font-extrabold">
              Close Menu
            </button>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
