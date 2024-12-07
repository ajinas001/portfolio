'use client';

import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
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
    <div
      className="relative min-h-screen px-8 py-16 flex flex-col justify-center items-center bg-white text-black"
      ref={containerRef}
    >
      {/* Horizontal Line */}
      <hr className="absolute top-0 left-0 w-full border-t-2 border-black" />

      {/* Subheading */}
      <motion.p
        className="text-sm md:text-lg text-gray-700 mb-4"
        style={{
          opacity: subheadingOpacity,
          y: subheadingY,
        }}
      >
        Developer based in <span className="font-bold underline">KERALA, IN</span>
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        className="text-3xl md:text-7xl font-bold mb-4"
        style={{
          opacity: headingOpacity,
          y: headingY,
        }}
      >
        Hi, I&apos;m <span className="hover:underline">Ajinas</span>
      </motion.h1>

      {/* Paragraph */}
      <p className="text-base md:text-3xl font-light leading-relaxed max-w-9xl text-start">
        A software developer with a background in Computer Application. I enjoy crafting elegant
        solutions to complex problems and am always exploring new technologies. When I&apos;m not coding, I love
        diving into tech trends and collaborating on exciting projects. Feel free to browse my work or get in
        touch—I&apos;d love to connect!
      </p>

      {/* More About Me Button */}
      <motion.div
        className="mt-8"
        style={{
          opacity: buttonOpacity,
          y: buttonY,
        }}
      >
        <div className='space-x-2 md:space-x-4'>
       <a href="../Ajinas.Resume.pdf" download>
  <button className="relative px-6 py-3 mt-8 text-sm font-semibold text-gray-900 border border-black rounded-full group hover:bg-gray-900 hover:text-white">
    Resume
  </button>
</a>

<a href="/About">
  <button className="relative px-6 py-3 mt-8 text-sm font-semibold text-gray-900 border border-black rounded-full group hover:bg-gray-900 hover:text-white">
    More about me
  </button>
</a>
</div>

      </motion.div>
    </div>
  );
};
