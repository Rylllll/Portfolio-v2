import { motion } from "motion/react";
import { GeometricOverlay } from "../components/GeometricOverlay";

export function Hobbies() {
  return (
    <div className="w-full bg-white pt-32 min-h-screen">
      <GeometricOverlay />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h1 
          className="text-4xl md:text-8xl font-light tracking-tighter uppercase mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tech Stack
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-32">
          {[
            { name: 'React & Ecosystem', img: 'https://images.unsplash.com/photo-1591267990439-bc68529677c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHQlMjB3ZWIlMjBjb2RlfGVufDF8fHx8MTc3MzQ2MTM3NHww&ixlib=rb-4.1.0&q=80&w=1080' },
            { name: 'TypeScript', img: 'https://images.unsplash.com/photo-1617609277590-ec2d145ca13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0JTIwY29tcGlsZXIlMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NzM0NjEzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
            { name: 'Motion & WebGL', img: 'https://images.unsplash.com/photo-1687863919809-2aabf0e1eb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjc3MlMjBzdHlsaW5nJTIwZGVzaWduJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MzQ2MTM3OHww&ixlib=rb-4.1.0&q=80&w=1080' }
          ].map((stack, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="aspect-square bg-neutral-100 overflow-hidden group border border-black/10">
                <img 
                  src={stack.img}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                  alt={stack.name}
                />
              </div>
              <h3 className="text-xl uppercase font-light tracking-widest border-t border-black/10 pt-4">{stack.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
