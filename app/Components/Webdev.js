// WebDevelopment.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const WebDevelopment = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end center '], // Adjust scroll offset
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Apply vertical movement on scroll

  return (
    <>

    
    <section className="bg-white py-12 px-8 ">
    <div className="max-w-7xl mx-auto text-start">
    <hr className="origin-top-left bg-[#21212155] border-0 w-auto h-[1px] mb-8" />
      <h2 className="text-2xl md:text-6xl font-bold text-gray-800 mb-8">Featured Works.</h2>
      <hr className="origin-top-left bg-[#21212155] border-0 w-auto h-[1px] mb-8" />
      <p className="text-xl md:text-4xl text-black">
        Explore my featured projects that showcase my skills and experience in creating impactful digital solutions. 
        From complex data visualizations to innovative web applications, these projects highlight my ability to 
        deliver exceptional results.
      </p>
    </div>
  </section>
    <motion.div
      ref={ref}
      className="sticky top-[15%] md:top-[15%] z-20 flex flex-col lg:flex-row items-start gap-10 bg-white px-6  border-b border-gray-300"
      style={{
        y, // Apply scroll effect on Y position
      }}
    >
      {/* <hr className='origin-top-left bg-[#21212155] border-0 h-[1px] mt-14 '></hr>
      <div className="flex flex-col items-start">

        <div className="text-4xl font-bold text-gray-800">[01]</div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Web Development</h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex justify-between items-center border-b pb-2 text-lg">
            <span>01</span>
            <span className="font-semibold">Custom Website Development</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2 text-lg">
            <span>02</span>
            <span className="font-semibold">Responsive Design</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2 text-lg">
            <span>03</span>
            <span className="font-semibold">E-commerce Integration</span>
          </li>
          <li className="flex justify-between items-center border-b pb-2 text-lg">
            <span>04</span>
            <span className="font-semibold">SEO Optimization</span>
          </li>
        </ul>
      </div> */}
      
       <section className="flex flex-col md:flex-row items-center justify-between bg-[#0d3b66] w-full md:h-[600px]">
                        {/* Left Side: Image */}
                        <div className="py-16 md:py-2 relative md:w-2/4 flex flex-col justify-center items-center  md:h-[600px] ">
                            {/* Top Image */}
                            {/* <img
                                src="/images/Back 2.png"
                                alt="Top Banner"
                                className="hidden md:block absolute right-0 md:h-[700px]"
                            /> */}
                            {/* <img
                                src="/images/B down.png"
                                alt="Mobile Top Banner"
                                className="bottom-0 absolute block md:hidden w-full h-auto"
                            /> */}
                            {/* Main Image */}
                            <img
                                src="/images/zahrat.png"
                                data-aos="fade-right"
                                alt="Website Showcase"
                                className="px-4 w-4/4 md:w-4/5 overflow-hidden"
                            />
                        </div>

                        {/* Right Side: Text and Tags */}
                        <div className="md:w-2/4 text-white mt-2 md:mt-0 p-8" data-aos="zoom-in">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Zahrath al reef</h2>
                            <div className="flex flex-wrap gap-4 mb-6">
                                {/* Tags */}
                                <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Next.JS</span>
                                <span className="bg-white text-purple-700 px-4 py-2 rounded-full">HTML5</span>
                                <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Tailwind</span>
                                <span className="bg-white text-purple-700 px-4 py-2 rounded-full">React</span>
                                <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Bootstrap</span>
                                <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Node.JS</span>
                            </div>
                            <p className="text-lg mb-6">
                                We develop custom websites that stand out to international standards, ensuring quality and performance.
                                Using the latest technologies, we create websites that are visually appealing and highly functional.
                                Bring your online presence to life with our customized development.
                            </p>
                            <a
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
                            </a>
                        </div>
                    </section>

    </motion.div>
    </>
  );
};
