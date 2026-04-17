import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, GraduationCap, Download, Star, Sparkles, CircleDashed } from 'lucide-react';

const experience = [
  { 
    role: "Lead Front End Software Engineer [cite: 5]", 
    company: "Yamaha Motor Philippines Inc [cite: 5]", 
    date: "November 2023 - Present [cite: 5]", 
    desc: "Led the front-end architecture and full revamp of Yamaha Motor Philippines' corporate web ecosystem, redesigning the entire UI/UX and rebuilding the platform from the ground up, achieving 90% faster performance through advanced optimizations[cite: 5]. Designed and developed a scalable component library and design system using React, TypeScript, and Tailwind CSS[cite: 5]." 
  },
  { 
    role: "Full Stack Web-Developer Intern [cite: 5]", 
    company: "Chanz IT Business Solutions INC. [cite: 5]", 
    date: "February 2023 - April 2023 [cite: 5]", 
    desc: "Designed and developed a responsive number-to-words converter with Peso-USD currency conversion and an accessible, user-friendly interface[cite: 5]. Implemented a professional, responsive gallery website showcasing global tourist destinations with optimized assets and cross-device responsiveness[cite: 5]." 
  },
  { 
    role: "Freelance Web Developer & IT Technician [cite: 5]", 
    company: "Freelance [cite: 5]", 
    date: "Freelance [cite: 5]", 
    desc: "Designed and developed responsive websites and portfolios with emphasis on UX, accessibility, and performance using HTML, CSS, and JavaScript[cite: 5]. Delivered foundational 3D modeling and animation work for client showcases and provided computer hardware/software troubleshooting services[cite: 5]." 
  }
];

const education = [
  { 
    degree: "Embedded Systems and Web Developing [cite: 5]", 
    school: "Rizal Technological University [cite: 5]", 
    date: "January 2023 - October 2023 [cite: 5]", 
    desc: "Relevant Coursework: Embedded systems and microprocessors, Web developing[cite: 5]. Awards: Academic Achiever, Deans Lister[cite: 5]." 
  },
  { 
    degree: "TVL ICT Strand (Computer Software Servicing) [cite: 5]", 
    school: "Marikina Polytechnic College [cite: 5]", 
    date: "February 2017 - September 2019 [cite: 5]", 
    desc: "Technical-Vocational Livelihood (TVL) ICT strand focusing on computer software servicing[cite: 5]. Completed NC II certification in Computer Software Servicing[cite: 5]." 
  }
];

