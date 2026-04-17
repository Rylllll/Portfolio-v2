import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, Star, MessageSquareDashed, Send, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  
  // Form State
  const [requestType, setRequestType] = useState('Project');
  const requestTypes = ['Project', 'Full-time', 'Collab', 'Other'];

  // Parallax effect for the main text
  const textY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <footer id="Contact" ref={containerRef} className="w-full min-h-screen bg-[#FFE392] dark:bg-[#1a1a1a] text-black dark:text-white border-t-[4px] border-black dark:border-white relative overflow-hidden flex flex-col justify-between transition-colors">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.04] bg-[radial-gradient(#000_3px,transparent_3px)] dark:bg-[radial-gradient(#fff_3px,transparent_3px)] bg-[size:30px_30px] z-0" />

      {/* Floating Animated Background Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, -5, 0] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute left-10 top-1/3 opacity-20 pointer-events-none z-0 hidden md:block"
      >
         <MessageSquareDashed size={120} className="text-black dark:text-white stroke-[1px]" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -15, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute right-12 top-1/4 opacity-20 pointer-events-none z-0 hidden lg:block"
      >
         <Send size={100} className="text-black dark:text-white stroke-[1px]" />
      </motion.div>

      {/* Top Marquee */}
      <div className="w-full border-b-[4px] border-black dark:border-white bg-white dark:bg-black py-3 overflow-hidden flex whitespace-nowrap z-10 relative">
       <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className="flex gap-4 md:gap-6 items-center text-black dark:text-white">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-black uppercase tracking-widest">
              <span>Frontend Engineer</span><Star className="w-3 h-3 fill-[#D3B8FE] stroke-black dark:stroke-white stroke-2" />
              <span className="text-transparent [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white]">Digital Architect</span><Star className="w-3 h-3 fill-[#FFB074] stroke-black dark:stroke-white stroke-2" />
              <span>3D Experiences</span><Star className="w-3 h-3 fill-[#A3F1B6] stroke-black dark:stroke-white stroke-2" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content: Split Layout */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start justify-center text-left w-full">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 text-black dark:text-white border-[3px] border-black dark:border-white px-5 py-1.5 rounded-full font-black text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] tracking-widest mb-6 relative"
          >
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-[2px] border-black dark:border-white animate-pulse" />
            Ready to start?
          </motion.div>
          
          <motion.h2 
            style={{ y: textY }}
            className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] font-display font-black leading-[0.9] tracking-tighter uppercase relative z-10"
          >
            LET'S <span className="text-white dark:text-black [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">BUILD</span>
            <br /> SOMETHING
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm md:text-base lg:text-lg font-bold max-w-md mt-6 leading-relaxed bg-white/50 dark:bg-black/50 backdrop-blur-sm p-5 rounded-2xl border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            Currently available for freelance projects & full-time roles. If you're looking for an engineer who cares about design and performance, drop me a message.
          </motion.p>
        </div>

        {/* Right Side: Interactive Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full bg-white dark:bg-zinc-900 border-[4px] border-black dark:border-white rounded-[32px] p-6 md:p-8 lg:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex flex-col relative"
        >
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full">
            
            {/* Type of Request */}
            <div className="flex flex-col gap-3 mb-6">
              <label className="font-black uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400">Type of Request</label>
              <div className="flex flex-wrap gap-3">
                {requestTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setRequestType(type)}
                    className={`px-4 py-2 rounded-full border-[2px] border-black dark:border-white font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                      requestType === type 
                        ? 'bg-[#A3F1B6] dark:bg-[#A3F1B6] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] -translate-y-1' 
                        : 'bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2 mb-6">
              <label className="font-black uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400">Your Email</label>
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="w-full p-4 bg-gray-50 dark:bg-zinc-800 text-black dark:text-white border-[3px] border-black dark:border-white rounded-xl focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-shadow text-sm md:text-base font-bold placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            {/* Description Textarea */}
            <div className="flex flex-col gap-2 mb-8">
              <label className="font-black uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400">Description</label>
              <textarea 
                placeholder="Tell me about your project, timeline, and goals..."
                className="w-full min-h-[150px] p-4 bg-gray-50 dark:bg-zinc-800 text-black dark:text-white border-[3px] border-black dark:border-white rounded-xl focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-shadow resize-none text-sm md:text-base font-bold placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02, y: -2, boxShadow: '6px 6px 0px 0px var(--hover-shadow)' }}
              whileTap={{ scale: 0.98, y: 0, boxShadow: '0px 0px 0px 0px var(--hover-shadow)' }}
              className="w-full px-6 py-4 bg-[#D3B8FE] text-black border-[4px] border-black dark:border-white rounded-2xl text-lg font-display font-black tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] [--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] flex items-center justify-between transition-all uppercase group"
            >
              <span>Send Message</span>
              <div className="bg-white/40 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={20} className="text-black" />
              </div>
            </motion.button>

          </form>
        </motion.div>
      </div>

      {/* Footer Bottom Line */}
      <div className="border-t-[4px] border-black dark:border-white bg-white dark:bg-black flex flex-col md:flex-row justify-between items-center z-10 relative">
        
        <div className="w-full md:w-1/3 p-6 md:p-8 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black dark:border-white flex justify-center md:justify-start items-center">
          <div className="text-3xl font-display font-black tracking-tighter">
            reymark.
          </div>
        </div>
        
        <div className="w-full md:w-1/3 p-6 md:p-8 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black dark:border-white flex justify-center items-center gap-6">
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
                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-transparent transition-opacity whitespace-nowrap z-20">
                  {social.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45" />
                </div>
             </motion.a>
           ))}
        </div>
        
        <div className="w-full md:w-1/3 p-6 md:p-8 flex justify-center md:justify-end items-center">
          <div className="text-xs md:text-sm font-black uppercase tracking-widest text-center md:text-right">
            © {new Date().getFullYear()} Reymark Dev.
            <br />
            Built with ☕ & Code
          </div>
        </div>
        
      </div>
    </footer>
  );
};