import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'crumpling' | 'uncrumpling'>('crumpling');

  useEffect(() => {
    // Phase 1: Crumpled ball shakes for 1.8 seconds
    const t1 = setTimeout(() => setPhase('uncrumpling'), 1800);
    
    // Phase 2: Uncrumples rapidly for 0.8 seconds, then signals App to fade it out
    const t2 = setTimeout(() => onComplete(), 2600);
    
    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
    };
  }, [onComplete]);

  return (
    <motion.div
      key="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth fade out revealing the App
      className="fixed inset-0 z-[999] bg-[#1E1E1E] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial="crumpled"
        animate={phase === 'uncrumpling' ? 'uncrumple' : 'crumpled'}
        variants={{
          crumpled: {
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "60% 40% 30% 70% / 50% 60% 40% 50%",
              "30% 70% 50% 50% / 60% 40% 70% 30%",
              "50% 50% 40% 60% / 30% 70% 50% 60%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
            ],
            rotate: [0, -10, 15, -5, 0],
            scale: [1, 0.9, 1.05, 0.95, 1],
            boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
            borderWidth: "4px",
            transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity }
          },
          uncrumple: {
            borderRadius: "0%",
            rotate: 0,
            scale: 40, // Expands massively to cover the entire screen
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)", // Shadow disappears
            borderWidth: "0px", // Border disappears leaving pure paper background
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Snappy expansion
          }
        }}
        className="w-[150px] h-[150px] bg-[#F4EFE6] border-black flex items-center justify-center origin-center relative overflow-hidden"
      >
        {/* Paper Creases/Folds - Fades out as paper smooths */}
        <motion.div 
            animate={{ opacity: phase === 'uncrumpling' ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 pointer-events-none"
        >
            <div className="absolute top-[30%] left-[-10%] w-[120%] h-[2px] bg-black/10 rotate-12" />
            <div className="absolute top-[60%] left-[-10%] w-[120%] h-[2px] bg-black/10 -rotate-[24deg]" />
            <div className="absolute left-[40%] top-[-10%] w-[2px] h-[120%] bg-black/10 rotate-45" />
        </motion.div>

        {/* Loading Text */}
        <motion.span
          animate={{ opacity: phase === 'uncrumpling' ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="font-black text-xl uppercase tracking-widest text-black z-10"
        >
            <motion.span 
              animate={{ opacity: [1, 0.3, 1] }} 
              transition={{ repeat: Infinity, duration: 1 }}
            >
              Wait
            </motion.span>
        </motion.span>
      </motion.div>
    </motion.div>
  );
};