import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Testimonials() {
  return (
    <section>
      <div className="text-xs text-gray-400 mb-8 uppercase tracking-widest font-semibold">
        • Testimonials
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 text-gray-900 leading-tight">
            Here's what people are saying
          </h2>
          
          <div className="flex gap-12 border-t border-gray-200 pt-8">
            <div>
              <p className="text-4xl md:text-5xl font-medium text-gray-900">26+</p>
              <p className="text-sm text-gray-500 mt-2">Finished projects</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-medium text-gray-900">98%</p>
              <p className="text-sm text-gray-500 mt-2">Client satisfaction</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Quote mark */}
          <div className="text-8xl text-gray-100 font-serif absolute top-4 left-8">"</div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
             <div className="w-32 h-40 shrink-0 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1761397681174-bb478fcb3b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbG9yZnVsJTIwcG9ydHJhaXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NzE3NjUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Client Avatar" 
                  className="w-full h-full object-cover grayscale"
                />
             </div>
             <div>
                <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-8 relative z-10">
                  Working with Reymark was seamless. The website came out fast, modern, and easy to update—exactly what our team needed.
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">Daniel Kuò</h4>
                    <p className="text-sm text-gray-500">Head of Product, Tangle App</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <ArrowLeft className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}