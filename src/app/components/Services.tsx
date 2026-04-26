import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const SERVICES = [
  {
    title: "Web Design",
    description: "Design custom, responsive websites that balance creativity with usability, making sure your digital presence feels seamless and memorable.",
    tags: ["Visual Design", "Interaction Design", "Responsive Layout"],
    images: [
      "https://images.unsplash.com/photo-1702479744181-2d6b58941583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXJrJTIwd2Vic2l0ZSUyMGludGVyZmFjZSUyMDNkfGVufDF8fHx8MTc3NzE3NjQ5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1pbmltYWwlMjBlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGF5b3V0fGVufDF8fHx8MTc3NzE3NjUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    title: "No-Code Development",
    description: "Build robust and scalable applications visually using Framer and Webflow, bringing ideas to life faster than traditional code.",
    tags: ["Framer", "Webflow", "CMS Integrations"],
    images: []
  },
  {
    title: "Brand Identity",
    description: "Create memorable brand identities that resonate with your audience, including logo design, color palettes, and typography guidelines.",
    tags: ["Logo Design", "Styleguides", "Visual Strategy"],
    images: []
  }
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section>
      <div className="text-xs text-gray-400 mb-8 uppercase tracking-widest font-semibold">
        • Services
      </div>

      <div className="border-t border-gray-200">
        {SERVICES.map((service, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx}
            className="border-b border-gray-200 py-6"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full flex items-center justify-between text-left focus:outline-none group"
            >
              <h3 className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors ${openIndex === idx ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>
                {service.title}
              </h3>
              <div className="text-gray-400">
                {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>

            {openIndex === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-8 pb-4">
                  {/* Images if available */}
                  {service.images.length > 0 && (
                    <div className="flex gap-4 mb-8 overflow-hidden">
                      {service.images.map((img, i) => (
                        <div key={i} className="h-48 md:h-64 rounded-xl overflow-hidden w-1/2 bg-gray-100 relative">
                          <img src={img} alt="Service Preview" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 mb-6">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-full font-medium tracking-wide shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}