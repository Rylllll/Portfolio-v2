import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Hobbies } from './components/Hobbies'; 
import { Resume } from './components/Resume';   
import { Contact } from './components/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="app-loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div 
        ref={containerRef} 
        className={`relative min-h-screen bg-[#E5D7B7] text-[#000000] font-body selection:bg-[#BCA9F5] selection:text-black flex flex-col ${
          isLoading ? 'h-screen overflow-hidden' : 'overflow-x-clip'
        }`}
      >
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Hobbies />
          <Resume />
          <Contact />
        </main>
      </div>
    </>
  );
}