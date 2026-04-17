import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Camera, Headphones, Coffee, PenTool, X, Sparkles, Star, Zap } from 'lucide-react';

const customStyles = `
  @keyframes flash {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  .group:hover .camera-flash {
    animation: flash 0.6s ease-out forwards;
  }
  @keyframes steam-rise {
    0% { transform: translateY(0) scale(1); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
  }
  .steam-1 { animation: steam-rise 2s infinite ease-out; }
  .steam-2 { animation: steam-rise 2.5s infinite ease-out 0.5s; }
  .steam-3 { animation: steam-rise 2.2s infinite ease-out 1s; }
  
  .notebook-paper {
    background-image: repeating-linear-gradient(transparent, transparent 39px, #bae6fd 39px, #bae6fd 40px);
    background-attachment: local;
  }
  .film-holes {
    background-image: repeating-linear-gradient(to right, transparent, transparent 10px, #FFE392 10px, #FFE392 20px);
  }
  .spin-slow {
    animation: spin 8s linear infinite;
  }
`;

const hobbies = [
  { 
    id: "photography",
    title: "Analog Photography", 
    desc: "Capturing light and shadows on 35mm film. The imperfections make it perfect.", 
    icon: <Camera size={40} className="text-black relative z-10" />, 
    color: "bg-[#FFB074]",
    projects: ["Portraits in Tokyo", "Street Shadows", "Film Rolls Archive", "Light Leaks"]
  },
  { 
    id: "writing",
    title: "Creative Writing", 
    desc: "Drafting short stories and late-night thoughts in a physical notebook.", 
    icon: <PenTool size={40} className="text-black relative z-10" />, 
    color: "bg-white",
    projects: ["Sci-Fi Anthology", "Daily Journaling", "Character Sketches", "Poetry Drafts"]
  },
  { 
    id: "music",
    title: "Music Production", 
    desc: "Chopping samples and layering synths. Making beats helps me debug logic.", 
    icon: <Headphones size={40} className="text-black relative z-10" />, 
    color: "bg-[#A3F1B6]",
    projects: ["Lo-Fi Study Beats", "Synthwave EP", "Vocal Chopping Experiments"]
  },
  { 
    id: "coffee",
    title: "Coffee Chemistry", 
    desc: "Obsessively dialing in the perfect espresso shot or morning pour-over.", 
    icon: <Coffee size={40} className="text-black relative z-10" />, 
    color: "bg-[#D3B8FE]",
    projects: ["Latte Art Progression", "Ethiopian Roast Profile", "V60 Recipe"]
  }
];

