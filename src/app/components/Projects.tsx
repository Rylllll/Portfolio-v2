import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, FolderGit2, Sparkles, Star, Zap, CircleDashed } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack headless commerce solution built with Next.js, Stripe, and Shopify. Features dynamic routing and cart management.',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    color: 'bg-[#D3B8FE]',
    img: 'https://images.unsplash.com/photo-1676793894040-b6dd72276620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    title: 'Finance Dashboard',
    desc: 'Real-time analytics dashboard with WebSockets, Recharts, and complex data grids. Built for high-frequency trading visualization.',
    tags: ['React', 'TypeScript', 'Recharts'],
    color: 'bg-[#A3F1B6]',
    img: 'https://images.unsplash.com/photo-1613347761493-4060c969cd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    title: 'Mobile Wellness App',
    desc: 'A progressive web app focusing on mental health tracking and daily wellness. Includes animated gamification elements.',
    tags: ['React Native', 'Firebase', 'Framer'],
    color: 'bg-[#FFE392]',
    img: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
];

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Parallax values for floating elements
  const yFast = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateWheel = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="Projects" ref={containerRef} className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#F4EFE6] dark:bg-[#121212] border-b-[4px] border-black dark:border-white relative overflow-clip transition-colors">
       
       {/* Background Grid */}
       <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

       {/* Floating Animated Background Elements */}
       <motion.div style={{ y: yFast, rotate: rotateWheel }} className="absolute left-10 top-1/3 opacity-20 pointer-events-none z-0">
         <Star size={80} className="text-black dark:text-white stroke-[2px]" />
       </motion.div>
       <motion.div style={{ y: ySlow, rotate: rotateWheel }} className="absolute right-20 bottom-1/4 opacity-20 pointer-events-none z-0">
         <CircleDashed size={120} className="text-black dark:text-white stroke-[1px]" />
       </motion.div>

       {/* Vertical Animated Marquee (Right Side) */}
       <div className="absolute right-4 top-0 bottom-0 w-8 border-l-[2px] border-black/10 dark:border-white/10 hidden md:flex flex-col overflow-hidden opacity-30 select-none z-0 pointer-events-none">
         <motion.div 
           animate={{ y: [-1000, 0] }} 
           transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
           className="flex flex-col gap-8 text-[10px] font-black tracking-[0.3em] uppercase text-black dark:text-white"
           style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
         >
           {[...Array(10)].map((_, i) => (
              <span key={i}>CASE STUDIES • DIGITAL PRODUCTS • USER EXPERIENCE • INTERFACES • </span>
           ))}
         </motion.div>
       </div>

       <div className="max-w-6xl w-full mx-auto relative z-10 md:pr-8">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 w-full">
            
            <div className="flex flex-col relative">
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -left-12 -top-12 opacity-20 pointer-events-none"
              >
                <Zap size={100} className="text-[#FFB074] dark:text-[#FFB074] fill-current" />
              </motion.div>

              <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full border-[2px] border-black dark:border-white font-bold uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] w-max mb-4 relative z-10">
                <span className="w-2 h-2 bg-[#FFB074] rounded-full animate-pulse border border-black dark:border-white" />
                Featured Works
              </div>
              <div className="relative uppercase z-10">
                <h2 className="absolute top-2 left-2 text-[60px] md:text-[80px] lg:text-[110px] font-display font-black leading-[0.8] tracking-tight whitespace-nowrap text-transparent opacity-30 [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">
                  PROJECTS
                </h2>
                <h2 className="relative text-[60px] md:text-[80px] lg:text-[110px] font-display font-black leading-[0.8] tracking-tight whitespace-nowrap text-black dark:text-white">
                  PROJECTS
                </h2>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="text-right flex-shrink-0 bg-white dark:bg-zinc-900 p-4 border-[3px] border-black dark:border-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform rotate-2 transition-all hidden md:block z-10 relative"
            >
               <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#A3F1B6] border-[2px] border-black dark:border-white rounded-full flex items-center justify-center rotate-12">
                 <Star size={14} className="text-black fill-black" />
               </div>
               <div className="flex justify-end gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full border-[2px] border-black dark:border-white bg-[#FFB074]" />
                  <div className="w-3 h-3 rounded-full border-[2px] border-black dark:border-white bg-[#A3F1B6]" />
                  <div className="w-3 h-3 rounded-full border-[2px] border-black dark:border-white bg-[#D3B8FE]" />
               </div>
               <p className="font-bold uppercase tracking-widest text-xs max-w-[180px] text-black dark:text-white">Selected works from 2021 to Present</p>
            </motion.div>
         </div>

         <div className="flex flex-col gap-24 md:gap-40 mt-12">
            {projects.map((proj, idx) => (
               <ProjectCard key={proj.title} proj={proj} index={idx} />
            ))}
         </div>
       </div>
    </section>
  );
};

