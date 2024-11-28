'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For toggling the mobile menu

  const DURATION = 0.25;
  const STAGGER = 0.025;

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
    <div className="relative">
      <nav className="fixed top-0 left-0 z-50 flex justify-between items-center py-4 md:py-8 px-4 sm:px-8 md:px-16 w-full ">
        {/* Logo */}
        <div className="text-3xl font-bold">AJINAS</div>

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
        <ul className="hidden sm:flex space-x-6 text-gray-800 font-medium text-lg">
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
            <div className="bg-gray-200 w-10 h-5 rounded-full flex items-center px-1">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Items (Toggleable) */}
      {isOpen && (
        <div className="sm:hidden absolute top-0 left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col space-y-4 text-gray-800 font-medium text-lg py-4 px-8">
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
              <div className="bg-gray-200 w-10 h-5 rounded-full flex items-center px-1">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
