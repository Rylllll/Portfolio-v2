import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section className="pt-24 border-t border-gray-200">
      <div className="text-xs text-gray-400 mb-12 uppercase tracking-widest font-semibold">
        • Contact
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 text-gray-900 leading-snug max-w-sm">
            If you have a general or project enquiry, please drop me an email or fill the form - available now
          </h2>
          
          <form className="space-y-6 mt-12">
            <div>
              <input 
                type="text" 
                placeholder="Your Name *"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email Address *"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
              />
            </div>
            <div>
              <textarea 
                placeholder="Project Description"
                rows={3}
                className="w-full bg-transparent border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400 resize-none"
              />
            </div>
            
            <button className="border border-gray-300 rounded-full px-8 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2 mt-8">
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-between items-start md:items-end h-full"
        >
          <a href="mailto:hello@reymark.design" className="text-lg md:text-xl font-medium hover:text-blue-600 transition-colors underline underline-offset-4 decoration-gray-300">
            hello@reymark.design
          </a>
          
          <div className="mt-24 md:mt-0 text-right max-w-sm border-l-2 border-gray-200 pl-6 text-gray-500 italic font-serif">
            "Design is not just what it looks like and feels like. Design is how it works."
            <div className="text-xs font-sans not-italic text-gray-400 mt-4 font-semibold uppercase tracking-widest">— Steve Jobs</div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-end justify-center w-full"
        >
          <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-gray-900 leading-none mr-2 relative z-10">
            Reymark
          </h1>
          <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-transparent leading-none" style={{ WebkitTextStroke: "2px #e5e7eb" }}>
            folio
          </h1>
          
          <div className="absolute top-0 right-0 md:right-12 text-gray-400">
            <ArrowUpRight className="w-8 h-8 md:w-16 md:h-16" />
          </div>
        </motion.div>
        
        <div className="mt-12 text-center text-xs text-gray-400 font-mono flex items-center gap-4">
          <span>All rights reserved</span>
          <span>© 2026 Reymark Portfolio</span>
        </div>
      </footer>
    </section>
  );
}