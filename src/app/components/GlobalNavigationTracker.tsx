import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function GlobalNavigationTracker() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setIsVisible(pos > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to get initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed bottom-6 md:bottom-12 right-6 md:right-12 z-[90] flex items-center gap-4 mix-blend-difference text-white pointer-events-none"
        >
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="pointer-events-auto ml-2 w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp size={14} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
