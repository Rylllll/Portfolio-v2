import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, Box, Cpu, Zap, Code, Terminal, Hexagon, Settings, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', category: 'Frontend', color: 'bg-[#D3B8FE]', icon: <Box size={24}/>, level: '99%' },
  { name: 'TypeScript', category: 'Language', color: 'bg-[#FFE392]', icon: <Code size={24}/>, level: '95%' },
  { name: 'Next.js', category: 'Framework', color: 'bg-black text-white', icon: <Zap size={24}/>, level: '90%' },
  { name: 'Tailwind CSS', category: 'Styling', color: 'bg-[#A3F1B6]', icon: <Layers size={24}/>, level: '100%' },
  { name: 'Node.js', category: 'Backend', color: 'bg-white', icon: <Terminal size={24}/>, level: '85%' },
  { name: 'GSAP / Motion', category: 'Animation', color: 'bg-[#FFB074]', icon: <Hexagon size={24}/>, level: '92%' },
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
    <section ref={containerRef} id="TechStack" className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#E5D7B7] border-b-[4px] border-black relative overflow-clip">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:24px_24px] z-0" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Unified Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 w-full">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full border-[2px] border-black font-bold uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-max mb-4">
              <span className="w-2 h-2 bg-[#FFB074] rounded-full animate-pulse" />
              Tools of the trade
            </div>
            <div className="relative uppercase">
                <h2 className="absolute top-2 left-2 text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-transparent opacity-30" style={{ WebkitTextStroke: '2px black' }}>
                 TECH-STACK
                </h2>
                <h2 className="relative text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-black">
                  TECH-STACK
                </h2>
              </div>
          </div>
          <div className="hidden md:flex gap-4 pb-2">
            <motion.div whileHover={{ scale: 1.1, rotate: 90 }} transition={{ type: "spring", bounce: 0.5 }} className="w-14 h-14 border-[3px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white cursor-pointer">
               <Cpu size={24} className="text-black" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const isDark = skill.color.includes('bg-black');
            const borderClass = isDark ? 'border-white' : 'border-black';
            const shadowClass = isDark ? 'shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]';
            const hoverShadow = isDark ? '8px 8px 0px 0px rgba(255,255,255,1)' : '8px 8px 0px 0px rgba(0,0,0,1)';

            return (
              <motion.div 
                key={skill.name}
                initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: index * 0.1 } },
                  hover: { y: -8, boxShadow: hoverShadow }
                }}
                className={`relative overflow-hidden border-[3px] ${borderClass} rounded-[24px] p-6 flex flex-col justify-between min-h-[200px] transition-all duration-200 ${shadowClass} ${skill.color}`}
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
                    <Settings size={180} className={isDark ? 'text-white' : 'text-black'} />
                  </motion.div>
                </motion.div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl border-[3px] ${borderClass} flex items-center justify-center bg-white/20 backdrop-blur-sm`}>{skill.icon}</div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-[2px] ${isDark ? 'bg-white text-black border-black' : 'bg-black text-white border-black'}`}>{skill.category}</span>
                  </div>
                  
                  <div className="mt-8 w-full">
                    <div className="flex justify-between items-end mb-3">
                      <h3 className="text-2xl font-black tracking-tight">{skill.name}</h3>
                      <div className="text-xl font-display font-black">{skill.level}</div>
                    </div>
                    <div className={`w-full h-3 border-[2px] ${borderClass} rounded-full ${isDark ? 'bg-white/20' : 'bg-black/10'} overflow-hidden`}>
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: skill.level }} transition={{ duration: 1.2, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                        className={`h-full border-r-[2px] ${borderClass} ${isDark ? 'bg-white' : 'bg-black'}`}
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
             whileHover={{ scale: 1.05, boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}
             whileTap={{ scale: 0.95, boxShadow: '0px 0px 0px 0px rgba(0,0,0,1)' }}
             className="px-8 py-4 bg-black text-white rounded-full font-bold text-sm border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all uppercase flex items-center gap-3 group"
           >
             View Full Resume
             <div className="bg-white/20 p-1 rounded-full group-hover:rotate-45 transition-transform">
               <ArrowUpRight size={16} />
             </div>
           </motion.button>
        </div>
      </div>
    </section>
  );
};