import { motion, useSpring, useMotionValue, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GeometricOverlay } from "../components/GeometricOverlay";

const experiments = [
  {
    id: "01",
    title: "State Mgmt",
    category: "Architecture",
    description: "Complex hierarchical state propagation patterns. Building a lightweight proxy-based reactive store to visualize component re-render optimization strategies.",
    tech: ["React", "Zustand", "Proxies"],
    image: "https://images.unsplash.com/photo-1650234083227-74c0700b295a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGUlMjBub2RlcyUyMGRhdGF8ZW58MXx8fHwxNzczNDc1Nzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "JAN 2025"
  },
  {
    id: "02",
    title: "Virtual DOM",
    category: "Algorithms",
    description: "Reconciliation algorithms visualizer. A step-by-step interactive engine that animates how React diffs trees and applies minimal DOM updates.",
    tech: ["TypeScript", "D3.js"],
    image: "https://images.unsplash.com/photo-1641357435473-1bad6e870037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGNvbXBvbmVudHMlMjB0cmVlJTIwc3RydWN0dXJlfGVufDF8fHx8MTc3MzQ3NTgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "FEB 2025"
  },
  {
    id: "03",
    title: "Fluid Dynamics",
    category: "WebGL",
    description: "Custom GLSL fragment shaders simulating Navier-Stokes equations for liquid viscosity and momentum. Rendered in real-time within a React context.",
    tech: ["Three.js", "GLSL", "R3F"],
    image: "https://images.unsplash.com/photo-1765410852726-36917d756725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGl0Y2glMjBkaXN0b3J0aW9uJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczNDc1ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "MAR 2025"
  },
  {
    id: "04",
    title: "Motion Springs",
    category: "Interaction",
    description: "Physics-based interaction models. Mapping scroll velocity, drag inertia, and multi-touch gestures to realistic spring tension formulas.",
    tech: ["Framer Motion", "React"],
    image: "https://images.unsplash.com/photo-1653200256306-6dc84510dfb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0aWNsZXMlMjBwaHlzaWNzJTIwc2ltdWxhdGlvbnxlbnwxfHx8fDE3NzM0NzU4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "SEP 2025"
  },
  {
    id: "05",
    title: "Procedural Mesh",
    category: "Generative",
    description: "Algorithmic generation of 3D topologies based on audio frequency data. Real-time mesh deformation utilizing Web Audio API inputs.",
    tech: ["Web Audio", "WebGL", "Math"],
    image: "https://images.unsplash.com/photo-1759268375166-dccebeb149ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYXJ0JTIwbWF0aCUyMHBhdHRlcm58ZW58MXx8fHwxNzczNDc1ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "JAN 2026"
  },
  {
    id: "06",
    title: "Spatial Grid",
    category: "Architecture",
    description: "CSS-Grid driven brutalist layout engine. A parser that converts arbitrary JSON object structures into asymmetric, responsive editorial designs.",
    tech: ["CSS Grid", "Tailwind", "AST"],
    image: "https://images.unsplash.com/photo-1767481626833-dff05d7ab1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHdpcmVmcmFtZSUyMEmyaWQlMjBwYXR0ZXJufGVufDF8fHx8MTc3MzQ3NTgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "MAR 2026"
  }
];

