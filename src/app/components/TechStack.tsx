import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, Box, Cpu, Zap, Code, Terminal, Hexagon, Settings, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', category: 'Frontend', color: 'bg-[#D3B8FE] text-black', icon: <Box size={24}/>, level: '99%' },
  { name: 'TypeScript', category: 'Language', color: 'bg-[#FFE392] text-black', icon: <Code size={24}/>, level: '95%' },
  { name: 'Next.js', category: 'Framework', color: 'bg-black text-white dark:bg-white dark:text-black', icon: <Zap size={24}/>, level: '90%' },
  { name: 'Tailwind CSS', category: 'Styling', color: 'bg-[#A3F1B6] text-black', icon: <Layers size={24}/>, level: '100%' },
  { name: 'Node.js', category: 'Backend', color: 'bg-white text-black dark:bg-zinc-800 dark:text-white', icon: <Terminal size={24}/>, level: '85%' },
  { name: 'GSAP / Motion', category: 'Animation', color: 'bg-[#FFB074] text-black', icon: <Hexagon size={24}/>, level: '92%' },
];

export const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
      });
    }
  }, []);

  return (
    <section ref={containerRef} id="TechStack" className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#E5D7B7] dark:bg-[#1A1A1A] border-b-[4px] border-black dark:border-white relative overflow-clip transition-colors">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.04] bg-[radial-gradient(#000_2px,transparent_2px)] dark:bg-[radial-gradient(#fff_2px,transparent_2px)] bg-[size:24px_24px] z-0" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 w-full">
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
          <div className="hidden md:flex gap-4 pb-2">
            <motion.div whileHover={{ scale: 1.1, rotate: 90 }} transition={{ type: "spring", bounce: 0.5 }} className="w-14 h-14 border-[3px] border-black dark:border-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] bg-white dark:bg-zinc-800 cursor-pointer">
               <Cpu size={24} className="text-black dark:text-white" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const isDarkBg = skill.color.includes('bg-black');

            return (
              <motion.div 
                key={skill.name}
                initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: index * 0.1 } },
                  hover: { y: -8, boxShadow: '8px 8px 0px 0px var(--hover-shadow)' }
                }}
                className={`relative overflow-hidden border-[3px] border-black dark:border-white rounded-[24px] p-6 flex flex-col justify-between min-h-[200px] transition-all duration-200 ${isDarkBg ? 'shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'} [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] ${isDarkBg ? '[--hover-shadow:rgba(255,255,255,1)] dark:[--hover-shadow:rgba(255,255,255,1)]' : ''} ${skill.color}`}
              >
                <motion.div
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 0, opacity: 0 },
                    hover: { scale: 1, opacity: 0.15, transition: { type: "spring", bounce: 0.6, duration: 0.6 } }
                  }}
                  className="absolute -right-10 -bottom-10 pointer-events-none z-0"
                >
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}>
                    <Settings size={180} className="text-current" />
                  </motion.div>
                </motion.div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl border-[3px] border-black dark:border-white flex items-center justify-center bg-white/20 dark:bg-white/10 backdrop-blur-sm text-current">{skill.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-[2px] border-black dark:border-white bg-black text-white dark:bg-white dark:text-black">{skill.category}</span>
                  </div>
                  
                  <div className="mt-8 w-full">
                    <div className="flex justify-between items-end mb-3">
                      <h3 className="text-2xl font-black tracking-tight">{skill.name}</h3>
                      <div className="text-xl font-display font-black">{skill.level}</div>
                    </div>
                    <div className="w-full h-3 border-[2px] border-black dark:border-white rounded-full bg-black/10 dark:bg-white/20 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: skill.level }} transition={{ duration: 1.2, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                        className="h-full border-r-[2px] border-black dark:border-white bg-black dark:bg-white"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
           <motion.button 
             whileHover={{ scale: 1.05, boxShadow: '6px 6px 0px 0px var(--hover-shadow)' }}
             whileTap={{ scale: 0.95, boxShadow: '0px 0px 0px 0px var(--hover-shadow)' }}
             className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold text-sm border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] transition-all uppercase flex items-center gap-3 group"
           >
             View Full Resume
             <div className="bg-white/20 dark:bg-black/10 p-1 rounded-full group-hover:rotate-45 transition-transform">
               <ArrowUpRight size={16} />
             </div>
           </motion.button>
        </div>
      </div>
    </section>
  );
};