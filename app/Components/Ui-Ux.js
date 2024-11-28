// UIUXDesign.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const UIUXDesign = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'start center'], // Adjust scroll offset
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Apply vertical movement on scroll

  return (
    <motion.div
      ref={ref}
      className="sticky top-[80px] z-30 flex flex-col lg:flex-row items-start bg-white   gap-10 px-6 lg:px-20 py-10"
      style={{
        y, // Apply scroll effect on Y position
      }}
    >
      <hr className='origin-top-left bg-[#21212155] border-0 h-[1px] mt-14 '></hr>
      <div className="flex flex-col items-start">
        
        <div className="text-4xl font-bold text-gray-800">[02]</div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-800">UI/UX Design</h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          User-centric design is at the core of every successful product. I focus on creating visually appealing, intuitive interfaces that offer users a seamless and engaging experience, ensuring your brand stands out while keeping functionality at the forefront.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex justify-between items-center border-b pb-2 text-lg">
            <span>01</span>
            <span className="font-semibold">Wireframing & Prototyping</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2 text-lg">
            <span>02</span>
            <span className="font-semibold">User Research & Testing</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2 text-lg">
            <span>03</span>
            <span className="font-semibold">Interactive Design</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2 text-lg">
            <span>04</span>
            <span className="font-semibold">Design Systems & Guidelines</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
