import { motion } from "motion/react";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { Tools } from "./components/Tools";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fafafa] font-sans text-[#111]">
      <div className="lg:w-[320px] xl:w-[380px] p-4 lg:p-6 lg:fixed lg:h-screen z-50">
        <Sidebar />
      </div>
      <div className="flex-1 lg:ml-[320px] xl:ml-[380px] relative">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-24 space-y-32">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Services />
          <Tools />
          <Testimonials />
          <Contact />
        </div>
        
        {/* Right fixed navigation dots */}
        <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full border border-gray-300 bg-transparent cursor-pointer hover:bg-black transition-colors" />
          ))}
        </div>
      </div>
    </div>
  );
}