import React from 'react';

const Footer = () => {
  return (
    <div className="flex sticky z-50 flex-col items-center justify-between h-screen px-6 py-12 text-center bg-white">
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* <hr className="origin-top-left bg-[#21212155] border-2 w-auto h-[1px] mb-8" /> */}
        <h1 className="text-6xl md:text-8xl font-bold leading-tight text-gray-900">
          Let&apos;s chat.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600">
          Unleashing brand potential through creative design and innovation.
        </p>
        <button className="relative px-6 py-3 mt-8 text-sm font-semibold text-gray-900 border border-black rounded-full group hover:bg-gray-900 hover:text-white">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            
          </span>
          GET IN TOUCH
        </button>
      </div>
      <footer className="w-full mt-12 text-gray-600">
        <div className="flex justify-between items-center border-t border-gray-300 pt-6">
          <p className="text-sm font-medium">
            Ajinas<span className="text-black">.</span>
          </p>
          <p className="text-sm">© 2024 — @ajinasp001</p>
          <div className="flex space-x-4 text-black">
            <a href="#" aria-label="GitHub">
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
            <a href="#" aria-label="LinkedIn">
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
    </div>
  );
};

export default Footer;
