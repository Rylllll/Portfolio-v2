import React, { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Mail, ArrowUpRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const MagneticLink = ({ children, className, href, ...props }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
};

const FloatingShape = ({ delay = 0, className, children }: any) => (
  <motion.div
    animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    className={`absolute ${className} pointer-events-none`}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });
  const yImage = useTransform(smoothProgress, [0, 1], [0, 40]);

  const words = ["Designer", "Engineer", "Animator", "Creative", "Maverick"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); 
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section
      id="Hero"
      ref={containerRef}
      className="relative w-full min-h-[100dvh] pt-32 pb-20 bg-background border-b-[4px] border-foreground flex flex-col justify-center z-10 overflow-hidden transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 z-20 relative items-center max-w-6xl mx-auto w-full px-6 md:px-10">
        
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center gap-4 relative z-20">
          <motion.div
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
            className="flex flex-col -space-y-2 md:-space-y-3 font-display font-black leading-[0.85] tracking-tight uppercase relative"
          >
            <FloatingShape className="-top-6 -left-2 md:-left-8 z-0 text-[#FFB074]" delay={0}>
              <Star className="w-8 h-8 md:w-12 md:h-12 fill-current stroke-foreground stroke-[2px] md:stroke-[3px] drop-shadow-[3px_3px_0_var(--color-foreground)]" />
            </FloatingShape>

            <div className="relative z-30">
              <motion.h1
                variants={{
                  hidden: { y: -100, opacity: 0, rotateZ: -10, scale: 0.9 },
                  visible: { y: 0, opacity: 1, rotateZ: -2, scale: 1, transition: { type: "spring", bounce: 0.6, duration: 1.4 } },
                }}
                className="text-[42px] sm:text-[55px] md:text-[65px] lg:text-[75px] xl:text-[85px] drop-shadow-[2px_2px_0_var(--color-foreground)] text-background"
                style={{ WebkitTextStroke: "2px var(--color-foreground)" }}
              >
                Digital
              </motion.h1>
            </div>

            <div className="relative z-20 self-start">
              <motion.div
                variants={{
                  hidden: { y: -100, opacity: 0, rotateZ: 15, scale: 0.9 },
                  visible: { y: 0, opacity: 1, rotateZ: 3, scale: 1, transition: { type: "spring", bounce: 0.6, duration: 1.4 } },
                }}
                className="inline-block bg-[#D3B8FE] px-4 py-1 border-[3px] border-foreground rounded-[16px] shadow-[4px_4px_0px_0px_var(--color-foreground)] transform-gpu text-[42px] sm:text-[55px] md:text-[65px] lg:text-[75px] xl:text-[85px] text-black w-full"
              >
                {text}
                <span className="animate-pulse">|</span>
              </motion.div>
            </div>

            <div className="relative z-10">
              <motion.h1
                variants={{
                  hidden: { y: -100, opacity: 0, rotateZ: -8, scale: 0.9 },
                  visible: { y: 0, opacity: 1, rotateZ: -1, scale: 1, transition: { type: "spring", bounce: 0.6, duration: 1.4 } },
                }}
                className="text-[42px] sm:text-[55px] md:text-[65px] lg:text-[75px] xl:text-[85px] drop-shadow-[2px_2px_0_var(--color-background)] text-foreground"
              >
                & Developer
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col gap-4 max-w-sm xl:max-w-md mt-4 lg:mt-2"
          >
            <p className="text-sm md:text-base font-bold border-l-[3px] border-foreground pl-4 leading-snug text-foreground">
              Crafting neo-brutalist digital experiences that don't just exist,
              but demand attention. Bold colors, stark lines, and smooth
              interactions.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <MagneticLink href="#Projects" className="bg-foreground text-background px-5 py-2.5 rounded-[12px] border-[2px] border-foreground flex items-center gap-2 font-bold uppercase text-xs tracking-widest shadow-[3px_3px_0px_0px_var(--color-foreground)] hover:shadow-[5px_5px_0px_0px_var(--color-foreground)] hover:-translate-y-1 transition-all group">
                View Work
                <motion.div className="bg-background/20 p-1 rounded-full text-background" whileHover={{ rotate: 45 }}>
                  <ArrowUpRight className="w-3 h-3" />
                </motion.div>
              </MagneticLink>
              <MagneticLink href="#Contact" className="bg-background text-foreground px-5 py-2.5 rounded-[12px] border-[2px] border-foreground flex items-center gap-2 font-bold uppercase text-xs tracking-widest shadow-[3px_3px_0px_0px_var(--color-foreground)] hover:shadow-[5px_5px_0px_0px_var(--color-foreground)] hover:-translate-y-1 transition-all group">
                Email Me
                <Mail className="w-3 h-3 group-hover:-rotate-12 transition-transform" />
              </MagneticLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
          style={{ y: yImage }}
          className="col-span-1 lg:col-span-5 w-full h-[300px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0 relative z-10 flex items-center"
        >
          <div className="w-full h-full bg-[#FFE392] dark:bg-[#e1cf9b] rounded-[24px] md:rounded-[32px] border-[3px] md:border-[4px] border-foreground shadow-[8px_8px_0px_0px_var(--color-foreground)] overflow-hidden relative group cursor-pointer">
            <ImageWithFallback src="/images/profile.png" alt="Profile avatar" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
            <motion.div whileHover={{ scale: 1.05 }} className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1.5 border-[2px] border-foreground rounded-full shadow-[3px_3px_0px_0px_var(--color-foreground)] font-bold text-[10px] md:text-xs z-10 flex items-center gap-2 text-foreground">
              <span className="w-2 h-2 rounded-full bg-[#A3F1B6] border border-foreground animate-pulse" />
              Available for work
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t-[3px] border-foreground bg-background py-1.5 z-30 flex whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] pointer-events-none text-foreground">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }} className="flex gap-4 md:gap-6 items-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-black uppercase tracking-widest">
              <span>Frontend Developer</span><Star className="w-3 h-3 fill-[#D3B8FE] stroke-foreground stroke-2" />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-foreground)" }}>UI/UX Designer</span><Star className="w-3 h-3 fill-[#FFB074] stroke-foreground stroke-2" />
              <span>Creative Thinker</span><Star className="w-3 h-3 fill-[#A3F1B6] stroke-foreground stroke-2" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};