export const Hobbies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHobby, setActiveHobby] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yGraphics = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const renderCardThemeDecorations = (id: string) => {
    switch (id) {
      case 'photography':
        return (
          <>
            <div className="absolute top-12 right-[-20px] w-40 h-40 border-[8px] border-black rounded-full bg-gray-800 opacity-20 pointer-events-none" />
            <div className="absolute top-20 right-4 w-24 h-24 border-[4px] border-black rounded-full bg-gray-900 opacity-30 pointer-events-none" />
            <motion.div 
              animate={{ y: [-5, 5, -5] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 right-10 w-16 h-16 border-[3px] border-black opacity-20 pointer-events-none flex items-center justify-center"
            >
                <div className="w-2 h-full border-l-[3px] border-black" />
                <div className="w-full h-2 border-t-[3px] border-black absolute" />
            </motion.div>
            <div className="camera-flash absolute inset-0 bg-white opacity-0 z-50 pointer-events-none" />
          </>
        );
      case 'writing':
        return (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-8 border-r-[3px] border-black flex flex-col justify-evenly items-center pointer-events-none bg-gray-100/50">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full border-[3px] border-black bg-white" />
              ))}
            </div>
            <motion.div animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-10 right-10 text-4xl font-serif opacity-10 pointer-events-none">A</motion.div>
            <motion.div animate={{ y: [0, 15, 0], rotate: [0, -20, 10, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute bottom-16 right-20 text-5xl font-serif opacity-10 pointer-events-none">&</motion.div>
          </>
        );
      case 'music':
        return (
          <div className="absolute -bottom-10 -right-10 w-48 h-48 border-[3px] border-black rounded-full opacity-30 pointer-events-none flex items-center justify-center spin-slow bg-black">
            <div className="w-40 h-40 border-[2px] border-gray-600 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 border-[2px] border-gray-600 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-[#A3F1B6] border-[3px] border-black rounded-full flex items-center justify-center">
                   <div className="w-4 h-4 bg-white border-[2px] border-black rounded-full" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'coffee':
        return (
          <>
            <div className="absolute top-1/2 right-4 w-32 h-32 border-[6px] border-[#8B5A2B] rounded-full opacity-20 -translate-y-1/2 pointer-events-none mix-blend-multiply filter blur-[1px]" />
            <div className="absolute top-1/4 right-16 w-12 h-12 pointer-events-none">
              <div className="steam-1 absolute left-0 bottom-0 w-2 h-8 bg-white rounded-full blur-[2px]" />
              <div className="steam-2 absolute left-4 bottom-0 w-2 h-10 bg-white rounded-full blur-[2px]" />
              <div className="steam-3 absolute left-8 bottom-0 w-2 h-6 bg-white rounded-full blur-[2px]" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderExpandedContent = (hobby: any) => {
    switch (hobby.id) {
      case 'photography':
        return (
          <div className="mt-8 pt-6 border-t-[3px] border-black border-dashed flex-1">
            <h4 className="text-lg font-bold uppercase mb-4 tracking-widest text-white px-2 bg-black w-max">Film Roll</h4>
            <div className="bg-black p-4 rounded-xl border-[4px] border-black relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="film-holes h-3 w-full absolute top-2 left-0" />
              <div className="flex gap-4 overflow-x-auto py-6 px-2 snap-x">
                {hobby.projects.map((project: string, i: number) => (
                  <div key={i} className="min-w-[220px] aspect-[3/2] bg-gray-200 border-[2px] border-gray-400 p-2 flex items-end justify-start snap-center relative overflow-hidden group">
                    <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=${project}`} alt="placeholder" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply" />
                    <span className="font-bold text-xs bg-white px-2 py-1 rounded border-2 border-black relative z-10">{project}</span>
                  </div>
                ))}
              </div>
              <div className="film-holes h-3 w-full absolute bottom-2 left-0" />
            </div>
          </div>
        );
      
      case 'writing':
        return (
          <div className="mt-8 flex-1 flex">
            <div className="w-10 border-r-[4px] border-black flex flex-col justify-evenly items-center bg-gray-200 rounded-l-xl z-10 relative">
               {[...Array(8)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-[4px] border-black bg-[#FFE392] -ml-4" />
              ))}
            </div>
            <div className="notebook-paper flex-1 bg-[#fefae0] border-[4px] border-black border-l-0 rounded-r-xl p-8 pt-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-h-[300px]">
              <h4 className="text-2xl font-serif font-bold mb-6 text-red-600 underline decoration-2 underline-offset-4">Table of Contents</h4>
              <ul className="space-y-6">
                {hobby.projects.map((project: string, i: number) => (
                  <li key={i} className="font-serif text-xl flex items-end">
                    <span className="mr-2 font-bold">{i + 1}.</span> 
                    {project} 
                    <span className="flex-1 border-b-2 border-dotted border-black mx-4 mb-2"></span>
                    <span className="text-sm font-bold opacity-50">Pg. {Math.floor(Math.random() * 50) + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'music':
        return (
          <div className="mt-8 pt-8 border-t-[3px] border-black border-dashed flex-1">
            <h4 className="text-lg font-bold uppercase mb-4 bg-black text-[#A3F1B6] px-3 py-1 w-max rounded-md">Beat Pads</h4>
            <div className="bg-gray-800 p-6 rounded-xl border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hobby.projects.map((project: string, i: number) => (
                  <motion.div 
                    key={i} 
                    whileTap={{ scale: 0.95, backgroundColor: "#A3F1B6" }}
                    className="aspect-square bg-gray-700 border-[3px] border-black rounded-xl p-4 flex items-center justify-center text-center cursor-pointer hover:bg-gray-600 transition-colors shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-[6px]"
                  >
                    <span className="font-bold text-sm text-white mix-blend-difference">{project}</span>
                  </motion.div>
                ))}
                {[...Array(8 - hobby.projects.length)].map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square bg-gray-900 border-[3px] border-black rounded-xl p-4 opacity-50 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]" />
                ))}
              </div>
            </div>
          </div>
        );

      case 'coffee':
        return (
          <div className="mt-8 pt-8 border-t-[3px] border-black border-dashed flex-1">
            <h4 className="text-lg font-bold uppercase mb-4">Recipe Cards</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobby.projects.map((project: string, i: number) => (
                <div key={i} className="bg-[#FFF8E7] border-[3px] border-black rounded-lg p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative hover:-translate-y-2 transition-transform cursor-pointer">
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-400 border-2 border-black" />
                  <h5 className="font-bold text-lg border-b-2 border-black pb-2 mb-3">{project}</h5>
                  <ul className="text-sm font-medium space-y-1 opacity-80">
                    <li>• Dose: 18g</li>
                    <li>• Yield: 36g</li>
                    <li>• Time: 28s</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  // Dynamically sort array: If a hobby is active, pull it to the front of the array.
  // This causes Framer Motion's `layout` to physically animate the clicked card to the top position!
  const displayHobbies = activeHobby 
    ? [hobbies.find(h => h.id === activeHobby)!, ...hobbies.filter(h => h.id !== activeHobby)]
    : hobbies;

  return (
    <>
      <style>{customStyles}</style>
      <section id="Hobbies" ref={containerRef} className="w-full min-h-screen px-6 md:px-10 py-24 md:py-32 flex flex-col justify-center bg-[#FFE392] border-b-[4px] border-black relative overflow-clip">
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(#000_3px,transparent_3px)] bg-[size:30px_30px] z-0" />
        
        <motion.div style={{ y: yGraphics }} className="absolute top-20 left-10 text-black opacity-20 hidden md:block">
          <Star size={64} fill="currentColor" />
        </motion.div>
        <motion.div style={{ y: yGraphics }} className="absolute bottom-40 right-10 text-black opacity-20 hidden md:block">
          <Zap size={80} fill="currentColor" />
        </motion.div>
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }} 
          className="absolute top-1/2 left-4 text-black opacity-20"
        >
          <Sparkles size={48} />
        </motion.div>

        <div className="max-w-6xl w-full mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 w-full relative">
            <div className="flex flex-col z-10">
              <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full border-[2px] border-black font-bold uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-max mb-4">
                <span className="w-2 h-2 bg-[#D3B8FE] rounded-full animate-pulse" />
                AFK / Off-Screen
              </div>
              <div className="relative uppercase">
                <h2 className="absolute top-2 left-2 text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-transparent opacity-30" style={{ WebkitTextStroke: '2px black' }}>
                  INTERESTS
                </h2>
                <h2 className="relative text-[60px] md:text-[80px] lg:text-[110px] font-display leading-[0.8] tracking-tight whitespace-nowrap text-black">
                  INTERESTS
                </h2>
              </div>
            </div>
            
            {/* Moved Spinning Text up and added pointer-events-none */}
            <div className="absolute -right-4 -top-16 md:-top-20 lg:-top-24 hidden md:flex items-center justify-center w-32 h-32 z-20 mix-blend-overlay opacity-80 pointer-events-none">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} className="w-full h-full relative">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                  <text className="text-[11px] font-bold uppercase tracking-widest fill-black" style={{ transformOrigin: 'center' }}>
                    <textPath href="#circlePath" startOffset="0%">
                      • KEEP EXPLORING • CREATIVE JUICES
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <Star size={24} className="absolute text-black fill-black" />
            </div>

            <p className="font-bold uppercase tracking-widest text-xs max-w-[250px] text-left md:text-right hidden md:block">
              Things that recharge my creative batteries when I shut my laptop.
            </p>
          </div>

          <motion.div style={{ y: yParallax }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Map over the newly sorted displayHobbies array */}
            {displayHobbies.map((hobby, index) => {
              const isActive = activeHobby === hobby.id;

              return (
                <motion.div 
                  layout
                  key={hobby.id} // Important: Use ID as key so Framer Motion knows which card is which when the array order changes
                  onClick={() => setActiveHobby(isActive ? null : hobby.id)}
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1, delay: index * 0.1 } }
                  }}
                  whileHover={!isActive ? { scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 } : {}}
                  className={`
                    group relative p-8 border-[4px] border-black rounded-[32px] 
                    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer 
                    flex flex-col min-h-[300px] overflow-hidden
                    ${isActive ? 'md:col-span-2 lg:col-span-4 bg-white z-20 cursor-default' : `${hobby.color}`}
                  `}
                  style={{ originX: 0.5, originY: 0.5 }}
                >
                  {!isActive && renderCardThemeDecorations(hobby.id)}

                  {!isActive && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 pointer-events-none backdrop-blur-[2px]">
                      <motion.span 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="bg-white text-black px-6 py-2 rounded-full font-black uppercase tracking-widest border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      >
                        See More
                      </motion.span>
                    </div>
                  )}

                  <motion.div layout className={`flex justify-between items-start mb-6 ${hobby.id === 'writing' && !isActive ? 'ml-6' : ''}`}>
                    <motion.div 
                      layout 
                      className={`w-16 h-16 rounded-2xl border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 transition-transform group-hover:scale-110 group-hover:-rotate-6 ${isActive ? hobby.color : 'bg-white'}`}
                    >
                      {hobby.icon}
                    </motion.div>
                    
                    {isActive && (
                      <motion.button 
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        className="p-2 border-[2px] border-black rounded-full hover:bg-gray-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all z-20 cursor-pointer bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHobby(null);
                        }}
                      >
                        <X size={24} />
                      </motion.button>
                    )}
                  </motion.div>

                  <motion.div layout className={`relative z-10 ${hobby.id === 'writing' && !isActive ? 'ml-6' : ''}`}>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2 bg-white/60 backdrop-blur-md w-max px-2 py-1 rounded-md border-black border-2">{hobby.title}</h3>
                    <p className="text-sm font-bold leading-relaxed opacity-90 max-w-2xl bg-white/80 backdrop-blur-md p-2 rounded-md border-2 border-black">{hobby.desc}</p>
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: 0.1, type: "spring", bounce: 0.3 }}
                        className="flex-1 flex flex-col w-full z-10 origin-top"
                      >
                        {renderExpandedContent(hobby)}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};