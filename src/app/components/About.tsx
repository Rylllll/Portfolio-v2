import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Code, PaintBucket, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden inline-block">
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </div>
  );
};

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const rotateWheel = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <section
      id="AboutMe"
      ref={containerRef}
      className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#1E1E1E] text-white border-b-[4px] border-black relative overflow-clip"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:100px_100px] z-0" />

      <motion.div
        style={{ y: textY }}
        className="absolute top-10 left-0 w-full overflow-hidden flex justify-center pointer-events-none z-0 opacity-10"
      >
        <h2 className="text-[12vw] font-display font-black leading-[0.8] tracking-tighter text-center whitespace-nowrap uppercase text-white">
          THE ARCHITECT
        </h2>
      </motion.div>
      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Unified Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 w-full">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full border-[2px] border-white font-bold uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] w-max mb-4">
              <span className="w-2 h-2 bg-[#A3F1B6] rounded-full animate-pulse" />
              Behind the Code
            </div>
            <div className="relative uppercase">
              <h2
                className="absolute top-2 left-2 text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-transparent opacity-30"
                style={{ WebkitTextStroke: "2px white" }}
              >
                ABOUT ME
              </h2>
              <h2 className="relative text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-white">
                ABOUT ME
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-display font-black leading-[0.9] tracking-tight uppercase flex flex-col gap-1">
              <AnimatedText text="I Build" />
              <span className="text-[#A3F1B6]">
                <AnimatedText text="Digital" />
              </span>
              <AnimatedText text="Experiences" />
            </h3>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-6 text-sm md:text-base text-gray-400 font-medium max-w-md leading-relaxed border-l-[3px] border-[#A3F1B6] pl-4"
            >
              I'm a frontend developer and UI/UX designer. My approach blends
              hard brutalist aesthetics with buttery smooth animations.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "4px 4px 0px 0px rgba(163,241,182,1)",
                }}
                className="bg-[#2a2a2a] p-5 rounded-[24px] border-[2px] border-white transition-all group"
              >
                <div className="w-10 h-10 bg-[#A3F1B6] rounded-full flex items-center justify-center text-black mb-4">
                  <Code size={20} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-1">
                  Frontend
                </h4>
                <p className="text-gray-400 text-xs font-medium">
                  React, Next.js, logic.
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "4px 4px 0px 0px rgba(211,184,254,1)",
                }}
                className="bg-[#2a2a2a] p-5 rounded-[24px] border-[2px] border-white transition-all group"
              >
                <div className="w-10 h-10 bg-[#D3B8FE] rounded-full flex items-center justify-center text-black mb-4">
                  <PaintBucket size={20} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-1">
                  Design
                </h4>
                <p className="text-gray-400 text-xs font-medium">
                  Figma, wireframes to prod.
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "4px 4px 0px 0px rgba(255,176,116,1)",
                }}
                className="col-span-1 sm:col-span-2 bg-[#2a2a2a] p-5 rounded-[24px] border-[2px] border-white transition-all group flex flex-col sm:flex-row items-center sm:items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#FFB074] rounded-full flex items-center justify-center text-black flex-shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-1">
                    Motion & Interaction
                  </h4>
                  <p className="text-gray-400 text-xs font-medium">
                    GSAP, Framer Motion, and WebGL elements to bring layouts
                    alive.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[45%] relative h-[400px] lg:h-[500px] flex items-center justify-center hidden md:flex">
            <motion.div className="relative w-full max-w-[400px] aspect-[4/5] bg-[#F4EFE6] rounded-[32px] border-[4px] border-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] group">
              <ImageWithFallback
                src="/images/laptop.png"
                alt="Portrait"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <motion.div
                className="absolute top-4 right-4 w-20 h-20"
                style={{ rotate: rotateWheel }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="#FFB074"
                    stroke="black"
                    strokeWidth="4"
                  />
                  <path
                    id="circleTextPath"
                    fill="none"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                  <text className="text-[12px] font-black uppercase tracking-[0.1em] fill-black">
                    <textPath href="#circleTextPath">
                      • CRAFT • CODE • DESIGN{" "}
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowUpRight size={24} className="text-black" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
