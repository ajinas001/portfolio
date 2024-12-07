// UIUXDesign.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Ecom = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'start center'], // Adjust scroll offset
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Apply vertical movement on scroll

  return (
    <motion.div
      ref={ref}
      className="sticky top-[8%] md:top-[13%] z-30 flex flex-col lg:flex-row items-start gap-10  px-6 border-b border-gray-300  "
      style={{
        y, // Apply scroll effect on Y position
      }}
    >
      <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#3e606f] w-full h-full md:h-[600px] rounded-3xl p-4 md:p-8">
        {/* Left Side: Image */}
        <div className="py-4 md:py-2 relative md:w-2/4 flex flex-col justify-center items-center">
          <motion.img
            src="/images/ecom.png"
            alt="Website Showcase"
            className="w-full md:w-4/5 rounded-lg overflow-hidden"

          />
        </div>

        {/* Right Side: Text and Tags */}
        <div className="md:w-2/4 text-white mt-4 md:mt-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Shopify
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
            {/* Tags */}
            {/* Add tags here if needed */}
          </div>
          <p className="text-sm md:text-lg leading-relaxed mb-6">
            Developed E-kart, a fully-featured e-commerce platform with a Node.js and Express.js backend, React.js frontend,
            and MongoDB as the database.
            ◦ Adhered to MVC architecture and REST API principles throughout the platform development.
            ◦ Implemented secure user authentication with OTP-based email verification using Nodemailer.
            ◦ Enabled users to manage their shopping experience, including: Adding products to a cart, Making purchases,
            Maintaining a wishlist.
            ◦ Integrated multiple payment options, including: Wallet payments, Cash on delivery, Online payments through Razorpay.
           
         
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
  );
};
