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
    <section id="Resume" className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#F4EFE6] border-b-[4px] border-black relative overflow-clip">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Unified Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 w-full">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full border-[2px] border-black font-bold uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-max mb-4">
              <span className="w-2 h-2 bg-[#A3F1B6] rounded-full animate-pulse" />
              The Journey
            </div>
             <div className="relative uppercase">
               <h2 className="absolute top-2 left-2 text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-transparent opacity-30" style={{ WebkitTextStroke: '2px black' }}>
                  RESUME
                </h2>
                <h2 className="relative text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-black">
                  RESUME
                </h2>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -4, boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)' }}
            whileTap={{ scale: 0.95, y: 0, boxShadow: '0px 0px 0px 0px rgba(0,0,0,1)' }}
            className="flex items-center gap-3 bg-[#D3B8FE] text-black border-[3px] border-black rounded-full px-6 py-3 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Download size={20} />
            Download PDF
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4 border-b-[4px] border-black pb-4">
              <div className="w-12 h-12 rounded-full border-[3px] border-black bg-[#FFB074] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><Briefcase size={20} /></div>
              <h3 className="text-3xl font-black uppercase tracking-widest">Experience</h3>
            </div>
            
            <div className="flex flex-col gap-8 border-l-[4px] border-black ml-6 pl-8 relative">
              {experience.map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: i * 0.1 } } }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-2 w-6 h-6 bg-white border-[4px] border-black rounded-full" />
                  <div className="bg-white border-[3px] border-black rounded-[24px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
                    <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">{item.date}</span>
                    <h4 className="text-2xl font-black uppercase leading-tight mb-1">{item.role}</h4>
                    <p className="text-[#A3F1B6] font-black uppercase text-sm mb-4" style={{ WebkitTextStroke: '0.5px black' }}>{item.company}</p>
                    <p className="font-medium text-gray-700 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4 border-b-[4px] border-black pb-4">
              <div className="w-12 h-12 rounded-full border-[3px] border-black bg-[#A3F1B6] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><GraduationCap size={20} /></div>
              <h3 className="text-3xl font-black uppercase tracking-widest">Education</h3>
            </div>
            
            <div className="flex flex-col gap-8 border-l-[4px] border-black ml-6 pl-8 relative">
              {education.map((item, i) => (
                <motion.div 
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: i * 0.1 } } }}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-2 w-6 h-6 bg-white border-[4px] border-black rounded-full" />
                  <div className="bg-white border-[3px] border-black rounded-[24px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
                    <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">{item.date}</span>
                    <h4 className="text-2xl font-black uppercase leading-tight mb-1">{item.degree}</h4>
                    <p className="text-[#D3B8FE] font-black uppercase text-sm mb-4" style={{ WebkitTextStroke: '0.5px black' }}>{item.school}</p>
                    <p className="font-medium text-gray-700 leading-relaxed text-sm">{item.desc}</p>
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