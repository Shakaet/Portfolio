import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Reveal } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import profileAnimation from '../assets/aboutMe.json'; // Replace with the actual path to your Lottie file
import profileImage from '../assets/p4_1.png'; // Replace with your profile image

const AboutMe = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="about" className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Profile Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Lottie animationData={profileAnimation} loop className="w-96 h-96" />
          </motion.div>

          {/* Bio Section */}
          <div>
            <Reveal effect="fadeInUp" duration={1500}>
              <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About Me</h2>
            </Reveal>
            <Reveal effect="fadeInUp" duration={1500} delay={200}>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                Hello! I am <span className="font-bold text-white text-xl">
                  <Typewriter words={['Abdulla Al Shakaet']} loop={false} cursor />
                </span>. I am a passionate web developer with a strong background in modern web technologies. I love crafting beautiful, user-friendly websites and solving challenging problems.
              </p>
            </Reveal>
            <Reveal effect="fadeInUp" duration={1500} delay={400}>
              <p className="text-lg leading-relaxed text-gray-300">
                Outside of coding, I enjoy exploring new tech, photography, and playing video games. Let’s create something amazing together!
              </p>
            </Reveal>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AboutMe;