const ProjectCard = ({ proj, index }: { proj: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const imgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const isEven = index % 2 === 0;

  // Different sticker colors based on index
  const stickerColors = ['bg-[#FFB074]', 'bg-[#A3F1B6]', 'bg-[#D3B8FE]'];
  const stickerColor = stickerColors[index % stickerColors.length];

  return (
    <motion.div 
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { y: 80, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1.2 } }
      }}
      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:items-stretch transform-gpu group/card`}
    >
       {/* Massive Background Number */}
       <motion.div 
         style={{ y: textY }}
         className={`absolute -top-20 md:-top-32 ${isEven ? 'right-0 lg:right-[-80px]' : 'left-0 lg:left-[-80px]'} text-[150px] md:text-[250px] font-display font-black text-black dark:text-white opacity-[0.03] dark:opacity-[0.05] z-0 pointer-events-none select-none leading-none tracking-tighter`}
       >
          0{index + 1}
       </motion.div>

       {/* Image Container */}
       <div className="w-full lg:w-[65%] h-[350px] md:h-[550px] rounded-[32px] md:rounded-[40px] border-[4px] border-black dark:border-white overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-black z-10">
          
          <motion.div style={{ y: imgY, scale: 1.2 }} className="absolute inset-0 w-full h-full opacity-60 group-hover/card:opacity-100 transition-all duration-700 ease-out">
             <ImageWithFallback src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
          </motion.div>
          
          <div className="absolute top-6 left-6 flex gap-2">
             <motion.div whileHover={{ scale: 1.05 }} className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-4 py-2 rounded-full border-[2px] border-black dark:border-white font-bold text-xs uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] flex items-center gap-2 cursor-default text-black dark:text-white transition-all">
               <FolderGit2 size={14} className="text-[#FFB074]" /> Case Study
             </motion.div>
          </div>

          {/* Brutalist Sticker */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: isEven ? -10 : 10 }}
            className={`absolute bottom-6 ${isEven ? 'right-6' : 'left-6'} w-20 h-20 md:w-24 md:h-24 ${stickerColor} rounded-full border-[3px] border-black dark:border-white flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rotate-12 z-20 transition-transform cursor-pointer`}
          >
            <span className="font-black text-black text-xs md:text-sm uppercase tracking-widest text-center leading-tight">
              Top <br/> Pick
            </span>
          </motion.div>
       </div>

       {/* Content Box */}
       <motion.div 
         className={`[--hover-shadow:rgba(0,0,0,1)] dark:[--hover-shadow:rgba(255,255,255,1)] w-[90%] lg:w-[45%] bg-white dark:bg-zinc-900 border-[4px] border-black dark:border-white rounded-[32px] p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] z-20 flex flex-col justify-center -mt-16 lg:mt-12 transition-all duration-300 ${isEven ? 'lg:-ml-20' : 'lg:-mr-20'} relative`}
         whileHover={{ y: -8, boxShadow: '12px 12px 0px 0px var(--hover-shadow)' }}
       >
          <div className="flex items-center gap-3 mb-4">
             <Sparkles size={20} className={isEven ? "text-[#D3B8FE]" : "text-[#A3F1B6]"} />
             <span className="font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400">Project 0{index + 1}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-black leading-tight mb-4 text-black dark:text-white">{proj.title}</h3>
          <p className="text-base md:text-lg font-medium mb-8 text-gray-800 dark:text-gray-300 leading-relaxed">{proj.desc}</p>
          
          <div className="flex flex-wrap gap-2 mb-10">
             {proj.tags.map((tag: string, i: number) => (
               <motion.span 
                 key={tag} 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2 + (i * 0.1), type: "spring", bounce: 0.4 }}
                 viewport={{ once: true }}
                 className={`px-4 py-1.5 rounded-full border-[2px] border-black dark:border-white font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] text-black ${proj.color} hover:-translate-y-1 transition-transform cursor-default`}
               >
                 {tag}
               </motion.span>
             ))}
          </div>
          
          <motion.a 
            href="#" whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-between w-full p-4 rounded-[20px] border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group ${proj.color} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 overflow-hidden relative`}
          >
             <div className="absolute inset-0 bg-black dark:bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
             
             <span className="font-black text-lg md:text-xl uppercase tracking-wider ml-2 text-black group-hover:text-white dark:group-hover:text-black relative z-10 transition-colors duration-300">
               View Live Site
             </span>
             
             <div className="w-12 h-12 rounded-full border-[2px] border-black dark:border-white bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 relative z-10">
                <ArrowUpRight size={24} />
             </div>
          </motion.a>
       </motion.div>
    </motion.div>
  );
};