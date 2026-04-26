import { motion } from "motion/react";
import { useState } from "react";

const AWARDS = [
  { title: "Website of the Day", source: "Awwwards", year: "2019" },
  { title: "Public Awards - UI", source: "Awwwards", year: "2019" },
  { title: "Public Awards - INN", source: "Awwwards", year: "2018" },
  { title: "Site of the Month", source: "Awwwards", year: "2018" },
  { title: "Site of the Day", source: "Awwwards", year: "2017" },
];

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-xs text-gray-400 mb-4 uppercase tracking-widest font-semibold">
          • About
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl mb-8 text-gray-900">
          Designing brands and websites with clarity, creativity, and no-code speed
        </h2>
        
        <div className="text-gray-600 max-w-xl space-y-6 text-lg leading-relaxed">
          <p>
            I combine web design, brand identity, and no-code development to help businesses move faster while staying true to their personality.
          </p>
          <p>
            Every project is approached with both strategy and style - making sure things not just good looking, but also purposeful and effective.
          </p>
        </div>
      </motion.div>

      <div className="mt-24 relative">
        {AWARDS.map((award, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx}
            className="flex items-center justify-between py-6 border-b border-gray-200 group cursor-pointer relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">{award.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{award.source}</p>
            </div>
            <div className="text-gray-400 font-mono">{award.year}</div>

            {/* Hover Image Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredIndex === idx ? 1 : 0,
                scale: hoveredIndex === idx ? 1 : 0.8,
                rotate: hoveredIndex === idx ? (idx % 2 === 0 ? 5 : -5) : 0,
              }}
              className="absolute right-[20%] top-1/2 -translate-y-1/2 pointer-events-none z-10 w-48 h-64 shadow-xl rounded-xl overflow-hidden border-4 border-white bg-orange-400"
            >
              <img
                src="https://images.unsplash.com/photo-1704121112762-86661f0ae5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBhYnN0cmFjdCUyMGdyYXBoaWMlMjBkZXNpZ258ZW58MXx8fHwxNzc3MTc2NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Award Project Preview"
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}