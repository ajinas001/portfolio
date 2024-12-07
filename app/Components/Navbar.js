'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For toggling the mobile menu

  const DURATION = 0.25;
  const STAGGER = 0.025;

  const textVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };


  const createMotionSpans = (text, direction) =>
    text.split('').map((char, i) => (
      <motion.span
        key={i}
        variants={{
          initial: { y: direction === "up" ? 0 : "100%" },
          hovered: { y: direction === "up" ? "-100%" : 0 },
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * i,
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ));

  const FlipText = ({ text }) => (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <div>{createMotionSpans(text, "up")}</div>
      <div className="absolute inset-0">{createMotionSpans(text, "down")}</div>
    </motion.div>
  );

  return (
    <div className="relative text-black">
      <nav className="fixed top-0 left-0 z-50 flex justify-between items-center py-4 md:py-8 px-4 sm:px-8 md:px-16 w-full ">
        {/* Logo */}
        <motion.div variants={textVariants} initial='hidden' animate='visible' className="text-3xl font-bold">AJINAS</motion.div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden">
          <button className="text-gray-800" onClick={() => setIsOpen(!isOpen)}>
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
        </div>

        {/* Menu Items for Large Screens */}
        <motion.ul variants={textVariants} initial='hidden' animate='visible' className="hidden sm:flex space-x-6 text-black font-medium text-lg">
          <li>
            <FlipText text="Home" />
          </li>
          <li>
            <FlipText text="About" />
          </li>
          <li>
            <FlipText text="Works" />
          </li>
          <li>
            <FlipText text="Contact" />
          </li>
          {/* Dark Mode Toggle */}
          <li>
          <button
                onClick={toggleTheme}
                className={`w-12 h-5 rounded-full flex items-center px-1 transition-colors ${isDarkMode ? 'bg-black' : 'bg-gray-200'
                  }`}
              >
                <div
                  className={`w-5 h-5 rounded-full transition-transform transform ${isDarkMode ? 'translate-x-6 bg-white' : 'translate-x-0 bg-black'
                    }`}
                ></div>
              </button>
          </li>
        </motion.ul>
      </nav>

      {/* Mobile Menu Items (Toggleable) */}
      {isOpen && (
        <div className="sm:hidden absolute top-0 left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col space-y-4 text-gray-800 font-medium text-lg py-4 px-8 mt-12">
            <li>
              <FlipText text="Home" />
            </li>
            <li>
              <FlipText text="About" />
            </li>
            <li>
              <FlipText text="Works" />
            </li>
            <li>
              <FlipText text="Contact" />
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${isDarkMode ? 'bg-black' : 'bg-gray-200'
                  }`}
              >
                <div
                  className={`w-5 h-5 rounded-full transition-transform transform ${isDarkMode ? 'translate-x-6 bg-white' : 'translate-x-0 bg-black'
                    }`}
                ></div>
              </button>
              <>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" defaultValue="" type="checkbox" />
                  <div className="peer ring-2 ring-gray-500 bg-gradient-to-r from-rose-400 to-red-900 rounded-full outline-none duration-500
                   after:duration-300 w-10 h-5  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-emerald-500
                    peer-checked:to-emerald-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-500 
                     after:content-[''] after:rounded-full after:absolute after:outline-none after:h-12 after:w-12 after:bg-gray-900
                      after:-top-2 after:-left-2 after:flex after:justify-center after:items-center after:border-4 after:border-gray-500
                        peer-checked:after:translate-x-14"></div>
                </label>
              </>

            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
