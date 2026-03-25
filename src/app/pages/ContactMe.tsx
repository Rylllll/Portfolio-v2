import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { GeometricOverlay } from "../components/GeometricOverlay";

export function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 selection:bg-white selection:text-black">
      <GeometricOverlay light={true} />
      
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Left Column - Typography & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-8 flex items-center gap-4"
            >
              <span className="w-8 h-[1px] bg-white/50"></span>
              Initiate Contact
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tighter leading-[0.85] mb-8"
            >
              Comm<br/><span className="italic opacity-80">unicate.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xs md:text-sm tracking-[0.2em] uppercase leading-loose text-white/70 max-w-md border-l border-white/20 pl-6 mb-16"
            >
              Open to architectural web projects, systemic engineering roles, and high-performance component development. Enter data below to establish a connection.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.2em] border-t border-white/10 pt-8"
          >
            <div>
              <span className="block text-white/40 mb-2">Location</span>
              <span className="block font-medium">Manila, Philippines, NY</span>
              <span className="block opacity-70">Rizal Antipolo City</span>
            </div>
            <div>
              <span className="block text-white/40 mb-2">Direct Line</span>
              <a href="mailto:reymark.designs@gmail.com" className="block font-medium hover:italic transition-all">reymark.designs@gmail.com</a>
              <span className="block opacity-70">Encrypted</span>
            </div>
            <div className="col-span-2">
              <span className="block text-white/40 mb-2">Social Parameters</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#1DB954] transition-colors border-b border-transparent hover:border-[#1DB954]">Facebook</a>
                <a href="#" className="hover:text-[#1DB954] transition-colors border-b border-transparent hover:border-[#1DB954]">GitHub</a>
                <a href="#" className="hover:text-[#1DB954] transition-colors border-b border-transparent hover:border-[#1DB954]">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - The Form */}
        <div className="lg:col-span-7 relative">
          <div className="absolute inset-0 border border-white/10 pointer-events-none -m-6 md:-m-12 hidden md:block"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-white -mt-[4px] -mr-[4px] hidden md:block z-20"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-white -mb-[4px] -ml-[4px] hidden md:block z-20"></div>
          
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col gap-8 md:p-12 bg-black relative"
          >
            {/* Field 1 */}
            <div className="group relative">
              <label htmlFor="name" className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2 block transition-colors group-focus-within:text-white">01. Identification</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-xl md:text-2xl font-light focus:border-white transition-colors"
                placeholder="YOUR NAME"
              />
            </div>

            {/* Field 2 */}
            <div className="group relative">
              <label htmlFor="email" className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2 block transition-colors group-focus-within:text-white">02. Return Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-xl md:text-2xl font-light focus:border-white transition-colors"
                placeholder="YOUR EMAIL"
              />
            </div>

            {/* Field 3 */}
            <div className="group relative">
              <label htmlFor="subject" className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2 block transition-colors group-focus-within:text-white">03. Parameter</label>
              <select 
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="w-full bg-black border-b border-white/20 py-4 outline-none text-xl md:text-2xl font-light focus:border-white transition-colors appearance-none cursor-pointer rounded-none"
              >
                <option value="" disabled className="text-white/30">SELECT SUBJECT</option>
                <option value="project">Project Inquiry</option>
                <option value="role">Employment Opportunity</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other Protocol</option>
              </select>
              <div className="absolute right-0 bottom-4 pointer-events-none">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Field 4 */}
            <div className="group relative">
              <label htmlFor="message" className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2 block transition-colors group-focus-within:text-white">04. Payload</label>
              <textarea 
                id="message"
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-xl md:text-2xl font-light focus:border-white transition-colors resize-none"
                placeholder="ENTER MESSAGE DATA..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="w-full md:w-auto px-12 py-6 bg-white text-black font-medium text-xs tracking-[0.3em] uppercase hover:bg-black hover:text-white border border-white transition-all duration-300 flex items-center justify-center gap-4 group disabled:opacity-70 disabled:pointer-events-none"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    TRANSMITTING...
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="w-4 h-4" />
                    DATA RECEIVED
                  </>
                ) : (
                  <>
                    TRANSMIT DATA
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </div>
            
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 translate-y-full pt-4 text-[10px] text-[#1DB954] tracking-[0.2em] uppercase font-mono"
              >
                [ SYS_MSG ]: Transmission successful. Awaiting response cycle.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}