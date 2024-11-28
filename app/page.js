// page.tsx
'use client'
import { useEffect } from "react";
import { Hero } from "./Components/Main";
import {About}  from "./Components/About";
import Lenis from '@studio-freight/lenis'
import Navbar from "./Components/Navbar";
import { UIUXDesign } from "./Components/Ui-Ux";
import { WebDevelopment } from "./Components/Webdev";
import Swiper from "./Components/Horizontal";
import MouseBubble from "./Components/Mousebubble";
import Footer from "./Components/Footer";
import { Secondproject } from "./Components/Sample";
// import WebDevelopment from "./Components/Webdev";
// import UIUXDesign from "./Components/Ui-Ux";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,         // Enables smooth scrolling
      smoothTouch: false,   // Disable smooth scroll on touch devices (optional)
      lerp: 0.05,            // Adjusts scroll speed (lower value = slower)
      infinite: false,      // Allow scroll to be infinite or not (optional)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="scrollbar-hide">
      <MouseBubble/>
      <Navbar />
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <About />
        <WebDevelopment />
        <Secondproject/>
        {/* <UIUXDesign/> */}
        <Swiper/>
       
        {/* Add more sections as needed */}
        <Footer/>
      </div>
    </main>
  );
}
