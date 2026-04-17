import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, Star } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="Contact" className="w-full h-screen bg-[#FFE392] dark:bg-[#1a1a1a] text-black dark:text-white border-black dark:border-white relative overflow-hidden flex flex-col justify-between transition-colors">
      
      <div className="w-full border-b-[4px] border-black dark:border-white bg-white dark:bg-black py-3 overflow-hidden flex whitespace-nowrap">
       <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className="flex gap-4 md:gap-6 items-center text-black dark:text-white">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-black uppercase tracking-widest">
              <span>Frontend Developer</span><Star className="w-3 h-3 fill-[#D3B8FE] stroke-black dark:stroke-white stroke-2" />
              <span className="text-transparent [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white]">UI/UX Designer</span><Star className="w-3 h-3 fill-[#FFB074] stroke-black dark:stroke-white stroke-2" />
              <span>Creative Thinker</span><Star className="w-3 h-3 fill-[#A3F1B6] stroke-black dark:stroke-white stroke-2" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10 w-full max-w-6xl mx-auto">
        <div className="bg-white dark:bg-zinc-800 text-black dark:text-white border-[3px] border-black dark:border-white px-5 py-1.5 rounded-full font-black text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] tracking-widest mb-6">
          Ready to start?
        </div>
        
        <h2 className="text-[50px] sm:text-[70px] md:text-[100px] lg:text-[100px] font-display font-black leading-[0.8] tracking-tighter uppercase">
          LET'S <span className="text-white dark:text-black [-webkit-text-stroke:3px_black] dark:[-webkit-text-stroke:3px_white]">BUILD</span>
          <br /> SOMETHING
        </h2>
        
        <p className="text-base md:text-xl font-bold max-w-xl mt-6 leading-snug">
          Currently available for freelance projects & full-time roles. If you're looking for a developer who cares about design, let's talk.
        </p>
        
        <motion.a 
          href="mailto:hello@example.com"
          whileHover={{ scale: 1.05, y: -4, boxShadow: '8px 8px 0px 0px var(--hover-shadow)' }}
          whileTap={{ scale: 0.95, y: 0, boxShadow: '0px 0px 0px 0px var(--hover-shadow)' }}
          className="mt-8 px-6 py-2 bg-[#A3F1B6] text-black border-[4px] border-black dark:border-white rounded-[32px] text-xl font-display font-black tracking-widest shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] flex items-center justify-center gap-4 transition-all uppercase group"
        >
          <Mail className="w-8 h-8 md:w-10 md:h-10 group-hover:-rotate-12 transition-transform" />
          <span className="mt-1">Email Me</span>
        </motion.a>
      </div>

      <div className="border-t-[4px] border-black dark:border-white bg-white dark:bg-black flex flex-col md:flex-row justify-between items-center z-10">
        
        <div className="w-full md:w-1/3 p-6 md:p-10 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black dark:border-white flex justify-center md:justify-start items-center">
          <div className="text-4xl font-display font-black tracking-tighter">
            alex.
          </div>
        </div>
        
        <div className="w-full md:w-1/3 p-6 md:p-10 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black dark:border-white flex justify-center items-center gap-6">
           {[
             { icon: <Github size={24}/>, bg: 'bg-[#D3B8FE]', name: 'GitHub' },
             { icon: <Twitter size={24}/>, bg: 'bg-[#A3F1B6]', name: 'Twitter' },
             { icon: <Linkedin size={24}/>, bg: 'bg-[#FFB074]', name: 'LinkedIn' }
           ].map((social, i) => (
             <motion.a 
               key={i}
               href="#"
               whileHover={{ y: -6, rotate: 10, boxShadow: '6px 6px 0px 0px var(--hover-shadow)' }}
               whileTap={{ y: 0, boxShadow: '0px 0px 0px 0px var(--hover-shadow)' }}
               className={`w-14 h-14 rounded-full border-[3px] border-black dark:border-white flex items-center justify-center text-black ${social.bg} transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] relative group`}
             >
                {social.icon}
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-transparent transition-opacity whitespace-nowrap">
                  {social.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45" />
                </div>
             </motion.a>
           ))}
        </div>
        
        <div className="w-full md:w-1/3 p-6 md:p-10 flex justify-center md:justify-end items-center">
          <div className="text-sm font-black uppercase tracking-widest text-center md:text-right">
            © {new Date().getFullYear()} Alex Dev.
            <br />
            Built with ☕ & Code
          </div>
        </div>
        
      </div>
    </footer>
  );
};