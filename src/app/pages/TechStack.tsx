import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GeometricOverlay } from "../components/GeometricOverlay";
import { Database, Monitor, Cpu, Box, Layers, Code, Zap, Globe } from "lucide-react";

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const coreTools = [
    { name: "React 19", desc: "Concurrent rendering, RSCs, & complex state management.", icon: <Code size={20} /> },
    { name: "TypeScript", desc: "Strict typing, generics, & interface contracts.", icon: <Box size={20} /> },
    { name: "Tailwind CSS", desc: "Utility-first design systems & fluid typography.", icon: <Layers size={20} /> },
    { name: "Framer Motion", desc: "Physics-based declarative UI animation.", icon: <Zap size={20} /> }
  ];

  const systemsTools = [
    { name: "Three.js & R3F", desc: "WebGL rendering & 3D scene graphs.", icon: <Globe size={20} /> },
    { name: "Node.js", desc: "Server-side runtime & build pipelines.", icon: <Database size={20} /> },
    { name: "Vite / Next.js", desc: "Bundling, SSR, & static generation.", icon: <Cpu size={20} /> },
    { name: "Supabase", desc: "Postgres, Auth, & Realtime subscriptions.", icon: <Monitor size={20} /> }
  ];

  return (
    <div className="bg-[#050505] text-white w-full min-h-screen relative selection:bg-white selection:text-black overflow-hidden" ref={containerRef}>
      <GeometricOverlay light={true} />
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] flex justify-between px-6 md:px-12">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 pb-12 md:pb-24 z-10 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 relative h-full flex flex-col justify-between flex-grow">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-between items-start border-b border-white/20 pb-6 mb-12 md:mb-0"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase font-sans flex flex-col gap-1 text-white/50">
              <span className="text-white">SYS.REQ // VALIDATED</span>
              <span>Dependencies & Environments</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mt-auto">
            
            <div className="lg:col-span-4 border-l border-white/20 pl-6 pb-2 hidden lg:block">
              <p className="text-sm font-sans tracking-wide leading-relaxed opacity-60">
                A highly optimized ecosystem of modern web technologies. Focused on performance, type safety, and raw computing power. 
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-end z-20 pb-4 relative">
              <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="text-left lg:text-right">
                <h1 className="text-[14vw] lg:text-[8vw] leading-[0.85] tracking-tighter uppercase font-light">
                  <motion.span 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="block overflow-hidden"
                  >
                    Technical
                  </motion.span>
                  <motion.span 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    className="block overflow-hidden italic text-white/80"
                  >
                    Architecture
                  </motion.span>
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILS & BENTO GRID SECTION --- */}
      <section className="py-24 md:py-40 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            
            {/* Primary Image Module */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-[#111] border border-white/10 p-2 relative group min-h-[400px] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByYWNrJTIwbGlnaHRzJTIwbmV0d29ya3xlbnwxfHx8fDE3NzM0NzYwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Server Core" 
                className="w-full h-full object-cover grayscale contrast-125 opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <h3 className="text-3xl md:text-5xl font-light uppercase tracking-tighter">Infrastructure</h3>
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase border border-white/20 px-3 py-1 bg-black/50 backdrop-blur-sm">
                  Layer 01
                </span>
              </div>
            </motion.div>

            {/* Core Tools Module */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-5 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 flex flex-col justify-between group shadow-[8px_8px_0px_rgba(255,255,255,0.05)] hover:shadow-[12px_12px_0px_rgba(255,255,255,0.1)] transition-all"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/50">Core Frameworks</div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>

              <div className="flex flex-col gap-6">
                {coreTools.map((tool, i) => (
                  <div key={i} className="flex gap-4 items-start pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="p-2 bg-white/5 border border-white/10 text-white/70 group-hover:text-white transition-colors">
                      {tool.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold tracking-tight uppercase mb-1">{tool.name}</h4>
                      <p className="text-xs font-sans text-white/50 leading-relaxed">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Systems & Rendering Module */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 flex flex-col justify-between group shadow-[8px_8px_0px_rgba(255,255,255,0.05)]"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/50">Ecosystem & Rendering</div>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-white/30"></div>
                  <div className="w-1 h-3 bg-white/60"></div>
                  <div className="w-1 h-3 bg-white"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {systemsTools.map((tool, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-white/40">{tool.icon}</span>
                      <h4 className="text-sm font-bold tracking-tight uppercase">{tool.name}</h4>
                    </div>
                    <p className="text-[11px] font-sans text-white/50 leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Abstract Graphic Module */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-6 bg-[#111] border border-white/10 p-2 relative overflow-hidden group min-h-[300px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1636990729669-70b389c7662a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUy0WF0aCUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NzM0NzYwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Abstract Tech" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-700"
              />
              
              <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                <div className="text-center">
                  <div className="text-[10px] font-sans tracking-[0.5em] text-white/50 mb-4">SYSTEM CAPACITY</div>
                  <div className="text-6xl md:text-8xl font-light tracking-tighter uppercase">99.9%</div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
}