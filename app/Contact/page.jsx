import React from 'react'
import Navbar from '../Components/Navbar';

const Contact = () => {
  return (
    <>
    <div className='bg-white '>
    <Navbar/>
      <section className="min-h-screen flex flex-col justify-center items-center bg-white  px-4 py-8 mt-16 md:mt-24">
        {/* Heading */}
        <h1 className="text-4xl md:text-8xl font-bold text-center mb-4">
          Get in Touch<span className="text-black">.</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-center text-black max-w-5xl mb-8">
          I’d love to hear from you! Whether you have a project in mind or just
          want to connect, feel free to reach out. Let’s explore how we can create
          something great together.
        </p>

        {/* Contact Details */}
        <div className="w-full max-w-5xl space-y-4">
          <div className="flex justify-between items-center border-t pt-6 border-b border-black pb-6">
            <span className="font-semibold text-black">Location</span>
            <span className="text-black">Kannur, Kerala</span>
          </div>
          <div className="flex justify-between items-center border-b border-black pb-6">
            <span className="font-semibold text-gray-700">Email</span>
            <a
              href="mailto:munavvarsinan8@gmail.com"
              className="text-black hover:underline"
            >
              ajinasp001@gmail.com
            </a>
          </div>
          <div className="flex justify-between items-center border-b border-black pb-6">
            <span className="font-semibold text-gray-700">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/ajinas-p/"
              className="text-black hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ajinas
            </a>
          </div>
          <div className="flex justify-between items-center border-b border-black pb-6">
            <span className="font-semibold text-black">GitHub</span>
            <a
              href=" https://github.com/ajinas001"
              className="text-black hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ajinas
            </a>
          </div>
        </div>
        <footer className="w-full mt-12 text-gray-600">
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
      </footer>
      </section>

      </div>


    </>
  );
};




export default Contact
