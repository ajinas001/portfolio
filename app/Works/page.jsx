'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../Components/Navbar';
import { Ecom } from '../Components/ecom';
import { Hospital } from '../Components/Hospital';

const Works = () => {
  const ref = useRef(null);

  return (
    <>
      <Navbar />
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
            <div className="md:w-2/4 text-white mt-4 md:mt-0 relative">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Radish Grill & Cafe
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

              {/* Button */}

            </div>

          </section>

        </div>
        <Ecom/>
        <Hospital/>
        {/* <footer className="w-full mt-12 text-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-black pt-6 space-y-4 sm:space-y-0">
            <p className="text-sm font-medium">
              Ajinas<span className="text-black">.</span>
            </p>
            <p className="text-sm">© 2024 — @ajinasp001</p>
            <div className="flex space-x-4 text-black">
              <a href="https://github.com/ajinas001" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1 1.8 2.5 1.3 3.1 1 .1-.7.4-1.3.7-1.5-2.7-.3-5.6-1.3-5.6-6A4.7 4.7 0 016.6 8.8a4.4 4.4 0 01.1-3.1s1-.3 3.2 1.2a10.9 10.9 0 015.8 0C17.1 5.4 18 5.7 18 5.7a4.4 4.4 0 01.1 3.1A4.7 4.7 0 0119 13.5c0 4.7-2.8 5.6-5.5 5.9.4.4.7 1.1.7 2.1v3c0 .3.2.8.8.6A12 12 0 0012 .5z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23 2.5a10 10 0 01-2.8.8 4.6 4.6 0 002-2.6c-1 .6-2.1 1-3.3 1.3A4.6 4.6 0 0016.1 1c-2.6 0-4.6 2.2-4.6 5 0 .4 0 .8.1 1.2-4-.2-7.6-2-10-4.7-.4.8-.7 1.7-.7 2.6 0 1.8.9 3.3 2.2 4.2-.8 0-1.5-.2-2.2-.6 0 2.6 1.6 4.8 3.8 5.3-.4.2-.9.2-1.4.2-.3 0-.6 0-.9-.1a4.6 4.6 0 004.3 3.2 9.3 9.3 0 01-6.8 2 13 13 0 007 2c8.4 0 13-7.3 13-13.6v-.6c1-.7 1.9-1.6 2.6-2.6z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ajinas-p/" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.9 4.5c0 1-.8 1.7-2 1.7-1 0-1.7-.7-1.7-1.7C3 3.6 3.8 3 4.8 3c1.2 0 2 .8 2 1.5zM3 21h4V9H3v12zM16 9c-1.6 0-2.8.5-3.7 1.7V9H9v12h4v-6c0-1 .8-2 2-2s2 1 2 2v6h4v-7c0-3-1.6-5-4-5z" />
                </svg>
              </a>
            </div>
          </div>
        </footer> */}


      </div>
    </>
  );
};

export default Works
