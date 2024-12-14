import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <p className="text-xl font-bold text-blue-400">
            &copy; {new Date().getFullYear()} <span className="font-extrabold">Abdulla Al Shakaet</span>. All rights reserved.
          </p>
        </motion.div>
        <motion.div
          className="mt-2 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 50, delay: 0.2 }}
        >
          <p className="text-sm font-bold mb-3 text-yellow-400">
            Designed and developed with ❤️ in React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
