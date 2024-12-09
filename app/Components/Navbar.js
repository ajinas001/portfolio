'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/About' },
    { label: 'Works', path: '/Works' },
    { label: 'Contact', path: '/Contact' },
  ];

  return (
    <div className="relative text-black">
      <nav className="fixed top-0 left-0   z-50 flex justify-between items-center py-4 px-4 sm:px-4 md:py-8 md:px-12 w-full bg-white">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="text-3xl font-bold cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            AJINAS
          </motion.div>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="sm:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items for Large Screens */}
        <ul className="hidden sm:flex space-x-6 text-gray-800 font-medium text-lg">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer"
                >
                  {item.label}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center space-y-8"
          >
            <button
              className="absolute top-6 right-6 text-gray-800"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="flex flex-col items-center text-gray-800 font-semibold text-3xl ">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={menuItemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                >
                  <Link href={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.2, color: '#6366F1' }}
                      className="cursor-pointer "
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