export const Resume = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Parallax values for floating elements
  const yFast = useTransform(scrollYProgress, [0, 1], [-250, 250]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateWheel = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="Resume" ref={containerRef} className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#F4EFE6] dark:bg-[#121212] border-b-[4px] border-black dark:border-white relative overflow-clip transition-colors">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.04] bg-[radial-gradient(#000_3px,transparent_3px)] dark:bg-[radial-gradient(#fff_3px,transparent_3px)] bg-[size:30px_30px] z-0" />

      {/* Floating Animated Background Elements */}
      <motion.div style={{ y: yFast, rotate: rotateWheel }} className="absolute left-5 top-1/4 opacity-20 pointer-events-none z-0 hidden md:block">
        <Sparkles size={100} className="text-black dark:text-white stroke-[1px]" />
      </motion.div>
      <motion.div style={{ y: ySlow, rotate: rotateWheel }} className="absolute right-16 bottom-1/4 opacity-20 pointer-events-none z-0 hidden md:block">
        <CircleDashed size={140} className="text-black dark:text-white stroke-[1px]" />
      </motion.div>

      {/* Vertical Animated Marquee (Right Side) */}
      <div className="absolute right-4 top-0 bottom-0 w-8 border-l-[2px] border-black/10 dark:border-white/10 hidden lg:flex flex-col overflow-hidden opacity-30 select-none z-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex flex-col gap-8 text-[10px] font-black tracking-[0.3em] uppercase text-black dark:text-white"
          style={{ writingMode: 'vertical-rl' }}
        >
          {[...Array(10)].map((_, i) => (
             <span key={i}>PROFESSIONAL HISTORY • EDUCATION • ACHIEVEMENTS • TIMELINE • </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 w-full relative">
          
          <div className="flex flex-col z-10">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full border-[2px] border-black dark:border-white font-bold uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] w-max mb-4">
              <span className="w-2 h-2 bg-[#A3F1B6] rounded-full animate-pulse border border-black dark:border-white" />
              The Journey
            </div>
             <div className="relative uppercase">
               <h2 className="absolute top-2 left-2 text-[60px] md:text-[80px] lg:text-[110px] font-display font-black leading-[0.8] tracking-tight whitespace-nowrap text-transparent opacity-30 [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">
                  RESUME
                </h2>
                <h2 className="relative text-[60px] md:text-[80px] lg:text-[110px] font-display font-black leading-[0.8] tracking-tight whitespace-nowrap text-black dark:text-white">
                  RESUME
                </h2>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -4, boxShadow: '6px 6px 0px 0px var(--hover-shadow)' }}
            whileTap={{ scale: 0.95, y: 0, boxShadow: '0px 0px 0px 0px var(--hover-shadow)' }}
            className="flex items-center gap-3 bg-[#D3B8FE] text-black border-[3px] border-black dark:border-white rounded-full px-6 py-3 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] relative z-10"
          >
            <Download size={20} className="animate-bounce" />
            Download PDF
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Experience Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4 border-b-[4px] border-black dark:border-white pb-4 relative overflow-hidden">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-12 h-12 rounded-full border-[3px] border-black dark:border-white bg-[#FFB074] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-black relative z-10"
              >
                <Briefcase size={20} />
              </motion.div>
              <h3 className="text-3xl font-black uppercase tracking-widest text-black dark:text-white relative z-10">Experience</h3>
            </div>
            
            <div className="flex flex-col gap-8 ml-6 pl-8 relative">
              {/* Animated Timeline Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-[-2px] top-0 w-[4px] bg-black dark:bg-white rounded-full origin-top"
              />

              {experience.map((item, i) => (
                <motion.div 
                  key={`exp-${i}`}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: i * 0.1 } } }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: i * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -left-[42px] top-2 w-6 h-6 bg-[#FFB074] border-[4px] border-black dark:border-white rounded-full group-hover:scale-150 group-hover:bg-white transition-all z-10" 
                  />
                  
                  {/* Card Content */}
                  <div className="bg-white dark:bg-zinc-900 border-[3px] border-black dark:border-white rounded-[24px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 hover:translate-x-1 transition-all duration-300">
                    <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
                      {item.date}
                    </span>
                    <h4 className="text-2xl font-black uppercase leading-tight mb-1 text-black dark:text-white">{item.role}</h4>
                    <p className="text-[#A3F1B6] font-black uppercase text-sm mb-4 [-webkit-text-stroke:0.5px_black] dark:[-webkit-text-stroke:0.5px_white] tracking-wider">{item.company}</p>
                    <p className="font-medium text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4 border-b-[4px] border-black dark:border-white pb-4 relative overflow-hidden">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-12 h-12 rounded-full border-[3px] border-black dark:border-white bg-[#A3F1B6] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-black relative z-10"
              >
                <GraduationCap size={20} />
              </motion.div>
              <h3 className="text-3xl font-black uppercase tracking-widest text-black dark:text-white relative z-10">Education</h3>
            </div>
            
            <div className="flex flex-col gap-8 ml-6 pl-8 relative">
              {/* Animated Timeline Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-[-2px] top-0 w-[4px] bg-black dark:bg-white rounded-full origin-top"
              />

              {education.map((item, i) => (
                <motion.div 
                  key={`edu-${i}`}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: i * 0.1 } } }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: i * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -left-[42px] top-2 w-6 h-6 bg-[#A3F1B6] border-[4px] border-black dark:border-white rounded-full group-hover:scale-150 group-hover:bg-white transition-all z-10" 
                  />

                  {/* Card Content */}
                  <div className="bg-white dark:bg-zinc-900 border-[3px] border-black dark:border-white rounded-[24px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 hover:translate-x-1 transition-all duration-300">
                    <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
                      {item.date}
                    </span>
                    <h4 className="text-2xl font-black uppercase leading-tight mb-1 text-black dark:text-white">{item.degree}</h4>
                    <p className="text-[#D3B8FE] font-black uppercase text-sm mb-4 [-webkit-text-stroke:0.5px_black] dark:[-webkit-text-stroke:0.5px_white] tracking-wider">{item.school}</p>
                    <p className="font-medium text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};