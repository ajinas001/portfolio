'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(true); // Track visibility
  const targetRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  const textContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen bg-fixed bg-center bg-white text-black"
      style={{
        backgroundImage: "url('/images/sample11.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        style={{
          opacity,
          scale,
          filter: isVisible ? "blur(0px)" : "blur(3px)",
        }}
        className="fixed top-0 mt-8 left-0 w-full h-screen flex flex-col justify-center items-start ms-4 md:ms-12 lg:ms-24 z-10"
      >
        <motion.h1
          className="text-6xl font-bold md:text-5xl lg:text-7xl leading-tight"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="block lg:hidden" variants={textVariants}>
            Concept. Craft. Code. Conquer. Repeat.
          </motion.div>
          <motion.div className="hidden lg:block" variants={textVariants}>
            Concept. Craft. Code.
          </motion.div>
          <motion.div className="hidden lg:block" variants={textVariants}>
            Conquer. Repeat.
          </motion.div>
        </motion.h1>

        <motion.p
          className="hidden md:block text-black text-s md:text-sm lg:text-base font-medium mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5, // Adding a delay after the heading animations
            duration: 1, // Smooth transition duration
            ease: "easeOut", // Easing for a polished effect
          }}
        >
          Crafting digital experiences with precision and flair.
        </motion.p>


        <motion.div
          className="mt-16"
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          <motion.button
            className="text-green-500 px-4 py-2 border-2 border-gray-500 rounded-full text-sm lg:text-base font-bold"
            whileHover="hover"
            whileTap="tap"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.9, // Adding delay here
                  duration: 1,
                  ease: "easeOut",
                },
              },
              hover: { scale: 1.1, boxShadow: "0px 0px 10px rgba(0,0,0,0.3)" },
              tap: { scale: 0.95 },
            }}
            initial="hidden"
            animate="visible"
          >
            Open to freelance
          </motion.button>

        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: [0, 15, 0],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 2.5, // Added delay here
          repeat: isVisible ? Infinity : 0,
        }}
      >
        <motion.div
          className="w-8 h-8 border-b-4 border-r-4 transform rotate-45"
          style={{ borderColor: "currentColor" }}
        ></motion.div>
      </motion.div>

    </motion.section>
  );
};
