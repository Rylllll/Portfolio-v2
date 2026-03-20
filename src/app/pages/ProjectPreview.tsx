import { motion, useScroll, useTransform } from "motion/react";
import { useParams, useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowUpRight, User, Calendar, Layers, Globe } from "lucide-react";
import { GeometricOverlay } from "../components/GeometricOverlay";
import { projects } from "./WebsiteWorks";

export function ProjectPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find the project based on the URL param, or default to the first one if not found
  const project = projects.find(
    (p) => p.id === id
  ) || projects[0];

  return (
    <div className="w-full bg-[#fcfcfc] text-black min-h-screen relative overflow-hidden selection:bg-black selection:text-white" ref={containerRef}>
      <GeometricOverlay light={false} />

      {/* Background Architectural Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 mix-blend-difference opacity-[0.05] flex justify-between px-6 md:px-12">
        <div className="w-[1px] h-full bg-black"></div>
        <div className="w-[1px] h-full bg-black hidden md:block"></div>
        <div className="w-[1px] h-full bg-black hidden lg:block"></div>
        <div className="w-[1px] h-full bg-black"></div>
      </div>

      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 mix-blend-difference text-white pointer-events-none">
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          onClick={() => navigate("/projects")}
          className="text-xs font-sans tracking-[0.2em] uppercase hover:opacity-70 transition-all flex items-center gap-3 pointer-events-auto group"
        >
          <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
            <ArrowLeft size={14} strokeWidth={1.5} />
          </div>
          <span>Back to Archive</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <div data-section-name="OVERVIEW" className="w-full pt-32 pb-16 px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-12 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-[8vw] lg:text-[7vw] font-light tracking-tighter uppercase leading-[0.85] text-left">
                {project.title}
              </h1>
            </div>
            <div className="lg:col-span-4 pb-2 md:pb-4 hidden lg:block">
              <p className="text-[10px] md:text-xs font-sans tracking-[0.2em] text-black/40 uppercase text-right">
                [ SEC. 01 — PROJECT OVERVIEW ]
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 border-t border-black/10 pt-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="block text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black/40">Client</span>
              </div>
              <span className="block text-sm md:text-base font-bold tracking-wide uppercase">{project.client}</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="block text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black/40">Year</span>
              </div>
              <span className="block text-sm md:text-base font-bold tracking-wide uppercase">{project.year}</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="block text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black/40">Services</span>
              </div>
              <span className="block text-sm md:text-base font-bold tracking-wide uppercase">{project.services}</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="block text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black/40">Live Site</span>
              </div>
              <a href="#" className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-wide uppercase hover:opacity-60 transition-all w-fit group">
                Visit Platform
                <div className="w-6 h-6 border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowUpRight size={12} strokeWidth={2} />
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Image Full Bleed */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden group"
        >
          <motion.img 
            style={{ y: yImage }}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-[120%] object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
          />
          
          <div className="absolute bottom-6 left-6 text-white mix-blend-difference text-[10px] font-sans tracking-[0.3em] uppercase">
            [ FIG. 01 — ARCHITECTURE ]
          </div>
        </motion.div>
      </div>

      {/* Content Details */}
      <div data-section-name="TECHNICAL CORE" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10 border-b border-black/10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6"
        >
          <div className="md:col-span-4 flex flex-col justify-between">
            <h2 className="text-2xl md:text-4xl font-light tracking-tighter uppercase mb-6 relative inline-block">
              Technical Core
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-black"></span>
            </h2>
            
            <div className="mt-12 hidden md:block">
              <span className="block text-[10px] font-sans tracking-[0.2em] uppercase text-black/40 mb-4">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs tracking-[0.1em] uppercase border border-black/20 px-3 py-1 font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-xl md:text-4xl font-light leading-[1.4] text-black tracking-tight">
              {project.description} We stripped away unnecessary dependencies, focusing intensely on semantic markup, modular react components, and scalable state management.
            </p>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-black/60 mt-12">
              The result is a codebase that is as robust as it is clean. Through dynamic rendering, intelligent bundle splitting, and strictly typed variables, the application achieves perfect fluidity with zero frame drops or latency spikes.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Image Gallery & Metrics */}
      <div data-section-name="PERFORMANCE" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="md:col-span-7 aspect-[4/5] md:aspect-[16/10] w-full overflow-hidden relative group"
          >
            <img 
              src={project.image2} 
              alt="UI Details view" 
              className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 text-white mix-blend-difference text-[10px] font-sans tracking-[0.3em] uppercase">
              [ FIG. 02 — COMPONENT STRUCTURE ]
            </div>
          </motion.div>
          
          <div className="md:col-span-5 flex flex-col gap-12 mt-12 md:mt-0 px-0 md:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <h3 className="text-sm font-sans tracking-[0.3em] uppercase text-black/40 mb-6">Performance Metrics</h3>
              
              <div className="flex flex-col border-t border-black/20">
                {Object.entries(project.metrics).map(([key, value], idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-black/20">
                    <span className="text-xs md:text-sm font-sans tracking-[0.1em] uppercase">{key}</span>
                    <span className="text-xl md:text-3xl font-light tracking-tighter">{value as string}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-sm md:text-base font-light leading-relaxed text-black/60"
            >
              By heavily relying on custom hooks and isolated state providers, the application isolates re-renders perfectly. Network requests are handled concurrently, creating a seamless multi-threaded user experience.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Expanded Grid Images */}
      <div data-section-name="GALLERY" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="aspect-[4/3] w-full overflow-hidden relative group"
          >
            <img 
              src={project.image3} 
              alt="Design details" 
              className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 right-6 text-white mix-blend-difference text-[10px] font-sans tracking-[0.3em] uppercase">
              [ FIG. 03 — INTERACTION ]
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="aspect-[4/3] w-full overflow-hidden relative group md:mt-24"
          >
            <img 
              src={project.image4} 
              alt="Data mapping" 
              className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 right-6 text-white mix-blend-difference text-[10px] font-sans tracking-[0.3em] uppercase">
              [ FIG. 04 — DATA MAPPING ]
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Next Project Footer */}
      <div className="w-full border-t border-black/20 py-24 md:py-40 px-6 md:px-12 bg-black text-white relative overflow-hidden group cursor-pointer" onClick={() => navigate("/projects")}>
        <div className="absolute inset-0 bg-white/5 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-[0.76,0,0.24,1]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-white/50 mb-6">End of Case Study</span>
          <h2 className="text-5xl md:text-[8vw] font-light tracking-tighter uppercase group-hover:italic transition-all duration-500">
            Return to Archive
          </h2>
        </div>
      </div>
    </div>
  );
}