'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../Components/Navbar';

 const Works = () => {
  const ref = useRef(null);

  return (
    <>
    <Navbar/>
      <section className="bg-white py-12 px-8 mt-16 md:mt-20">
        <div className="max-w-9xl mx-auto text-start">
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

      <div className='space-y-6'>

      
      <div className="flex flex-col lg:flex-row items-start gap-10 bg-white px-6 border-b border-gray-300">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#3e606f] w-full h-full md:h-[600px] rounded-3xl p-4 md:p-8">
          {/* Left Side: Image */}
          <div className="py-4 md:py-2 relative md:w-2/4 flex flex-col justify-center items-center">
            <motion.img
              src="/images/zahrat.png"
              alt="Website Showcase"
              className="w-full md:w-4/5 rounded-lg overflow-hidden"
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
              We develop custom websites that stand out to international standards, ensuring quality and performance.
              Using the latest technologies, we create websites that are visually appealing and highly functional.
              Bring your online presence to life with our customized development.
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 bg-white px-6 border-b border-gray-300">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#3e606f] w-full h-full md:h-[600px] rounded-3xl p-4 md:p-8">
          {/* Left Side: Image */}
          <div className="py-4 md:py-2 relative md:w-2/4 flex flex-col justify-center items-center">
            <motion.img
              src="/images/radish.png"
              alt="Website Showcase"
              className="w-full md:w-4/5 rounded-lg overflow-hidden"
            />
          </div>

          {/* Right Side: Text and Tags */}
          <div className="md:w-2/4 text-white mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
             Radish Gril & Cafe
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
              {/* Tags */}
              {/* Add tags here if needed */}
            </div>
            <p className="text-sm md:text-lg leading-relaxed mb-6">
              We develop custom websites that stand out to international standards, ensuring quality and performance.
              Using the latest technologies, we create websites that are visually appealing and highly functional.
              Bring your online presence to life with our customized development.
            </p>
          </div>
        </section>
      </div>

      </div>
    </>
  );
};

export default Works
