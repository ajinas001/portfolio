
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Zahrat = () => {
  const ref = useRef(null);

  // Hook to get scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'], // Start when the section starts and end when it leaves the viewport
  });

  // Transform values
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]); // Image zoom-out from 1 to 0.8
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Slight vertical movement

  return (
    <>
      {/* Intro Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-7xl mx-auto text-start">
          <h2 className="text-3xl md:text-6xl font-bold text-black mb-8">
            Featured Works.
          </h2>
          <hr className="origin-top-left bg-white border-1 border-black w-auto h-[1px] mb-8" />
          <p className="text-xl md:text-4xl text-black">
            Explore my featured projects that showcase my skills and experience in creating impactful digital solutions.
            From complex data visualizations to innovative web applications, these projects highlight my ability to
            deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Scroll Section */}
      <motion.div
        ref={ref}
        className="sticky top-[11%] md:top-[15%] z-20 flex flex-col lg:flex-row items-start gap-10 bg-white px-6 border-b border-gray-300"
        // style={{ y }}
      >
        <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#3e606f] w-full h-full md:h-[600px] rounded-3xl p-4 md:p-8">
          {/* Left Side: Image */}
          <div className="relative md:w-2/4 flex justify-center items-center">
            <motion.img
              src="/images/zahrat.png"
              alt="Website Showcase"
              className="w-full md:w-4/5 rounded-lg overflow-hidden"
              style={{ scale }} // Apply the scale transformation
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-2/4 text-white mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Zahrath al reef
            </h2>
            <p className="text-sm md:text-lg leading-relaxed mb-6">
              Developed a robust website for an electrical and sanitaryware shop, enabling users to browse an extensive
              product catalog. Implemented features allowing customers to connect with the shop and submit inquiries
              seamlessly through the platform. Designed the interface to display comprehensive shop details, including
              location, operating hours, and contact information, ensuring a user-friendly experience.
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
};
