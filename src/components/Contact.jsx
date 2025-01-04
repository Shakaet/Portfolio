import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="left" duration={1500}>
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in <span className="text-purple-400">Touch</span>
          </motion.h2>
        </Fade>


        <Fade direction="right" duration={1500}>
        <motion.div
          className="lg:flex lg:space-x-12 mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

            
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-center mb-6">Contact Form</h3>
            {isSubmitted && (
              <div className="text-green-400 mb-4 text-center">Thank you for reaching out! I’ll get back to you soon.</div>
            )}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-400 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>

          {/* Social Links & Location */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <Fade direction="right" duration={1500}>
              <h3 className="text-2xl font-bold text-center mb-6">Connect with Me</h3>
            </Fade>
            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://www.linkedin.com/in/shakaet/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-purple-400"
                data-tooltip-id="linkedin"
                whileHover={{ scale: 1.2 }}
              >
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
<path d="M 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.8007812 6.3007812 C 6.9007812 6.3007812 6.4003906 6.8 6.4003906 7.5 C 6.4003906 8.2 6.8992188 8.6992188 7.6992188 8.6992188 C 8.5992187 8.6992187 9.0996094 8.2 9.0996094 7.5 C 9.0996094 6.8 8.6007813 6.3007812 7.8007812 6.3007812 z M 6.5 10 L 6.5 17 L 9 17 L 9 10 L 6.5 10 z M 11.099609 10 L 11.099609 17 L 13.599609 17 L 13.599609 13.199219 C 13.599609 12.099219 14.499219 11.900391 14.699219 11.900391 C 14.899219 11.900391 15.599609 12.099219 15.599609 13.199219 L 15.599609 17 L 18 17 L 18 13.199219 C 18 10.999219 17.000781 10 15.800781 10 C 14.600781 10 13.899609 10.4 13.599609 11 L 13.599609 10 L 11.099609 10 z"></path>
</svg>
              </motion.a>
              <motion.a
                href="https://github.com/Shakaet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-purple-400"
                data-tooltip-id="github"
                whileHover={{ scale: 1.2 }}
              >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
</svg>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-purple-400"
                data-tooltip-id="twitter"
                whileHover={{ scale: 1.2 }}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
</svg>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/md.shakaet/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-purple-400"
                data-tooltip-id="github"
                whileHover={{ scale: 1.2 }}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
</svg>
              </motion.a>
              
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-xl font-semibold mb-2">Location</h4>
              <p className="text-lg text-gray-300">Chittagong , Bangladesh</p>
            </div>
          </div>
        </motion.div>
            
              
            </Fade>

       
        
      </div>
    </section>
  );
};

export default Contact;
