import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

const navLinks = ['Hero', 'About Me', 'Tech Stack', 'Projects', 'Hobbies', 'Resume'];

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.2 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] lg:w-[90%] max-w-6xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-[3px] border-black dark:border-white rounded-full px-3 py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] flex justify-between items-center z-[100] transition-all hover:bg-white/90 dark:hover:bg-zinc-900/90"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="text-xl md:text-2xl font-display font-black tracking-tighter pl-4 cursor-pointer text-black dark:text-white">
        alex.
      </motion.div>
      
      <div 
        className="hidden md:flex items-center gap-1 relative"
        onMouseLeave={() => setHoveredLink(null)}
      >
        {navLinks.map((link) => (
          <motion.a 
            key={link}
            href={`#${link.replace(/\s+/g, '')}`}
            onClick={() => setActiveLink(link)}
            onMouseEnter={() => setHoveredLink(link)}
            initial="rest"
            whileHover="hover"
            className="relative px-4 py-2 rounded-full font-bold text-xs md:text-sm text-black dark:text-white z-10 flex group cursor-pointer"
          >
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
      </div>
      
      <div className="flex items-center gap-2 md:gap-3 mr-1">
        <motion.button 
          whileHover={{ scale: 1.05, y: -2, boxShadow: isDark ? '3px 3px 0px 0px rgba(255,255,255,1)' : '3px 3px 0px 0px rgba(0,0,0,1)' }}
          whileTap={{ scale: 0.95, y: 0, boxShadow: isDark ? '0px 0px 0px 0px rgba(255,255,255,1)' : '0px 0px 0px 0px rgba(0,0,0,1)' }}
          className="bg-black text-white dark:bg-white dark:text-black border-[2px] border-black dark:border-white rounded-full px-4 py-1.5 font-bold text-xs uppercase tracking-wide"
        >
          Let's Talk
        </motion.button>

        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, y: -2, boxShadow: isDark ? '3px 3px 0px 0px rgba(255,255,255,1)' : '3px 3px 0px 0px rgba(0,0,0,1)' }}
          whileTap={{ scale: 0.9, y: 0, boxShadow: isDark ? '0px 0px 0px 0px rgba(255,255,255,1)' : '0px 0px 0px 0px rgba(0,0,0,1)' }}
          className="w-8 h-8 md:w-9 md:h-9 bg-[#FFE392] dark:bg-zinc-800 text-black dark:text-white border-[2px] border-black dark:border-white rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-colors overflow-hidden"
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
      </div>
    </motion.nav>
  );
};