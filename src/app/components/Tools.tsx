import { motion } from "motion/react";

const TOOLS = [
  { name: "Figma", desc: "Leading design tool", progress: 95, icon: "F" },
  { name: "Framer", desc: "No-code website builder", progress: 85, icon: "Fr" },
  { name: "Adobe Photoshop", desc: "Raster graphics editor", progress: 75, icon: "Ps" }
];

export function Tools() {
  return (
    <section>
      <div className="text-xs text-gray-400 mb-8 uppercase tracking-widest font-semibold">
        • Tools
      </div>
      
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg mb-12 text-gray-900 leading-tight">
        See how my expertise with these tools drives better results
      </h2>

      <div className="space-y-6">
        {TOOLS.map((tool, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            key={idx}
            className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 w-1/3">
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center font-bold text-gray-800 text-sm">
                {tool.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{tool.name}</h4>
                <p className="text-xs text-gray-400">{tool.desc}</p>
              </div>
            </div>

            <div className="flex-1 max-w-md bg-gray-100 rounded-full h-8 flex items-center p-1 relative mx-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${tool.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.2, ease: "easeOut" }}
                className="bg-white border border-gray-200 h-full rounded-full shadow-sm relative flex items-center justify-end px-3"
              >
                <span className="text-[10px] font-bold text-gray-500">{tool.progress}%</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}