'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(true); // Track visibility
  const targetRef = useRef();
  const [tenPercentScroll, setTenPercentScroll] = useState(0); // Dynamically calculate height

  useEffect(() => {
    // Ensure `document` is accessed only on the client
    const handleScroll = () => {

      // Hide or blur when scrolling
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], // Adjust scroll offset to align properly
  });

  // Define the transformations for opacity and scale
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);

  // Animation variants for text
  const textContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
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
        height: "100vh",
      }}
    >

      <motion.div
        style={{
          opacity,
          scale,
          filter: isVisible ? "blur(0px)" : "blur(2px)",
        }}
        className="fixed top-0 mt-8 left-0 w-full h-screen flex flex-col justify-center items-start ms-2 md:ms-8 lg:ms-20 z-10"
      >
        <motion.h1
          className="text-5xl px-2 font-bold md:text-5xl lg:text-7xl justify-start items-start text-start md:text-start leading-tight"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-start md:text-start">
            {/* Single line for small screens */}
            <motion.div className="block lg:hidden" variants={textVariants}>
              Concept. Craft. Code. Conquer. Repeat.
            </motion.div>
            {/* Double lines for large screens */}
            <motion.div className="hidden lg:block" variants={textVariants}>
              Concept.Craft.Code.
            </motion.div>
            <motion.div className="hidden lg:block" variants={textVariants}>
              Conquer.Repeat.
            </motion.div>
          </div>
        </motion.h1>


        <motion.p
          className="hidden md:block text-black text-s md:text-sm text-center md:text-start p-5 mt-4 md:mt-4 lg:text-base font-bold"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Crafting digital experiences with precision and flair.
        </motion.p>

        <motion.footer
          className="mt-16 gap-4"
          initial="hidden"
          animate="visible"
        >
          <motion.div className="relative flex flex-col items-center justify-center mt-12 sm:mt-8">
            <motion.button
              className="text-green-500 ms-3 px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 font-extrabold border-2 border-gray-500 rounded-full text-xs md:text-sm lg:text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
            >
              Open to freelance
            </motion.button>
          </motion.div>

        </motion.footer>
      </motion.div>

      <motion.div
        ref={targetRef}
        className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 text-black flex flex-col items-center cursor-pointer`}
        initial={{ opacity: 1, filter: "blur(0px)" }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: [0, 10, 0], // Bounce animation
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: isVisible ? Infinity : 0,
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
