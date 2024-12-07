'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Zahrat = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // Adjust scroll offset
  });

  // Zoom-out effect for the image
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]); // Scale from 1 to 0.8
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Vertical movement for the sticky section

  return (
    <>
      <section className="bg-white py-12 px-8">
        <div className="max-w-9xl mx-auto text-start">
          {/* <hr className="bg-[#21212155] border-0 w-auto h-[1px] mb-8" /> */}
          <h2 className="text-3xl md:text-6xl font-bold text-black mb-8">
            Featured Works.
          </h2>
          <hr className="origin-top-left bg-[white] border-1 border-black w-auto h-[1px] mb-8" />
          <p className="text-xl md:text-4xl text-black">
            Explore my featured projects that showcase my skills and experience in creating impactful digital solutions.
            From complex data visualizations to innovative web applications, these projects highlight my ability to
            deliver exceptional results.
          </p>
        </div>
      </section>

      <motion.div
        ref={ref}
        className="sticky top-[11%] md:top-[15%] z-20 flex flex-col lg:flex-row items-start gap-10 bg-white px-6 border-b border-gray-300"
        style={{
          y, // Apply scroll effect on Y position
        }}
      >
        <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#3e606f] w-full h-full md:h-[600px] rounded-3xl p-4 md:p-8">
          {/* Left Side: Image */}
          <div className="py-4 md:py-2 relative md:w-2/4 flex flex-col justify-center items-center">
            <motion.img
              src="/images/zahrat.png"
              alt="Website Showcase"
              className="w-full md:w-4/5 rounded-lg overflow-hidden"
              style={{
                scale, // Apply zoom-out effect
              }}
            />
          </div>

          {/* Right Side: Text and Tags */}
          <div className="md:w-2/4 text-white mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Zahrath al reef
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
              {/* Tags */}
              {/* Add tags here if needed */}
            </div>
            <p className="text-sm md:text-lg leading-relaxed mb-6">
              Developed a robust website for an electrical and sanitaryware shop, enabling users to browse an extensive
              product catalog.
               Implemented features allowing customers to connect with the shop and submit inquiries seamlessly through the
              platform.
               Designed the interface to display comprehensive shop details, including location, operating hours, and contact
              information, ensuring a user-friendly experience.
            </p>
            {/* <a
              href="/website"
              className="bg-white text-purple-700 px-6 py-3 rounded-full flex items-center gap-2"
            >
              <span>View Our Recent Projects</span>
              <svg
                className="w-6 h-6 text-pink-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a> */}
          </div>
        </section>

      </motion.div>
    </>
  );
};
