'use client';

import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';

// Custom Hook for Word Transformations
const useWordTransforms = (length, scrollYProgress) => {
  return Array.from({ length }).map((_, i) => {
    const start = i / length;
    const end = start + 1 / length;

    const wordOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const wordTranslateY = useTransform(scrollYProgress, [start, end], [30, 0]);

    return { wordOpacity,wordTranslateY};
  });
};

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'], // Delays animation start for smoother appearance
  });

  // Define all transformations at the top level
  const subheadingOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const subheadingY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);

  const headingOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.2, 0.4], [30, 0]);

  const buttonOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

  const paragraph = `
    A software developer with a background in Computer Science and Engineering. 
    I enjoy crafting elegant solutions to complex problems and am always exploring new technologies. 
    When I'm not coding, I love diving into tech trends and collaborating on exciting projects. 
    Feel free to browse my work or get in touch—I’d love to connect!
  `;

  // Split the paragraph into words
  const words = paragraph.split(' ');

  // Precompute transformations for all words
  const wordTransforms = useWordTransforms(words.length, scrollYProgress);

  return (
    <div
      className="relative min-h-screen px-8 py-16 flex flex-col justify-center items-center"
      ref={containerRef}
    >
      {/* Subheading */}
      <motion.p
        className="text-lg text-gray-700 mb-4"
        style={{
          opacity: subheadingOpacity,
          y: subheadingY,
          transition: { duration: 1.5 }, // Slower transition
        }}
      >
        Developer based in <span className="font-bold underline">KERALA, IN</span>
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-7xl font-bold mb-4"
        style={{
          opacity: headingOpacity,
          y: headingY,
          transition: { duration: 1.5 }, // Slower transition
        }}
      >
        Hi, I&apos;m <span className="underline">Ajinas</span>,
      </motion.h1>

      {/* Paragraph */}
      <p className="text-xl md:text-4xl font-light leading-relaxed max-w-7xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block relative mr-2 mt-2"
            style={{
              opacity: wordTransforms[i].wordOpacity,
              y: wordTransforms[i].wordTranslateY, // Reveal effect for each word
              transition: {
                duration: 2, // Slower reveal for words
                ease: 'easeOut',
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>

      {/* More About Me Button */}
      <motion.div
        className="mt-8"
        style={{
          opacity: buttonOpacity,
          y: buttonY,
        }}
      >
        <button className="relative px-6 py-3 mt-8 text-sm font-semibold text-gray-900 border border-black rounded-full group hover:bg-gray-900 hover:text-white">
          MORE ABOUT ME
        </button>
      </motion.div>
    </div>
  );
};
