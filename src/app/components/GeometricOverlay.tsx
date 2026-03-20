import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function GeometricOverlay({ light = false }: { light?: boolean }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const strokeColor = light ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      <motion.svg
        className="w-full h-[150%] absolute top-[-25%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ y: offset * 0.1 }}
      >
        <circle cx="50" cy="50" r="30" stroke={strokeColor} strokeWidth="0.1" fill="none" />
        <circle cx="50" cy="50" r="45" stroke={strokeColor} strokeWidth="0.1" fill="none" />
        <line x1="0" y1="0" x2="100" y2="100" stroke={strokeColor} strokeWidth="0.1" />
        <line x1="100" y1="0" x2="0" y2="100" stroke={strokeColor} strokeWidth="0.1" />
        <line x1="50" y1="0" x2="50" y2="100" stroke={strokeColor} strokeWidth="0.1" />
      </motion.svg>
    </div>
  );
}
