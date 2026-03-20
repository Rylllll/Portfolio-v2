import { motion, useSpring, useMotionValue, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { GeometricOverlay } from "../components/GeometricOverlay";

export const projects = [
  {
    id: "headless-e-commerce",
    title: "Headless E-Commerce",
    client: "Next.js / Shopify",
    year: "2025",
    image: "https://images.unsplash.com/photo-1630146694733-9d730e4ed310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYnJ1dGFsaXN0JTIwd2ViJTIwdWklMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczNDc2MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1637043756935-c60895cc05df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwbW9kZXJuJTIwd2ViJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzQ3NjIxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    image3: "https://images.unsplash.com/photo-1759790476020-eaee96223d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMGFyY2hpdGVjdHVyYWwlMjBncmlkJTIwbGluZXN8ZW58MXx8fHwxNzczNDc2NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image4: "https://images.unsplash.com/photo-1663177320254-51b22caf9ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vZGVybiUyMHdlYiUyMGRlc2lnbiUyMGludGVyZmFjZSUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzczNDc2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    services: "Front-End, WebGL",
    description: "An ultra-performant storefront prioritizing raw rendering speed. We rebuilt the entire product discovery flow using a custom Next.js edge-rendering pipeline.",
    tech: ["Next.js", "Zustand", "Tailwind", "Shopify API"],
    metrics: { "Lighthouse": "100", "LCP": "0.8s", "Conversion": "+24%" }
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    client: "React Context API",
    year: "2025",
    image: "https://images.unsplash.com/photo-1720962158812-d16549f1e5a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwZGFyayUyMHVpfGVufDF8fHx8MTc3MzQ3NjIyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1617357908136-458960e82e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwY29kZSUyMHRlcm1pbmFsfGVufDF8fHx8MTc3MzQ3NjIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    image3: "https://images.unsplash.com/photo-1737265396686-00377dcd99d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbiUyMGRhcmslMjBtb2RlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczNDc2NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image4: "https://images.unsplash.com/photo-1763888450540-9b59abff803b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2NyZWVuJTIwY2xvc2UlMjB1cCUyMG1hY3JvJTIwbWFjcm98ZW58MXx8fHwxNzczNDc2NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    services: "UI Engineering",
    description: "A dark-mode analytics platform visualizing multi-million node datasets in real-time utilizing custom D3 layer rendering.",
    tech: ["React 18", "D3.js", "Framer Motion", "WebSockets"],
    metrics: { "Data Points": "2.5M+", "Latency": "12ms", "Users": "15k" }
  },
  {
    id: "interactive-webgl",
    title: "Interactive WebGL",
    client: "Three.js Canvas",
    year: "2024",
    image: "https://images.unsplash.com/photo-1768330187168-8acee7753983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBuZXR3b3JrJTIwZ3JpZHxlbnwxfHx8fDE3NzM0NzYyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1658134203376-d3e665975587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMHdpcmVmcmFtZSUyMDNkJTIwcmVuZGVyfGVufDF8fHx8MTc3MzQ3NjIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    image3: "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjAzZCUyMG5ldHdvcmslMjBkaWdpdGFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzQ3NjQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    image4: "https://images.unsplash.com/photo-1725476368772-c725ba2c1280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vbm9jaHJvbWUlMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGxheW91dHxlbnwxfHx8fDE3NzM0NzY0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    services: "Creative Dev",
    description: "A generative art installation mapping spatial data to fluid web physics. Implemented custom GLSL fragment shaders.",
    tech: ["Three.js", "GLSL", "React Three Fiber", "Math"],
    metrics: { "Polygons": "500k", "FPS": "60 locked", "Physics": "Custom" }
  },
  {
    id: "design-system",
    title: "Design System",
    client: "Tailwind Architecture",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558707538-c56435bdcdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHR5cG9ncmFwaHklMjBhYnN0cmFjdCUyMGxheW91dHxlbnwxfHx8fDE3NzM0NzYyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    image2: "https://images.unsplash.com/photo-1606078009817-1e4c6296893f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFic3RyYWN0JTIwYXJjaGl0ZWN0dXJlJTIwZ2VvbWV0cmljfGVufDF8fHx8MTc3MzQ3NjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    image3: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJlJTIwY29kZSUyMHdlYiUyMHR5cGVzY3JpcHQlMjB0ZXJtaW5hbCUyMGRhcmt8ZW58MXx8fHwxNzczNDc2NDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image4: "https://images.unsplash.com/photo-1546414701-81cc6963c67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyeSUyMHNoYXBlcyUyMG1pbmltYWwlMjBicnV0YWxpc218ZW58MXx8fHwxNzczNDc2NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    services: "Component Library",
    description: "A foundational monolithic UI kit scaling across 40+ internal products. Built on absolute strict type contracts and pure CSS modules.",
    tech: ["TypeScript", "Tailwind v4", "Storybook", "Figma API"],
    metrics: { "Components": "120+", "Coverage": "100%", "Adoption": "Global" }
  }
];

export function WebsiteWorks() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Custom cursor image tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full bg-[#fcfcfc] text-black min-h-screen relative overflow-hidden selection:bg-black selection:text-white" ref={containerRef}>
      <GeometricOverlay light={false} />
      
      {/* Background Architectural Grid Lines */}
      <div data-section-name="ARCHIVE HEADER" className="fixed inset-0 pointer-events-none z-0 mix-blend-difference opacity-[0.05] flex justify-between px-6 md:px-12">
        <div className="w-[1px] h-full bg-black"></div>
        <div className="w-[1px] h-full bg-black hidden md:block"></div>
        <div className="w-[1px] h-full bg-black hidden lg:block"></div>
        <div className="w-[1px] h-full bg-black"></div>
      </div>

      {/* Floating Image Reveal - Desktop only */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[550px] z-[40] overflow-hidden hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: activeProject !== null ? 1 : 0,
          scale: activeProject !== null ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-full h-full relative">
          {projects.map((project, i) => (
            <img 
              key={i}
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-all duration-700 ease-[0.76,0,0.24,1] ${
                activeProject === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* --- HERO SECTION --- */}
      <section data-section-name="ARCHIVE INDEX" className="relative min-h-[70vh] w-full flex flex-col justify-end pt-32 pb-12 md:pb-24 z-10 border-b border-black/20">
        <div className="container mx-auto px-6 md:px-12 relative h-full flex flex-col justify-between flex-grow">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-between items-start border-b border-black/20 pb-6 mb-12 md:mb-0"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase font-sans flex flex-col gap-1 text-black/50">
              <span className="text-black">IDX.02 // ARCHIVE</span>
              <span>Commercial & Independent</span>
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase font-sans text-right flex flex-col gap-1">
              <span>Timeline</span>
              <span className="opacity-50">2024 — 2025</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mt-auto">
            
            <div className="lg:col-span-4 border-l border-black/20 pl-6 pb-2 hidden lg:block">
              <p className="text-sm font-sans tracking-wide leading-relaxed opacity-60">
                A selection of digital platforms, robust web applications, and experimental marketing sites built with strict attention to performance and typography.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-end z-20 pb-4 relative">
              <motion.div style={{ y: yHeroText, opacity: opacityHero }} className="text-left lg:text-right">
                <h1 className="text-[14vw] lg:text-[9vw] leading-[0.85] tracking-tighter uppercase font-light">
                  <motion.span 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="block overflow-hidden"
                  >
                    Project
                  </motion.span>
                  <motion.span 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    className="block overflow-hidden italic text-black/70"
                  >
                    Archive
                  </motion.span>
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div data-section-name="PROJECT LIST" className="container mx-auto px-6 md:px-12 relative z-10 py-24 md:py-32">
        <div className="flex flex-col border-t border-black/20 relative z-50">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-black/20 transition-colors duration-500 hover:bg-black/5 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              onMouseEnter={() => setActiveProject(i)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Mobile Image Reveal (Inline) */}
              <div className={`md:hidden w-full overflow-hidden transition-all duration-700 ease-[0.76,0,0.24,1] ${activeProject === i ? 'h-[300px] opacity-100 mb-8' : 'h-0 opacity-0 mb-0'}`}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale contrast-125" />
              </div>

              <div className="flex items-start md:items-center gap-6 md:gap-12 w-full md:w-auto z-10 pointer-events-none">
                <span className="text-xs font-sans tracking-[0.2em] text-black/40 mt-2 md:mt-0 w-8">0{i + 1}</span>
                <div className="flex flex-col">
                  <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase group-hover:italic transition-all duration-500 md:group-hover:translate-x-4">
                    {project.title}
                  </h2>
                  <div className="flex gap-2 mt-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:group-hover:translate-x-4">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[9px] tracking-[0.2em] uppercase border border-black/20 px-2 py-0.5 font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between md:justify-end items-end md:items-center gap-12 w-full md:w-auto mt-6 md:mt-0 z-10 pointer-events-none">
                <div className="flex flex-col text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black/60 group-hover:text-black transition-colors duration-500 max-w-[280px]">
                  <span className="font-bold border-b border-black/20 pb-1 mb-2 inline-block w-max">{project.services}</span>
                  <span className="leading-relaxed opacity-80">{project.description}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black/60">{project.year}</span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 transform group-hover:-rotate-45">
                    ↗
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
