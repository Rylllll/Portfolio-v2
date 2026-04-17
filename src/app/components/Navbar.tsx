import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

const navLinks = ['Hero', 'About Me', 'Tech Stack', 'Projects', 'Hobbies', 'Resume'];

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect Scroll Direction to hide/show navbar links
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;

      // Scroll Spy: Update active link as user scrolls
      const sections = navLinks.map(link => document.getElementById(link.replace(/\s+/g, '')));
      let currentActive = 'Hero';
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          // Offset for fixed navbar + buffer
          if (sectionTop <= 150) { 
            const correspondingLink = navLinks.find(link => link.replace(/\s+/g, '') === section.id);
            if (correspondingLink) currentActive = correspondingLink;
          }
        }
      });
      
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Smooth Scroll Animation with offset for fixed Navbar
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setActiveLink(link);
    const targetId = link.replace(/\s+/g, '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navOffset = 80; // Height of the navbar to prevent covering section headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Dedicated scroll function for the "Let's Talk" button
  const scrollToContact = () => {
    const element = document.getElementById('Contact');
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      layout
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
      className={`fixed top-5 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-[3px] border-black dark:border-white rounded-full py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] flex justify-between items-center z-[100] transition-colors hover:bg-white/90 dark:hover:bg-zinc-900/90 overflow-hidden ${
        isScrollingDown 
          ? 'w-max px-4 md:px-6 gap-6 md:gap-12' 
          : 'w-[95%] lg:w-[90%] max-w-6xl px-3'
      }`}
    >
      <motion.div 
        layout
        whileHover={{ scale: 1.05 }} 
        className="text-xl md:text-2xl font-display font-black tracking-tighter cursor-pointer text-black dark:text-white"
        onClick={() => {
          const hero = document.getElementById('Hero');
          if (hero) window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        reymark.
      </motion.div>
      
      <AnimatePresence mode="popLayout">
        {!isScrollingDown && (
          <motion.div 
            layout
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="hidden md:flex items-center gap-1 relative origin-center"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link}
                href={`#${link.replace(/\s+/g, '')}`}
                onClick={(e) => scrollToSection(e, link)}
                onMouseEnter={() => setHoveredLink(link)}
                initial="rest"
                whileHover="hover"
                className="relative px-4 py-2 rounded-full font-bold text-xs md:text-sm text-black dark:text-white z-10 flex group cursor-pointer"
              >
                
                {/* Active Background */}
                {activeLink === link && (
                  <motion.div
                    className="absolute inset-0 bg-[#D3B8FE] border-[2px] border-black dark:border-white rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                    animate={{ 
                      opacity: hoveredLink ? 0 : 1, 
                      scale: hoveredLink ? 0.8 : 1 
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ zIndex: -2 }}
                  />
                )}

                {/* Fluid Hover Background */}
                {hoveredLink === link && (
                  <motion.div
                    layoutId="fluidHoverBackground"
                    className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    style={{ zIndex: -1 }}
                  />
                )}

                <span className="relative z-20 flex overflow-hidden">
                  {link.split('').map((char, i) => (
                    <span key={i} className="relative inline-flex flex-col h-[18px] overflow-hidden">
                      <motion.span 
                        variants={{ rest: { y: 0 }, hover: { y: "-100%" } }}
                        transition={{ duration: 0.3, delay: i * 0.02, ease: "easeOut" }}
                        className="inline-block leading-[18px]"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                      <motion.span 
                        variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                        transition={{ duration: 0.3, delay: i * 0.02, ease: "easeOut" }}
                        className="absolute left-0 top-0 inline-block text-black dark:text-white leading-[18px]"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    </span>
                  ))}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div layout className="flex items-center gap-2 md:gap-3">
        {/* Let's Talk Button */}
        <motion.button 
          onClick={scrollToContact}
          whileHover={{ scale: 1.05, y: -2, boxShadow: isDark ? '3px 3px 0px 0px rgba(255,255,255,1)' : '3px 3px 0px 0px rgba(0,0,0,1)' }}
          whileTap={{ scale: 0.95, y: 0, boxShadow: isDark ? '0px 0px 0px 0px rgba(255,255,255,1)' : '0px 0px 0px 0px rgba(0,0,0,1)' }}
          className="bg-black text-white dark:bg-white dark:text-black border-[2px] border-black dark:border-white rounded-full px-4 py-1.5 font-bold text-xs uppercase tracking-wide cursor-pointer flex-shrink-0"
        >
          Let's Talk
        </motion.button>

         {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, y: -2, boxShadow: isDark ? '3px 3px 0px 0px rgba(255,255,255,1)' : '3px 3px 0px 0px rgba(0,0,0,1)' }}
          whileTap={{ scale: 0.9, y: 0, boxShadow: isDark ? '0px 0px 0px 0px rgba(255,255,255,1)' : '0px 0px 0px 0px rgba(0,0,0,1)' }}
          className="w-8 h-8 md:w-9 md:h-9 bg-[#FFE392] dark:bg-zinc-800 text-black dark:text-white border-[2px] border-black dark:border-white rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-colors overflow-hidden flex-shrink-0"
          aria-label="Toggle Dark Mode"
        >
          <motion.div
            initial={false}
            animate={{ 
              rotate: isDark ? 180 : 0,
              scale: isDark ? 0.8 : 1
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {isDark ? <Moon size={16} className="fill-white" /> : <Sun size={18} className="fill-black" />}
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};