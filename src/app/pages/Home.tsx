import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef } from "react";
import { GeometricOverlay } from "../components/GeometricOverlay";
import { Model3D } from "../components/Model3D";
import { AnimatedText } from "../components/AnimatedText";
import { Computer, Mail, Linkedin, Instagram } from "lucide-react";

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  const computerSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: computerProgress } = useScroll({
    target: computerSectionRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(computerProgress, [0, 1], ["50%", "-50%"]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Hero Parallax
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // D E V Parallax Letters
  const { scrollYProgress: devProgress } = useScroll({
    target: devRef,
    offset: ["start end", "end start"]
  });
  const dY = useTransform(devProgress, [0, 1], [150, -100]);
  const eY = useTransform(devProgress, [0, 1], [50, -200]);
  const vY = useTransform(devProgress, [0, 1], [250, -50]);

  // Hero text animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  // Horizontal Scroll Section 1 (Leftwards)
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start start", "end end"]
  });
  const horizontalX = useTransform(horizontalProgress, [0, 1], ["0%", "-80%"]);

  // Horizontal Scroll Section 2 (Rightwards / Reverse)
  const reverseScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: reverseProgress } = useScroll({
    target: reverseScrollRef,
    offset: ["start start", "end end"]
  });
  const reverseX = useTransform(reverseProgress, [0, 1], ["-80%", "0%"]);

  // Horizontal Inner Transforms
  const p1ImageX = useTransform(horizontalProgress, [0, 0.2], ["0%", "15%"]);
  const p1TextX = useTransform(horizontalProgress, [0, 0.2], ["0%", "-5%"]);

  const p2Scale = useTransform(horizontalProgress, [0.1, 0.4], [0.8, 1]);
  const p2TextY = useTransform(horizontalProgress, [0.15, 0.35], [100, 0]);
  const p2TextOpacity = useTransform(horizontalProgress, [0.15, 0.35], [0, 1]);

  const p3TextX = useTransform(horizontalProgress, [0.3, 0.6], ["20%", "-20%"]);
  const p3ImageY = useTransform(horizontalProgress, [0.3, 0.6], ["-10%", "10%"]);

  const p4ListY = useTransform(horizontalProgress, [0.55, 0.75], [50, 0]);
  const p4ListOpacity = useTransform(horizontalProgress, [0.55, 0.75], [0, 1]);
  const p4ImageScale = useTransform(horizontalProgress, [0.5, 0.8], [1.2, 1]);

  const p5TextY = useTransform(horizontalProgress, [0.75, 0.95], [50, 0]);
  const p5TextOpacity = useTransform(horizontalProgress, [0.75, 0.95], [0, 1]);

  // Reverse Inner Transforms
  const rp1TextY = useTransform(reverseProgress, [0, 0.2], [0, 50]);
  const rp1Opacity = useTransform(reverseProgress, [0, 0.2], [1, 0]);

  const rp2ImageScale = useTransform(reverseProgress, [0.1, 0.4], [0.8, 1.1]);

  const rp3TextX = useTransform(reverseProgress, [0.3, 0.6], ["-20%", "20%"]);

  const rp4ImageY = useTransform(reverseProgress, [0.5, 0.8], ["10%", "-10%"]);

  const rp5Scale = useTransform(reverseProgress, [0.7, 1], [0.9, 1]);

  return (
    <div className="w-full bg-white relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center p-6 md:p-12">

        <div className="absolute inset-0 xl:z-30 lg:z-30 md:z-30 -z-0 flex items-center justify-center pointer-events-none">
          <img
            src="/images/others/bg_profile.png"
            alt="Developer"
            className="object-cover w-full h-full max-w-[800px] h-full grayscale object-center xl:opacity-100 lg:opacity-90 md:opacity-90"
          />
        </div>
        {/* Background Elements */}
        <GeometricOverlay light={false} />
        <motion.div className="absolute inset-0 w-full h-full z-0 opacity-60 mix-blend-screen" style={{ y: heroBgY }}>
          <Model3D interactive />
        </motion.div>

        {/* Massive Typography with Blend Mode */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center pointer-events-none mix-blend-difference">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col text-white"
          >
            <div className="overflow-hidden">
              <motion.h1 variants={fadeInUp} className="text-[18vw] md:text-[13vw] font-normal tracking-tighter leading-[0.8] uppercase text-center md:text-left">
                Reymark
              </motion.h1>
            </div>

            <div className="md:pl-[20%]">
              <motion.h1 variants={fadeInUp} className="text-[18vw] md:text-[13vw] font-normal tracking-tighter leading-[0.8] uppercase text-center md:text-left">
                Boquiron
              </motion.h1>
            </div>
          </motion.div>
        </div>


        {/* Bottom Right: Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 flex items-center gap-6 text-white/60"
        >
          <a href="https://github.com/Rylllll" target="__blank" className="hover:text-white transition-colors"><Computer size={20} /></a>
          <a href="reymarkdesigns@gmail.com" target="__blank" className="hover:text-white transition-colors"><Mail size={20} /></a>
          <a href="https://www.linkedin.com/in/reymarkboquiron/" target="__blank" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/rynathhh/?hl=en" target="__blank" className="hover:text-white transition-colors"><Instagram size={20} /></a>
        </motion.div>

        {/* Right Side: Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-4 text-white"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase rotate-90 mb-12 origin-center">Scroll</span>
          <div className="w-[2px] h-24 bg-white/20 relative overflow-hidden">
            <motion.div
              className="w-full h-full bg-white origin-top"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>

      </section>

      {/* Infinite Marquee Project Intro Strip */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border-b border-black/10 py-4 md:py-6 bg-white overflow-hidden flex whitespace-nowrap relative items-center"
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 md:gap-32 px-8 text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase font-medium items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-16 md:gap-32 items-center">
              <span>Web Interface 2.0</span>
              <span className="w-2 h-2 rounded-full bg-black/20" />
              <span>Manila, Philippines ™</span>
              <span className="w-2 h-2 rounded-full bg-black/20" />
              <span>Digital Experiences</span>
              <span className="w-2 h-2 rounded-full bg-black/20" />
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Project Description Details */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-white flex flex-col md:flex-row gap-12 md:gap-32 relative">
        <GeometricOverlay />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.2em] uppercase w-full md:w-1/4 pt-2 border-t border-black relative z-10"
        >
          + Core Philosophy
        </motion.div>

        <div className="w-full md:w-1/2 relative z-10">
          <div className="text-sm md:text-lg leading-loose tracking-wide text-justify mb-16 uppercase font-light">
            <AnimatedText text="My approach to front-end development is rooted in structural hierarchy and high-performance component engineering. Taking an uncompromising stance on accessible DOM manipulation, I craft modular web interfaces utilizing React and Framer Motion." />
            <br /><br />
            <AnimatedText text="State management, semantic HTML, and complex CSS architectures are forged into monolithic components. I treat digital rendering with the exact physical rigor of brutalist architecture, bridging the gap between computational logic and fluid user experience." />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-[1fr_2fr] gap-y-6 text-[10px] md:text-xs uppercase tracking-[0.2em] border-t border-black/20 pt-8"
          >
            {[
              { label: "Core Stack", value: "React, TypeScript, Three.js, Next Js, Laravel, Node" },
              { label: "Styling", value: "Tailwind CSS, SCSS, Figma, Adobe XD" },
              { label: "Motion", value: "Framer Motion, GSAP" },
              { label: "Focus", value: "Interactive Web Experiences" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="contents"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
              >
                <span className="text-black/40">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll Interactive 3D Computer Section */}
      <section ref={computerSectionRef} style={{ position: 'relative' }} className="relative h-[250vh] bg-black w-full border-y border-white/10">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <GeometricOverlay light />
          {/* Text scrolling behind the image */}
          <motion.div
            className="absolute inset-0 z-0 flex flex-col items-center justify-center w-full pointer-events-none text-white/15"
            style={{ y: parallaxY }}
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <h1 key={i} className="text-[12vw] font-bold uppercase tracking-tighter leading-[0.85] whitespace-nowrap">
                {i % 2 === 0 ? "ENGINEER" : "DEVELOPER"}
              </h1>
            ))}
          </motion.div>

          {/* Foreground Image of man with feathered edges */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <img
              src="/images/others/pc.png"
              alt="Developer"
              className="object-cover w-full h-full max-w-[800px] max-h-[90vh] grayscale object-center opacity-90"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)'
              }}
            />
          </div>

          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end pointer-events-none mix-blend-difference text-white h-full pb-24 md:pb-32 gap-8 md:gap-0">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0, transition: { staggerChildren: 0.2, duration: 0.8 } }
              }}
              className="w-full md:w-1/3 text-center md:text-left"
            >
              <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-4xl md:text-6xl font-light uppercase tracking-tighter mb-4">Interface</motion.h2>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-xs tracking-[0.2em] uppercase opacity-70">Physical manifestation of digital concepts. The visible layer.</motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                show: { opacity: 1, x: 0, transition: { staggerChildren: 0.2, duration: 0.8 } }
              }}
              className="w-full md:w-1/3 text-center md:text-right"
            >
              <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-4xl md:text-6xl font-light uppercase tracking-tighter mb-4">Systems</motion.h2>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-xs tracking-[0.2em] uppercase opacity-70">Precision engineered for the modern web. The underlying structure.</motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section 1 (Leftwards) */}
      <section ref={horizontalScrollRef} className="relative h-[500vh] bg-[#050505] text-white border-t border-white/10">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <motion.div style={{ x: horizontalX }} className="flex h-full w-[500vw] will-change-transform">

            {/* Panel 1 */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden border-r border-white/10">
              <GeometricOverlay light />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-light text-white/[0.03] z-0 pointer-events-none uppercase tracking-tighter">STATE</div>
              <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center justify-center w-full max-w-[1400px] mx-auto z-10 relative">
                <motion.div style={{ x: p1TextX }} className="w-full md:w-5/12 relative z-20">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-white/40"></span>
                    Phase 01
                  </div>
                  <motion.h3
                    className="text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tighter mb-8 leading-[0.9]"
                  >
                    State<br /><span className="italic opacity-80">Machine.</span>
                  </motion.h3>
                  <motion.p
                    className="text-xs md:text-sm tracking-[0.2em] uppercase leading-loose text-white/60 max-w-md border-l border-white/20 pl-6"
                  >
                    Architecting scalable data flows. Turning complex asynchronous logic into deterministic UI updates that never compromise on performance.
                  </motion.p>
                </motion.div>
                <motion.div style={{ x: p1ImageX }} className="w-full md:w-7/12 aspect-[4/3] md:h-[60vh] overflow-hidden group bg-[#111] relative p-4">
                  <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none z-20 transition-all duration-500 group-hover:m-2" />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwbWF0cml4fGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Code Matrix"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute top-8 right-8 text-[10px] tracking-widest uppercase bg-black text-white px-3 py-1 border border-white/20 z-20">Fig. 1</div>
                </motion.div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="w-screen h-full flex items-center justify-center relative overflow-hidden bg-white text-black border-r border-black/10">
              <GeometricOverlay />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-light text-black/[0.03] z-0 pointer-events-none uppercase tracking-tighter">DOM</div>

              <div className="w-full h-full max-w-[1400px] mx-auto flex items-center justify-start p-6 md:p-12 lg:p-24 relative z-10">
                <motion.div style={{ scale: p2Scale }} className="absolute right-0 top-1/2 -translate-y-1/2 w-3/4 md:w-2/3 h-[80vh] z-0 opacity-20 group pointer-events-none">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=1920"
                    alt="Hardware"
                    className="w-full h-full object-cover grayscale object-right"
                  />
                </motion.div>

                <motion.div
                  style={{ y: p2TextY, opacity: p2TextOpacity }}
                  className="bg-[#050505] text-white p-10 md:p-16 w-full md:w-[600px] shadow-[20px_20px_0px_rgba(0,0,0,0.1)] relative z-20"
                >
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-white border border-black z-30"></div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mb-8 text-white/50 border-b border-white/20 pb-4">Phase 02</div>
                  <h3 className="text-5xl md:text-7xl font-light uppercase tracking-tighter mb-6 leading-[0.9]">DOM<br /><span className="italic opacity-80">Control.</span></h3>
                  <p className="text-xs md:text-sm tracking-[0.2em] uppercase leading-loose text-white/70">
                    Precision control over the Document Object Model. Crafting raw JavaScript and modern hooks to bind state variables directly to physical pixel coordinates.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Panel 3 */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative border-r border-white/10 overflow-hidden bg-[#0a0a0a]">
              <GeometricOverlay light />
              <motion.div style={{ x: p3TextX }} className="absolute whitespace-nowrap z-0 opacity-[0.02]">
                <h2 className="text-[25vw] font-light leading-[0.8] tracking-tighter uppercase">Hierarchy</h2>
              </motion.div>

              <div className="flex flex-col md:flex-row gap-12 items-center w-full max-w-[1400px] mx-auto z-10">
                <div className="w-full md:w-1/2 z-20 flex flex-col items-start md:items-end md:text-right">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6 flex items-center gap-4">
                    Phase 03
                    <span className="w-8 h-[1px] bg-white/40"></span>
                  </div>
                  <motion.h3
                    className="text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tighter mb-8 leading-[0.9]"
                  >
                    Component<br /><span className="italic opacity-80">Structure.</span>
                  </motion.h3>
                  <motion.p
                    className="text-xs md:text-sm tracking-[0.2em] uppercase leading-loose text-white/60 max-w-md border-l md:border-l-0 md:border-r border-white/20 pl-6 md:pl-0 md:pr-6"
                  >
                    Building independent, reusable UI pieces. From foundational atoms to complex structural organisms. The rigid architecture of the web.
                  </motion.p>
                </div>
                <motion.div style={{ y: p3ImageY }} className="w-full md:w-1/2 aspect-square md:h-[70vh] overflow-hidden relative group bg-white p-2">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxab29tZWQlMjBjb2RlfGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Architecture"
                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute bottom-6 left-6 text-[10px] tracking-widest uppercase bg-black text-white px-4 py-2">Blueprint</div>
                </motion.div>
              </div>
            </div>

            {/* Panel 4 */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden bg-white text-black">
              <GeometricOverlay />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] border border-black/5 rounded-full pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] border border-black/10 rounded-full pointer-events-none"></div>

              <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 z-10">
                <motion.div style={{ y: p4ListY, opacity: p4ListOpacity }} className="w-full md:w-1/2">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-6 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-black/40"></span>
                    Phase 04
                  </div>
                  <h3 className="text-5xl md:text-7xl font-light uppercase tracking-tighter mb-12">Performance<br /><span className="italic opacity-80">Ops.</span></h3>

                  <ul className="space-y-6 w-full">
                    {[
                      { num: "001", title: "Bundle Optimization", desc: "Code splitting and dynamic imports." },
                      { num: "002", title: "WebGL Pipelines", desc: "GPU-accelerated rendering layers." },
                      { num: "003", title: "Virtual DOM", desc: "Diffing algorithms & state batching." },
                    ].map((item, idx) => (
                      <li key={idx} className="flex flex-col group border-b border-black/10 pb-4 hover:border-black transition-colors cursor-default">
                        <div className="flex items-baseline justify-between w-full">
                          <div className="flex items-baseline gap-4">
                            <span className="text-[10px] text-black/40 font-mono">{item.num}</span>
                            <span className="text-lg md:text-xl font-medium tracking-tight uppercase">{item.title}</span>
                          </div>
                          <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">→</span>
                        </div>
                        <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                          <p className="pt-2 pl-9 text-[10px] tracking-[0.2em] uppercase text-black/60">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="w-full md:w-5/12 relative h-[50vh] md:h-[70vh]">
                  <motion.div style={{ scale: p4ImageScale }} className="absolute top-0 right-0 w-4/5 h-3/4 overflow-hidden bg-black p-2 z-10 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5fGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=800"
                      className="w-full h-full object-cover grayscale opacity-80"
                      alt="System Reference"
                    />
                  </motion.div>
                  <motion.div style={{ scale: p4ImageScale }} className="absolute bottom-0 left-0 w-3/5 h-2/3 overflow-hidden bg-black p-2 z-20 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBjb2RlfGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=800"
                      className="w-full h-full object-cover grayscale opacity-80"
                      alt="Operations Reference"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Panel 5 */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden bg-[#050505] text-white">
              <GeometricOverlay light />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlfGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=1920')] bg-cover opacity-10 grayscale mix-blend-screen pointer-events-none"></div>
              <div className="flex flex-col items-center justify-center text-center z-10 w-full max-w-[1000px] mx-auto">
                <motion.div style={{ y: p5TextY, opacity: p5TextOpacity }}>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6 flex items-center justify-center gap-4">
                    <span className="w-8 h-[1px] bg-white/40"></span>
                    Phase 05
                    <span className="w-8 h-[1px] bg-white/40"></span>
                  </div>
                  <h3 className="text-5xl md:text-8xl font-light uppercase tracking-tighter mb-8 leading-[0.9]">
                    Physics<br /><span className="italic opacity-80">Engine.</span>
                  </h3>
                  <p className="text-sm md:text-base tracking-[0.2em] uppercase leading-loose text-white/60">
                    Implementing spring dynamics and velocity-based animations. Moving away from rigid easing curves to fluid, continuous interaction models.
                  </p>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Section 2 (Rightwards / Reverse) */}
      <section ref={reverseScrollRef} className="relative h-[500vh] bg-black text-white border-t border-white/20">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
          <motion.div style={{ x: reverseX }} className="flex h-full w-[500vw] flex-row-reverse will-change-transform">

            {/* Reverse Panel 1: Data Architecture */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden bg-white text-black border-l border-black/10">
              <GeometricOverlay />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-light text-black/[0.03] z-0 pointer-events-none uppercase tracking-tighter">DATA</div>
              <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center relative z-10">
                <div className="w-full md:w-1/2">
                  <motion.div style={{ y: rp1TextY, opacity: rp1Opacity }}>
                    <div className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-6 flex items-center gap-4">
                      <span className="w-8 h-[1px] bg-black/40"></span>
                      Phase 06
                    </div>
                    <h3 className="text-5xl md:text-7xl font-light uppercase tracking-tighter mb-6 leading-[0.9]">Data<br /><span className="italic opacity-80">Architecture.</span></h3>
                    <p className="text-xs md:text-sm tracking-[0.2em] uppercase leading-loose text-black/70 max-w-md">
                      Designing normalized state shapes and memoized selectors. Ensuring predictable renders through immutable data structures.
                    </p>
                  </motion.div>
                </div>
                <div className="w-full md:w-1/2 aspect-square md:h-[60vh] overflow-hidden group bg-black p-4 shadow-2xl relative">
                  <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none z-20 transition-all duration-500 group-hover:m-2" />
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VydmVyfGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Server Data" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen" />
                  <div className="absolute top-8 right-8 text-[10px] tracking-widest uppercase bg-white text-black px-3 py-1 border border-black/20 z-20">Fig. 2</div>
                </div>
              </div>
            </div>

            {/* Reverse Panel 2: WebGL Rendering */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden bg-[#050505] text-white border-l border-white/10">
              <GeometricOverlay light />
              <div className="w-full max-w-[1400px] mx-auto z-10 flex flex-col items-center justify-center relative h-full">
                <motion.div style={{ scale: rp2ImageScale }} className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none flex justify-center items-center">
                  <div className="w-[60vh] md:w-[80vh] h-[60vh] md:h-[80vh] rounded-full border border-white/20 animate-[spin_60s_linear_infinite]"></div>
                  <div className="absolute w-[40vh] md:w-[60vh] h-[40vh] md:h-[60vh] rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]"></div>
                </motion.div>
                <div className="text-center z-10 bg-black/50 p-12 backdrop-blur-md border border-white/10">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6 flex items-center justify-center gap-4">
                    Phase 07
                  </div>
                  <h3 className="text-5xl md:text-8xl font-light uppercase tracking-tighter mb-8 leading-[0.9]">
                    WebGL<br /><span className="italic opacity-80">Pipelines.</span>
                  </h3>
                  <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/60 max-w-lg mx-auto leading-loose">
                    Bypassing the DOM to render complex geometric structures directly on the GPU. Fragment shaders and buffer management.
                  </p>
                </div>
              </div>
            </div>

            {/* Reverse Panel 3: Retro Futurism */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden border-l border-white/10 bg-[#111]">
              <GeometricOverlay light />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=1920')] bg-cover bg-center opacity-10 mix-blend-screen grayscale"></div>
              <motion.div style={{ x: rp3TextX }} className="w-full max-w-[1400px] mx-auto z-10 flex flex-col items-center text-center">
                <div className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6">Phase 08</div>
                <h3 className="text-4xl md:text-8xl font-light uppercase tracking-tighter leading-[0.85] mb-8">
                  Retro<br />
                  <span className="italic opacity-80">Futurism.</span>
                </h3>
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 max-w-lg leading-loose border-t border-white/20 pt-8 mt-8">
                  Bridging the gap between nostalgic CRT interfaces and modern WebGL pipelines. Acknowledging the past while building the future.
                </p>
              </motion.div>
            </div>

            {/* Reverse Panel 4: Motion Dynamics */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden bg-white text-black border-l border-black/10">
              <GeometricOverlay />
              <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
                <div className="w-full md:w-1/2">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-black/40 mb-6 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-black/40"></span>
                    Phase 09
                  </div>
                  <h3 className="text-5xl md:text-7xl font-light uppercase tracking-tighter mb-6 leading-none">Motion<br /><span className="italic opacity-80">Dynamics.</span></h3>
                  <div className="w-16 h-[2px] bg-black mb-6"></div>
                  <p className="text-xs md:text-sm tracking-[0.2em] uppercase leading-loose text-black/70">
                    Fluid animation systems that respect physics. Every transition is calculated using spring physics rather than linear timing curves, resulting in natural, tactile interactions.
                  </p>
                </div>
                <div className="w-full md:w-1/2 aspect-square relative group">
                  <motion.div style={{ y: rp4ImageY }} className="absolute inset-0 border border-black/20 translate-x-4 translate-y-4 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></motion.div>
                  <img
                    src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNoYXBlc3xlbnwxfHx8fDE3NzM0NjEzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Abstract Motion"
                    className="w-full h-full object-cover grayscale relative z-10"
                  />
                </div>
              </div>
            </div>

            {/* Reverse Panel 5: Aesthetic Output */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden bg-[#050505] text-white border-l border-white/10">
              <GeometricOverlay light />
              <div className="absolute top-0 right-0 w-full h-full flex items-center justify-end pointer-events-none opacity-5">
                <h2 className="text-[30vw] font-bold tracking-tighter leading-none whitespace-nowrap">AESTHETIC</h2>
              </div>
              <div className="w-full max-w-[1400px] mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div style={{ scale: rp5Scale }} className="aspect-[3/4] overflow-hidden group border border-white/10 p-2 bg-[#111]">
                  <img
                    src="https://images.unsplash.com/photo-1698429894841-64b7d0396aa7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Aesthetic Dark"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                  />
                </motion.div>
                <div className="flex flex-col justify-center pb-12">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6 flex items-center gap-4">
                    <span className="w-2 h-2 bg-white"></span>
                    Phase 10
                  </div>
                  <h3 className="text-4xl md:text-6xl lg:text-8xl font-light uppercase tracking-tighter mb-8">
                    Monochrome<br />
                    <span className="italic opacity-80">Brutalism.</span>
                  </h3>
                  <p className="text-xs tracking-[0.2em] uppercase leading-loose text-white/60 pl-6 border-l border-white/20">
                    A rejection of superficial design trends in favor of raw, unpolished utility. The interface is not just a container for content; it is the content itself.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Large Grid Section (D E V) Parallax Letters */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden border-t border-black/10" ref={devRef} style={{ position: 'relative' }}>
        <GeometricOverlay />
        <div className="max-w-[1400px] mx-auto flex justify-center md:justify-between items-end mb-12 relative z-20 mix-blend-difference text-white pointer-events-none">
          <motion.span style={{ y: eY }} className="text-[12rem] md:text-[20rem] leading-none font-light tracking-tighter">R</motion.span>
          <motion.span style={{ y: dY }} className="text-[12rem] md:text-[20rem] leading-none font-light tracking-tighter">D</motion.span>
          <motion.span style={{ y: eY }} className="text-[12rem] md:text-[20rem] leading-none font-light tracking-tighter">E</motion.span>
          <motion.span style={{ y: vY }} className="text-[12rem] md:text-[20rem] leading-none font-light tracking-tighter">V</motion.span>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10 -mt-32 md:-mt-64">
          <div className="md:col-span-8 aspect-[4/5] md:aspect-auto md:h-[900px] relative overflow-hidden group border border-black/10 shadow-2xl bg-black">
            <GeometricOverlay light />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5fGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Interface"
              className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen group-hover:opacity-100 transition-opacity duration-1000"
            />
            <div className="absolute top-8 left-8 text-white z-20">
              <div className="text-[10px] tracking-widest uppercase mb-2">System Architecture</div>
              <div className="w-12 h-[1px] bg-white/50"></div>
            </div>
            <div className="absolute bottom-8 right-8 text-white/50 text-[10px] tracking-[0.3em] uppercase z-20 text-right">
              Scale: 1:1<br />
              Render Mode: Active
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-4 aspect-square md:aspect-auto md:h-[900px] border border-black/10 p-8 md:p-12 flex flex-col justify-between items-center relative bg-white hover:bg-black hover:text-white transition-colors duration-700 group"
          >
            <div className="w-full flex justify-between items-start">
              <motion.span
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
                className="text-[10px] tracking-[0.2em] uppercase"
              >
                Component
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
                className="text-[10px] tracking-[0.2em] uppercase opacity-50"
              >
                V.2.0
              </motion.span>
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center relative py-12">
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNoYXBlc3xlbnwxfHx8fDE3NzM0NjEzNzR8MA&ixlib=rb-4.1.0&q=80&w=800"
                alt="Cyber Network"
                className="w-full max-w-[250px] object-contain grayscale mix-blend-multiply group-hover:mix-blend-screen group-hover:invert transition-all duration-700 opacity-80"
              />
              <div className="absolute inset-0 border border-black/5 group-hover:border-white/10 rounded-full scale-75 pointer-events-none transition-colors duration-700" />
              <div className="absolute inset-0 border border-black/10 group-hover:border-white/20 rounded-full scale-90 pointer-events-none transition-colors duration-700" />
            </div>

            <div className="w-full flex justify-between items-end">
              <motion.span
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
                className="text-[10px] tracking-[0.2em] uppercase"
              >
                Runtime Environment
              </motion.span>
              <span className="w-4 h-4 border border-black group-hover:border-white rounded-full flex items-center justify-center transition-colors duration-700">
                <span className="w-1 h-1 bg-black group-hover:bg-white rounded-full transition-colors duration-700" />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typography Pull Quote with Scroll Reveal */}
      <section className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto bg-white flex flex-col items-center overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight max-w-5xl uppercase text-center md:text-left"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block h-[1px] bg-black align-middle mr-4 md:mr-8 md:w-24"
          />
          <span className="text-black/40 hover:text-black transition-colors duration-500 cursor-default">STATE, PROPS, AND EFFECTS</span><br />
          DEFINE THE ARCHITECTURAL<br />
          STRUCTURE, WHILE COMPONENT<br />
          STATE MANAGEMENT
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="inline-block h-[1px] bg-black align-middle mx-4 md:mx-8 md:w-24"
          />
          ESTABLISHES A<br />
          <span className="italic">MEASURED</span>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="inline-block h-[1px] bg-black align-middle mx-4 md:mx-8 md:w-24"
          />
          INTERACTIVE RHYTHM<br />
          THROUGHOUT THE INTERFACE.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-5xl flex justify-end mt-16 md:mt-24 relative"
        >
          <div className="absolute right-32 top-[-20px] text-[10px] tracking-widest uppercase rotate-90 origin-right text-black/40">Figure 01</div>
          <img
            src="https://images.unsplash.com/photo-1591267990439-bc68529677c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHQlMjB3ZWIlMjBjb2RlfGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=300"
            className="w-48 h-32 md:w-64 md:h-48 object-cover grayscale"
            alt="React Code"
          />
        </motion.div>
      </section>

      {/* Secondary Project Section with List Stagger */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-white flex flex-col md:flex-row gap-16 md:gap-32 border-t border-black/10 relative">
        <GeometricOverlay />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full md:w-2/5 relative z-10"
        >
          <div className="overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1773349807434-374473797148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBtb25pdG9yJTIwZGFyayUyMHdlYnxlbnwxfHx8fDE3NzM0NjE0MjB8MA&ixlib=rb-4.1.0&q=80&w=800"
              className="w-full aspect-[3/4] object-cover grayscale"
              alt="Code Editor"
            />
          </div>
          <div className="flex justify-between mt-4 text-[10px] tracking-[0.2em] uppercase text-black/50 border-t border-black/10 pt-4">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>Source View</motion.span>
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>Est. 2025</motion.span>
          </div>
        </motion.div>

        <div className="w-full md:w-3/5 flex flex-col justify-center relative z-10">
          <div className="text-base md:text-xl leading-loose tracking-wide uppercase max-w-2xl mb-24 font-light text-black/80">
            <AnimatedText text="I deliver high-performance web applications across modern stacks." />
          </div>

          <div className="w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.3em] uppercase mb-8 flex items-center"
            >
              <span className="w-1.5 h-1.5 bg-black mr-4" />
              CORE STACK CAPABILITIES
            </motion.div>

            <div className="grid grid-cols-[1fr_2fr] gap-y-8 text-[10px] md:text-xs uppercase tracking-[0.2em] border-t border-black/20 pt-8">
              {[
                { cat: "FRONTEND", tech: "REACT, NEXT.JS, VUE," },
                { cat: "DESIGN", tech: "FIGMA, SPLINE 3D, WEBGL, THREE.JS, Adobe XD" },
                { cat: "STATE", tech: "REDUX, REACT QUERY" },
                { cat: "STYLING", tech: "TAILWIND CSS, SCSS, CSS MODULES, FRAMER MOTION" }
              ].map((stack, idx) => (
                <motion.div
                  key={idx}
                  className="contents"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                >
                  <span className="text-black/40 py-2">{stack.cat}</span>
                  <span className="border-b border-black/5 pb-2">{stack.tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Full Width Image with Parallax & Color Reveal */}
      <section className="w-full h-[60vh] md:h-[90vh] bg-neutral-900 relative overflow-hidden group">
        <GeometricOverlay light={true} />
        <motion.img
          src="/images/photography/house.jpg"
          className="w-full h-full object-cover object-center grayscale opacity-70 mix-blend-screen group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms] ease-out"
          alt="Landscape Structure"
          initial={{ scale: 1.1, y: "-10%" }}
          whileInView={{ scale: 1, y: "0%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/10 mix-blend-difference"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-white text-xs uppercase tracking-[0.4em] text-center leading-loose"
            >
              The<br />End
            </motion.span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
