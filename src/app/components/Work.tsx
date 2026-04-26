import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const WORKS = [
  {
    image: "https://images.unsplash.com/photo-1770581939371-326fc1537f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xkJTIwdHlwb2dyYXBoeSUyMHBvc3RlcnxlbnwxfHx8fDE3NzcxNzY0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "DRONE",
    tags: ["Typography", "Brand Identity"]
  },
  {
    image: "https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1pbmltYWwlMjBlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGF5b3V0fGVufDF8fHx8MTc3NzE3NjUwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Basic Colours Comeback",
    tags: ["Web Design", "E-commerce"]
  },
  {
    image: "https://images.unsplash.com/photo-1559574145-acf61f1f8c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwZHJvbmUlMjBzaG90fGVufDF8fHx8MTc3NzE3NjUwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Urban Scale",
    tags: ["Architecture", "Photography"]
  }
];

export function Work() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
          • Selected Work
        </div>
        <div className="text-xs text-gray-400 font-mono tracking-widest uppercase flex items-center gap-2">
          Scroll Side <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {WORKS.map((work, idx) => (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            key={idx}
            className="w-[85vw] md:w-[600px] shrink-0 snap-center group cursor-pointer"
          >
            <div className="rounded-2xl overflow-hidden mb-6 h-[400px] md:h-[500px] relative bg-black/5">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <h3 className="text-2xl font-medium text-gray-900 mb-2">{work.title}</h3>
            <div className="flex gap-3">
              {work.tags.map(tag => (
                <span key={tag} className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Hide scrollbar styles for webkit */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}