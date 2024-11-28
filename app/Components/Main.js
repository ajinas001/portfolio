'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], // Adjust scroll offset to align properly
  });

  // Define the transformations for opacity and scale
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  // Arrow animation configuration
  const arrowAnimation = {
    y: [0, 10, 0], // Arrow moves up and down
  };

  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen"
    >
      <motion.div
        style={{
          opacity,
          scale,
        }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-10"
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-light text-center leading-tight">
          <div className="space-y-4 flex flex-col md:space-y-6 lg:space-y-8">
            <div>Concept.Craft.Code.</div>
            <div>Conquer.Repeat.</div>
          </div>
        </h1>

        <p className="text-gray-500 text-sm md:text-xl font-bold mt-8 text-center">
          Crafting digital experiences with precision and flair.
        </p>
        <footer className="mt-16 gap-4">
          <button className="bg-green-500 text-white px-6 py-4 rounded-full text-sm">
            Open to freelance
          </button>
        </footer>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
  ref={targetRef}
  style={{ opacity, scale }}
  className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-black flex flex-col items-center cursor-pointer"
  animate={{
    y: [0, 10, 0], // Bounce animation
  }}
  transition={{
    duration: 1, // Duration for one cycle
    repeat: Infinity, // Repeat infinitely
    repeatType: "loop",
    ease: "easeInOut", // Smooth in-out animation
  }}
>
  <motion.div
    className="w-8 h-8 border-b-4 border-r-4 transform rotate-45"
    style={{
      borderColor: "currentColor", // Matches the current text color
    }}
  ></motion.div>
</motion.div>

    </motion.section>
  );
};