export function Experiments() {
  const [activeExp, setActiveExp] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Pure Three.js Background Implementation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.001); // Light fog
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (e) {
      console.warn("WebGL not supported or context lost", e);
      return;
    }

    // Create particles (dark color for light background)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: 0x000000, // Black particles
      transparent: true,
      opacity: 0.2,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create wireframe sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(15, 2);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.05
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    let currentMouseX = 0;
    let currentMouseY = 0;
    const handleMouseMoveThree = (event: MouseEvent) => {
      currentMouseX = event.clientX / window.innerWidth - 0.5;
      currentMouseY = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMoveThree);

    const clock = new THREE.Clock();
    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      particlesMesh.rotation.y = -0.05 * elapsedTime;
      sphere.rotation.x = 0.1 * elapsedTime;
      sphere.rotation.y = 0.1 * elapsedTime;

      camera.position.x += (currentMouseX * 10 - camera.position.x) * 0.05;
      camera.position.y += (-currentMouseY * 10 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      if (renderer) renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMoveThree);
      if (reqId) cancelAnimationFrame(reqId);
      
      if (renderer) {
        renderer.dispose();
        try {
          renderer.forceContextLoss();
        } catch(e) { /* ignore */ }
      }
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
    };
  }, []);

  return (
    <div className="w-full bg-white text-black min-h-screen relative overflow-hidden" ref={containerRef}>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      />
      
      <GeometricOverlay light={false} />

      {/* Background Architectural Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 mix-blend-difference opacity-[0.05] flex justify-between px-6 md:px-12">
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
          opacity: activeExp !== null ? 1 : 0,
          scale: activeExp !== null ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-full h-full relative">
          {experiments.map((exp, i) => (
            <img 
              key={i}
              src={exp.image}
              alt={exp.title}
              className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-[0.76,0,0.24,1] ${
                activeExp === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 pb-12 md:pb-24 z-10 border-b border-black/20">
        <div className="container mx-auto px-6 md:px-12 relative h-full flex flex-col justify-between flex-grow">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-between items-start border-b border-black/20 pb-6 mb-12 md:mb-0"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase font-sans flex flex-col gap-1 text-black/50">
              <span className="text-black">LAB.DIR // 03</span>
              <span>Research & Development</span>
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase font-sans text-right flex flex-col gap-1">
              <span>Status // Active</span>
              <span className="opacity-50">Experimental</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mt-auto">
            
            <div className="lg:col-span-4 border-l border-black/20 pl-6 pb-2 hidden lg:block">
              <p className="text-sm font-sans tracking-wide leading-relaxed opacity-60">
                A repository of conceptual implementations, cutting-edge APIs, and unoptimized creative coding artifacts. These prototypes push the boundaries of modern browser capabilities.
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
                    Frontend
                  </motion.span>
                  <motion.span 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    className="block overflow-hidden italic text-black/70"
                  >
                    Experiments
                  </motion.span>
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-24 md:py-32">
        <div className="flex flex-col border-t border-black/20 relative z-50">
          {experiments.map((exp, i) => (
            <motion.div 
              key={i}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-black/20 transition-colors duration-500 hover:bg-black/5 cursor-crosshair"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              onMouseEnter={() => setActiveExp(i)}
              onMouseLeave={() => setActiveExp(null)}
            >
              {/* Mobile Image Reveal (Inline) */}
              <div className={`md:hidden w-full overflow-hidden transition-all duration-700 ease-[0.76,0,0.24,1] ${activeExp === i ? 'h-[300px] opacity-100 mb-8' : 'h-0 opacity-0 mb-0'}`}>
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover grayscale" />
              </div>

              <div className="flex items-start md:items-center gap-6 md:gap-12 w-full md:w-auto z-10 pointer-events-none">
                <span className="text-xs font-sans tracking-[0.2em] text-black/40 mt-2 md:mt-0 w-8">{exp.id}</span>
                <div className="flex flex-col">
                  <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase group-hover:italic transition-all duration-500 md:group-hover:translate-x-4">
                    {exp.title}
                  </h2>
                  <div className="flex gap-2 mt-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:group-hover:translate-x-4">
                    {exp.tech.map((t, idx) => (
                      <span key={idx} className="text-[9px] tracking-[0.2em] uppercase border border-black/20 px-2 py-0.5 font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between md:justify-end items-end md:items-center gap-12 w-full md:w-auto mt-6 md:mt-0 z-10 pointer-events-none">
                <div className="flex flex-col text-[10px] md:text-xs font-sans tracking-[0.1em] uppercase text-black/60 group-hover:text-black transition-colors duration-500 max-w-[280px] leading-relaxed">
                  <span className="font-bold border-b border-black/20 pb-1 mb-2 inline-block w-max">{exp.category}</span>
                  <span>{exp.description}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black/60 whitespace-nowrap">{exp.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}