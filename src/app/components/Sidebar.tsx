import { motion } from "motion/react";
import { Dribbble, Instagram, Twitter } from "lucide-react";

export function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full bg-[#111] text-white rounded-[2rem] overflow-hidden flex flex-col relative"
    >
      <div className="h-3/5 w-full relative">
        <img
          src="https://images.unsplash.com/photo-1762289350936-783284eb2f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29sJTIwbWFuJTIwcG9ydHJhaXQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzcxNzY0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Reymark Boquiron"
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
        
        {/* Logo */}
        <div className="absolute top-6 left-6 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg">
          R
        </div>

        {/* Social Icons */}
        <div className="absolute top-6 right-6 flex flex-col gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
            <Twitter className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
            <Dribbble className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
            <Instagram className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-medium tracking-tight mb-2">Hey, I'm Reymark</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            I help brands stand out through beautiful, functional, and modern web experiences. Based in the Philippines.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-full">
            Let's talk
          </button>
          <button className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors px-4 py-3 border border-white/10 rounded-full w-full justify-center">
            Download CV
          </button>
        </div>
      </div>
    </motion.div>
  );
}