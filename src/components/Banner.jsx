import React from 'react';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/p4_1.png';
import resume from "../assets/updateResume.pdf"
import 'animate.css';
import animationData from "../assets/banner.json"; // Replace with your Lottie animation file path

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Banner = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white min-h-screen flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4 md:px-0">
         <div
                  className="mt-12 flex justify-center relative w-2/3 mx-auto mb-10"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <motion.img
                    src={profileImage}
                    alt="Profile"
                    className="w-60 h-60 rounded-full border-4 border-pink-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                 
                </div>
        <Reveal keyframes={fadeInUp} delay={300}>
          <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeInDown">
            Hi, I'm <span className="text-yellow-300">Abdulla Al Shakaet</span>
          </h1>
        </Reveal>

        <Reveal keyframes={fadeInUp} delay={600}>
          <p className="mt-4 text-xl md:text-2xl animate__animated animate__fadeInUp">
            <Typewriter
              words={['Web Developer.', 'React Enthusiast.', 'JavaScript Ninja.','Frontend Developer.','Full Stack Developer.']}
              loop
              cursor
            />
          </p>
        </Reveal>

        <Reveal keyframes={fadeInUp} delay={900}>
          <div className="mt-8 flex justify-center gap-4 animate__animated animate__zoomIn">
            <a
              href="#projects"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transform transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black hover:scale-105 transform transition duration-300"
            >
              Contact Me
            </a>
            <a href={resume} download="resume"
              
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black hover:scale-105 transform transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 left-10 h-16 w-16 bg-yellow-300 rounded-full shadow-lg"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute top-20 right-20 h-20 w-20 bg-pink-500 rounded-full shadow-lg"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
    </section>
  );
};

export default Banner;
