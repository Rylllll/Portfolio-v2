import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Download } from 'lucide-react';

const experience = [
  { role: "Senior UI/UX Engineer", company: "Creative Studio Alpha", date: "2022 — Present", desc: "Spearheaded the redesign of the core product dashboard, improving user retention by 40%. Led a team of 3 junior developers in implementing a new React-based design system." },
  { role: "Frontend Developer", company: "Tech Startups Inc.", date: "2020 — 2022", desc: "Built scalable web applications using Next.js and Tailwind CSS. Integrated complex Stripe payment flows and real-time WebSocket data." }
];

const education = [
  { degree: "B.S. Computer Science", school: "University of Technology", date: "2016 — 2020", desc: "Graduated with Honors. Specialized in Human-Computer Interaction and Software Architecture." }
];

export const Resume = () => {
  return (
    <section id="Resume" className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#F4EFE6] dark:bg-[#121212] border-b-[4px] border-black dark:border-white relative overflow-clip transition-colors">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 w-full">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full border-[2px] border-black dark:border-white font-bold uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] w-max mb-4">
              <span className="w-2 h-2 bg-[#A3F1B6] rounded-full animate-pulse border border-black" />
              The Journey
            </div>
             <div className="relative uppercase">
               <h2 className="absolute top-2 left-2 text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-transparent opacity-30 [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">
                  RESUME
                </h2>
                <h2 className="relative text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-black dark:text-white">
                  RESUME
                </h2>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -4, boxShadow: '6px 6px 0px 0px var(--hover-shadow)' }}
            whileTap={{ scale: 0.95, y: 0, boxShadow: '0px 0px 0px 0px var(--hover-shadow)' }}
            className="flex items-center gap-3 bg-[#D3B8FE] text-black border-[3px] border-black dark:border-white rounded-full px-6 py-3 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)]"
          >
            <Download size={20} />
            Download PDF
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4 border-b-[4px] border-black dark:border-white pb-4">
              <div className="w-12 h-12 rounded-full border-[3px] border-black dark:border-white bg-[#FFB074] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-black"><Briefcase size={20} /></div>
              <h3 className="text-3xl font-black uppercase tracking-widest text-black dark:text-white">Experience</h3>
            </div>
            
            <div className="flex flex-col gap-8 border-l-[4px] border-black dark:border-white ml-6 pl-8 relative">
              {experience.map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: i * 0.1 } } }}
                  className="relative group"
                >
                  <div className="absolute -left-[42px] top-2 w-6 h-6 bg-white dark:bg-zinc-900 border-[4px] border-black dark:border-white rounded-full group-hover:scale-125 transition-transform" />
                  <div className="bg-white dark:bg-zinc-900 border-[3px] border-black dark:border-white rounded-[24px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 transition-all">
                    <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">{item.date}</span>
                    <h4 className="text-2xl font-black uppercase leading-tight mb-1 text-black dark:text-white">{item.role}</h4>
                    <p className="text-[#A3F1B6] font-black uppercase text-sm mb-4 [-webkit-text-stroke:0.5px_black] dark:[-webkit-text-stroke:0.5px_white]">{item.company}</p>
                    <p className="font-medium text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4 border-b-[4px] border-black dark:border-white pb-4">
              <div className="w-12 h-12 rounded-full border-[3px] border-black dark:border-white bg-[#A3F1B6] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-black"><GraduationCap size={20} /></div>
              <h3 className="text-3xl font-black uppercase tracking-widest text-black dark:text-white">Education</h3>
            </div>
            
            <div className="flex flex-col gap-8 border-l-[4px] border-black dark:border-white ml-6 pl-8 relative">
              {education.map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: i * 0.1 } } }}
                  className="relative group"
                >
                  <div className="absolute -left-[42px] top-2 w-6 h-6 bg-white dark:bg-zinc-900 border-[4px] border-black dark:border-white rounded-full group-hover:scale-125 transition-transform" />
                  <div className="bg-white dark:bg-zinc-900 border-[3px] border-black dark:border-white rounded-[24px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 transition-all">
                    <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">{item.date}</span>
                    <h4 className="text-2xl font-black uppercase leading-tight mb-1 text-black dark:text-white">{item.degree}</h4>
                    <p className="text-[#D3B8FE] font-black uppercase text-sm mb-4 [-webkit-text-stroke:0.5px_black] dark:[-webkit-text-stroke:0.5px_white]">{item.school}</p>
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