import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Layers, Box, Cpu, Zap, Code, Terminal, Hexagon, Settings, ArrowUpRight, Server, Cuboid, Palette, Sparkles, Star, Database } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const allSkills = [
  // Frontend
  { name: 'React / Vite', category: 'Frontend', color: 'bg-[#D3B8FE] text-black', icon: <Box size={24}/>, level: '95%' },
  { name: 'Next.js', category: 'Frontend', color: 'bg-black text-white dark:bg-white dark:text-black', icon: <Zap size={24}/>, level: '92%' },
  { name: 'Tailwind / SCSS', category: 'Frontend', color: 'bg-[#A3F1B6] text-black', icon: <Layers size={24}/>, level: '98%' },
  
  // Backend & DB
  { name: 'Node.js', category: 'Backend', color: 'bg-white text-black dark:bg-zinc-800 dark:text-white', icon: <Terminal size={24}/>, level: '85%' },
  { name: 'Laravel / PHP', category: 'Backend', color: 'bg-[#8DE1FC] text-black', icon: <Server size={24}/>, level: '80%' },
  { name: 'Supabase', category: 'Database', color: 'bg-[#4ADE80] text-black', icon: <Database size={24}/>, level: '88%' },
  { name: 'MongoDB', category: 'Database', color: 'bg-[#10B981] text-black', icon: <Database size={24}/>, level: '82%' },

  // Languages
  { name: 'TypeScript', category: 'Language', color: 'bg-[#FFE392] text-black', icon: <Code size={24}/>, level: '90%' },
  
  // Graphics & Design
  { name: 'Three.js / WebGL', category: 'Graphics', color: 'bg-[#FF9CEE] text-black', icon: <Cuboid size={24}/>, level: '85%' },
  { name: 'GSAP / Motion', category: 'Graphics', color: 'bg-[#FFB074] text-black', icon: <Hexagon size={24}/>, level: '95%' },
  { name: 'Figma / UI', category: 'Design', color: 'bg-[#FF6B6B] text-black', icon: <Palette size={24}/>, level: '90%' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Graphics', 'Design'];

export const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateWheel = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
      });
    }
  }, []);

  const filteredSkills = activeCategory === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <section ref={containerRef} id="TechStack" className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#E5D7B7] dark:bg-[#1A1A1A] border-b-[4px] border-black dark:border-white relative overflow-clip transition-colors">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.04] bg-[radial-gradient(#000_2px,transparent_2px)] dark:bg-[radial-gradient(#fff_2px,transparent_2px)] bg-[size:24px_24px] z-0" />

      {/* Floating Animated Background Elements */}
      <motion.div style={{ y: yParallaxFast }} className="absolute right-10 top-1/4 opacity-20 pointer-events-none z-0">
         <Star size={100} className="text-black dark:text-white stroke-[1px]" />
      </motion.div>
      <motion.div style={{ y: yParallaxSlow }} className="absolute left-10 bottom-1/4 opacity-20 pointer-events-none z-0">
         <Sparkles size={80} className="text-black dark:text-white stroke-[1px]" />
      </motion.div>

      {/* Vertical Animated Marquee (Hidden on mobile for cleaner look) */}
      <div className="absolute left-4 top-0 bottom-0 w-8 border-r-[2px] border-black/10 dark:border-white/10 hidden md:flex flex-col overflow-hidden opacity-30 select-none z-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex flex-col gap-8 text-[10px] font-black tracking-[0.3em] uppercase text-black dark:text-white"
          style={{ writingMode: 'vertical-rl' }}
        >
          {[...Array(10)].map((_, i) => (
             <span key={i}>SYSTEM ARCHITECTURE • OPTIMIZATION • FULL STACK • 3D EXPERIENCES • </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 ">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 w-full relative">
          
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full border-[2px] border-black dark:border-white font-bold uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] w-max mb-4">
              <span className="w-2 h-2 bg-[#FFB074] rounded-full animate-pulse border border-black dark:border-white" />
              Tools of the trade
            </div>
            <div className="relative uppercase" ref={titleRef}>
                <h2 className="absolute top-2 left-2 text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-transparent opacity-30 [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">
                 TECH-STACK
                </h2>
                <h2 className="relative text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-black dark:text-white">
                  TECH-STACK
                </h2>
              </div>
          </div>

          <div className="hidden lg:flex gap-4 pb-2 relative">
            <motion.div 
              style={{ rotate: rotateWheel }} 
              className="absolute -right-16 -top-16 opacity-10 pointer-events-none mix-blend-difference"
            >
              <Settings size={140} className="text-black dark:text-white" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1, rotate: 90 }} transition={{ type: "spring", bounce: 0.5 }} className="w-14 h-14 border-[3px] border-black dark:border-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-zinc-800 cursor-pointer relative z-10">
               <Cpu size={24} className="text-black dark:text-white" />
            </motion.div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full border-[2px] border-black dark:border-white font-bold text-xs uppercase tracking-wider transition-all
                ${activeCategory === category 
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] translate-y-[-2px]' 
                  : 'bg-white text-black dark:bg-zinc-800 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const isDarkBg = skill.color.includes('bg-black');

              return (
                <motion.div 
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                  whileHover={{ y: -8, boxShadow: '8px 8px 0px 0px var(--hover-shadow)' }}
                  className={`relative overflow-hidden border-[3px] border-black dark:border-white rounded-[24px] p-6 flex flex-col justify-between min-h-[200px] transition-shadow duration-200 ${isDarkBg ? 'shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'} [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] ${isDarkBg ? '[--hover-shadow:rgba(255,255,255,1)] dark:[--hover-shadow:rgba(255,255,255,1)]' : ''} ${skill.color} group`}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.15, transition: { type: "spring", bounce: 0.6, duration: 0.6 } }}
                    className="absolute -right-10 -bottom-10 pointer-events-none z-0"
                  >
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}>
                      <Settings size={180} className="text-current" />
                    </motion.div>
                  </motion.div>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-xl border-[3px] border-black dark:border-white flex items-center justify-center bg-white/20 dark:bg-white/10 backdrop-blur-sm text-current group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-[2px] border-black dark:border-white bg-black text-white dark:bg-white dark:text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        {skill.category}
                      </span>
                    </div>
                    
                    <div className="mt-8 w-full">
                      <div className="flex justify-between items-end mb-3">
                        <h3 className="text-2xl font-black tracking-tight">{skill.name}</h3>
                        <div className="text-xl font-display font-black">{skill.level}</div>
                      </div>
                      <div className="w-full h-3 border-[2px] border-black dark:border-white rounded-full bg-black/10 dark:bg-white/20 overflow-hidden relative">
                        {/* Grid overlay for the progress bar to make it look like a meter */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)] z-10" />
                        
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: skill.level }} 
                          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                          className="h-full border-r-[2px] border-black dark:border-white bg-black dark:bg-white relative z-0"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 flex justify-center relative z-20">
           <motion.a 
             href="#Resume"
             whileHover={{ scale: 1.05, boxShadow: '6px 6px 0px 0px var(--hover-shadow)' }}
             whileTap={{ scale: 0.95, boxShadow: '0px 0px 0px 0px var(--hover-shadow)' }}
             className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold text-sm border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] transition-all uppercase flex items-center gap-3 group cursor-pointer"
           >
             See Full History
             <div className="bg-white/20 dark:bg-black/10 p-1 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
               <ArrowUpRight size={16} />
             </div>
           </motion.a>
        </div>
      </div>
    </section>
  );
};