import { motion } from "motion/react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1702479744181-2d6b58941583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXJrJTIwd2Vic2l0ZSUyMGludGVyZmFjZSUyMDNkfGVufDF8fHx8MTc3NzE3NjQ5OHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1691137493205-111951566e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjAzZCUyMHNoYXBlc3xlbnwxfHx8fDE3NzcxNzY0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1704121112762-86661f0ae5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBhYnN0cmFjdCUyMGdyYXBoaWMlMjBkZXNpZ258ZW58MXx8fHwxNzc3MTc2NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
];

export function Hero() {
  return (
    <section className="relative pt-12 md:pt-24 min-h-[80vh] flex flex-col justify-center">
      <div className="absolute top-4 right-8 text-gray-400 text-sm tracking-widest uppercase">
        Mar. 24/25<br />N°/1
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-gray-900 mb-8 max-w-lg">
            Start building websites & brands people remember
          </h1>
          
          <div className="flex gap-8 mt-12">
            <div>
              <p className="text-4xl font-semibold">10+</p>
              <p className="text-gray-500 text-sm mt-1">Years of experience</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">6x</p>
              <p className="text-gray-500 text-sm mt-1">Awards / Honors</p>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[400px] w-full mt-12 md:mt-0">
          {HERO_IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, rotate: idx * 5 - 10, x: idx * -20 }}
              animate={{ opacity: 1, scale: 1, rotate: idx * 8 - 12, x: idx * 30 + (idx === 1 ? -40 : 0) }}
              whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1, type: "spring" }}
              className="absolute top-0 right-12 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer origin-bottom-right"
              style={{ zIndex: 3 - idx, marginTop: idx * 40 }}
            >
              <img src={src} alt="Hero Work" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-24 md:mt-32 border-t border-gray-200 pt-8"
      >
        <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest font-semibold">For demo 2025-2026</p>
        <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale">
          {/* Faking logos with bold typography */}
          <div className="font-bold text-xl tracking-tight">optimizely</div>
          <div className="font-bold text-xl tracking-tight">zapier</div>
          <div className="font-bold text-xl tracking-tight">framer</div>
          <div className="font-bold text-xl tracking-tight">webflow</div>
        </div>
      </motion.div>
    </section>
  );
}