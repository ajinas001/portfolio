'use client';

import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'], // Delays animation start for smoother appearance
  });

  const subheadingOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const subheadingY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);

  const headingOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.2, 0.4], [30, 0]);

  const buttonOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

  return (
    <>
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />
      <div
        className="relative min-h-screen px-8 py-16 flex flex-col justify-center items-center bg-white text-black mt-16"
        ref={containerRef}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-3xl md:text-6xl mb-4 max-w-7xl w-full border-b-2 p-4 border-black font-bold"
          style={{
            opacity: headingOpacity,
            y: headingY,
          }}
        >
          What I am About
        </motion.h1>

        {/* Paragraph */}
        <p className="text-base md:text-3xl font-light leading-relaxed max-w-7xl text-start mt-6">
          I&apos;m a passionate full-stack developer with a strong foundation in both frontend and backend technologies. 
          I excel at creating dynamic and efficient web applications, prioritizing functionality, user experience, and code quality. 
          {/* Currently, I&apos;m expanding my backend expertise, focusing on microservice architecture to build highly scalable and modular systems. */}
        </p>

        <p className='text-base md:text-3xl font-light leading-relaxed max-w-7xl text-start mt-8'>
          I&apos;m a constant learner, staying abreast of the latest trends and best practices. 
          I thrive in collaborative and independent environments, tackling complex challenges with a problem-solving mindset. 
          My dedication to continuous learning equips me to deliver exceptional results for diverse projects and contribute to the development of cutting-edge web applications.
        </p>

        {/* Skills Section */}
        <div className="mt-12 w-full text-left max-w-7xl">
          <h2 className="text-2xl md:text-4xl font-semibold text-black w-full border-b-2 p-4 border-black">Skills & Expertise</h2>
          <ul className="mt-4 text-base md:text-xl space-y-2">
            <li>• Full Stack Web Development (Next, React, Node.js, Express.js, MongoDB, SQL)</li>
            <li>• Responsive Design (Tailwind CSS, Bootstrap, Media Queries)</li>
            <li>• RESTful API Development </li>
            {/* <li>• Version Control & Collaboration (Git, GitHub)</li> */}
            <li>• UI/UX Design</li>
          </ul>
        </div>

      
        {/* Links Section */}
<div className="mt-12 w-full text-center">
  <h2 className="text-2xl md:text-4xl font-semibold text-black">Connect with me</h2>
  <div className="mt-4 flex justify-center space-x-6 text-black">
    <a href="https://github.com/ajinas001" aria-label="GitHub" className="hover:text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1 1.8 2.5 1.3 3.1 1 .1-.7.4-1.3.7-1.5-2.7-.3-5.6-1.3-5.6-6A4.7 4.7 0 016.6 8.8a4.4 4.4 0 01.1-3.1s1-.3 3.2 1.2a10.9 10.9 0 015.8 0C17.1 5.4 18 5.7 18 5.7a4.4 4.4 0 01.1 3.1A4.7 4.7 0 0119 13.5c0 4.7-2.8 5.6-5.5 5.9.4.4.7 1.1.7 2.1v3c0 .3.2.8.8.6A12 12 0 0012 .5z" />
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/ajinas-p/" aria-label="LinkedIn" className="hover:text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M6.9 4.5c0 1-.8 1.7-2 1.7-1 0-1.7-.7-1.7-1.7C3 3.6 3.8 3 4.8 3c1.2 0 2 .8 2 1.5zM3 21h4V9H3v12zM16 9c-1.6 0-2.8.5-3.7 1.7V9H9v12h4v-6c0-1 .8-2 2-2s2 1 2 2v6h4v-7c0-3-1.6-5-4-5z" />
      </svg>
    </a>
    <a href="#" aria-label="Twitter" className="hover:text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23 2.5a10 10 0 01-2.8.8 4.6 4.6 0 002-2.6c-1 .6-2.1 1-3.3 1.3A4.6 4.6 0 0016.1 1c-2.6 0-4.6 2.2-4.6 5 0 .4 0 .8.1 1.2-4-.2-7.6-2-10-4.7-.4.8-.7 1.7-.7 2.6 0 1.8.9 3.3 2.2 4.2-.8 0-1.5-.2-2.2-.6 0 2.6 1.6 4.8 3.8 5.3-.4.2-.9.2-1.4.2-.3 0-.6 0-.9-.1a4.6 4.6 0 004.3 3.2 9.3 9.3 0 01-6.8 2 13 13 0 007 2c8.4 0 13-7.3 13-13.6v-.6c1-.7 1.9-1.6 2.6-2.6z" />
      </svg>
    </a>
   
  </div>
</div>


        {/* Resume Button */}
        <motion.div
          className="mt-8"
          style={{
            opacity: buttonOpacity,
            y: buttonY,
          }}
        >
          <a href="../Ajinas.Resume.pdf" download>
            <button className="relative px-6 py-3 text-sm font-semibold text-white bg-black border border-black rounded-full hover:bg-white hover:text-black transition-colors">
              Download Resume
            </button>
          </a>
        </motion.div>
        
        <footer className="w-full mt-40 text-black">
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-black pt-6 space-y-4 sm:space-y-0">
            <p className="text-sm font-medium">
              Ajinas<span className="text-black">.</span>
            </p>
            <p className="text-sm">© 2024 — @ajinasp001</p>
            <div className="flex space-x-4 text-black">
              <a href="#" aria-label="GitHub">
                {/* Add GitHub icon here */}
              </a>
              <a href="#" aria-label="Twitter">
                {/* Add Twitter icon here */}
              </a>
              <a href="#" aria-label="LinkedIn">
                {/* Add LinkedIn icon here */}
              </a>
            </div>
          </div>
        </footer>
      </div>
      </motion.div>
    </>
  );
};

export default About;
