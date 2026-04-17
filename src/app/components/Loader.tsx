import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hexagon } from 'lucide-react';

const messages = [
  "Establishing Connection...",
  "Initializing React DOM...",
  "Loading 3D Scenes...",
  "Compiling Styles...",
  "Waking up Animations...",
  "System Ready."
];

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete'>('loading');

  useEffect(() => {
    let currentProgress = 0;
    
    // Simulate an energetic, jagged loading process
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 2; // Jumps between 2% and 14%
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Brief pause at 100% before triggering the explosion effect
        setTimeout(() => setPhase('complete'), 400); 
        
        // Wait for the expansion animation to finish before unmounting
        setTimeout(() => onComplete(), 1400); 
      }
      setProgress(currentProgress);
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentMessageIndex = Math.min(Math.floor(progress / 20), messages.length - 1);

  return (
    <motion.div
      key="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-white dark:bg-zinc-950 flex flex-col items-center justify-center overflow-hidden transition-colors"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] dark:bg-[radial-gradient(#fff_2px,transparent_2px)] bg-[size:24px_24px] z-0" />

      {/* Main Loader Container */}
      <motion.div
        animate={phase === 'complete' ? { scale: 0.8, opacity: 0, y: -50 } : { scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "anticipate" }}
        className="w-[85%] max-w-md flex flex-col gap-4 z-10"
      >
        
        <div className="flex justify-between items-end text-black dark:text-white mb-2">
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              <Hexagon size={32} className="text-[#FFB074] fill-[#FFB074] stroke-black dark:stroke-white stroke-[2px]" />
            </motion.div>
            <span className="font-display font-black text-3xl md:text-4xl tracking-tighter uppercase">SYS_BOOT</span>
          </div>
          <span className="font-black text-2xl md:text-3xl">{progress}%</span>
        </div>

        {/* Brutalist Progress Bar */}
        <div className="w-full h-10 md:h-12 bg-gray-100 dark:bg-zinc-800 border-[3px] md:border-[4px] border-black dark:border-white rounded-full p-1.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="h-full bg-[#A3F1B6] rounded-full border-[2px] md:border-[3px] border-black dark:border-white relative overflow-hidden"
          >
            {/* Diagonal striping inside the progress bar for construction vibe */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)]" />
          </motion.div>
        </div>
        
        {/* Dynamic Text Log */}
        <div className="h-6 relative mt-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentMessageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute left-0 text-xs md:text-sm font-bold uppercase tracking-widest ${
                currentMessageIndex === messages.length - 1 
                  ? 'text-black dark:text-white' 
                  : 'text-black/50 dark:text-white/50'
              }`}
            >
              {messages[currentMessageIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Expanding Screen Effect - Explodes to become the background of the Hero section */}
      <motion.div
        initial={{ scale: 0, opacity: 0, borderRadius: "100%" }}
        animate={phase === 'complete' ? { scale: 50, opacity: 1, borderRadius: "0%" } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#F4EFE6] dark:bg-[#121212] -translate-x-1/2 -translate-y-1/2 z-50 origin-center pointer-events-none"
      />
    </motion.div>
  );
};