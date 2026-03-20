import { motion } from "motion/react";
import { GeometricOverlay } from "../components/GeometricOverlay";

export function Artworks() {
  return (
    <div className="w-full bg-white pt-32 min-h-screen">
      <GeometricOverlay />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h1 
          className="text-4xl md:text-8xl font-light tracking-tighter uppercase mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Experiments
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-32">
          {[
            {
              title: "Canvas Physics",
              desc: "Custom 2D rigid body engine",
              img: "https://images.unsplash.com/photo-1752246070356-117de8e2cfae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwbWF0aCUyMGFsZ29yaXRobXxlbnwxfHx8fDE3NzM0NjEzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              title: "GLSL Shaders",
              desc: "Fragment shader studies",
              img: "https://images.unsplash.com/photo-1771942202908-6ce86ef73701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGUlMjBjb2RpbmclMjBsaW5lc3xlbnwxfHx8fDE3NzM0NjEzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              title: "React Three Fiber",
              desc: "Instanced mesh rendering",
              img: "https://images.unsplash.com/photo-1765445773781-8011c0759704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmluYXJ5JTIwZ2VvbWV0cmljfGVufDF8fHx8MTc3MzQ2MTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              title: "DOM Animation",
              desc: "Framer motion orchestrations",
              img: "https://images.unsplash.com/photo-1663948951500-56b67f9baae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhbWV0cmljJTIwZGVzaWdufGVufDF8fHx8MTc3MzMyMzQ4MHww&ixlib=rb-4.1.0&q=80&w=1080"
            }
          ].map((exp, i) => (
            <motion.div 
              key={i} 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative mb-4">
                <img 
                  src={exp.img}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 mix-blend-multiply"
                  alt={exp.title}
                />
              </div>
              <div className="flex justify-between items-end text-[10px] md:text-xs uppercase tracking-widest border-t border-black/10 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="font-bold">{exp.title}</span>
                  <span className="text-black/50">{exp.desc}</span>
                </div>
                <span className="text-black/40">2025</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
