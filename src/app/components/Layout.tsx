import { Link, useLocation, useOutlet } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { CustomCursor } from "./CustomCursor";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { GlobalNavigationTracker } from "./GlobalNavigationTracker";

const menuLinks = [
  { name: "Home", path: "/", image: "https://images.unsplash.com/photo-1769283991436-9ce2354aaaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicnV0YWxpc3QlMjBhcmNoaXRlY3R1cmUlMjBjb25jcmV0ZXxlbnwxfHx8fDE3NzM0MTc4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Projects", path: "/projects", image: "https://images.unsplash.com/photo-1743778812446-89def1e784cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlbmVyYXRpdmUlMjBjb2RlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzM0NjMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { name: "Experiments", path: "/experiments", image: "https://images.unsplash.com/photo-1668010988953-1598ecafe716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjB0ZXJtaW5hbCUyMGNvZGUlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc3MzQ2MzEyNHww&ixlib=rb-4.1.0&q=80&w=1080" },

  { name: "About Me", path: "/about", image: "/images/profile.png" },
  { name: "Contact", path: "/contact", image: "https://images.unsplash.com/photo-1693903395525-dcdf17566d0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwbWluaW1hbCUyMGRhcmslMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczNDgwMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const linkVariants = {
  hidden: { y: "120%", rotate: 5, opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.1, duration: 1, ease: [0.76, 0, 0.24, 1] }
  }),
  exit: (i: number) => ({
    y: "-120%",
    rotate: -5,
    opacity: 0,
    transition: { delay: i * 0.05, duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  })
};

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHoveringMenu, setIsHoveringMenu] = useState(false);
  const location = useLocation();
  const outlet = useOutlet();

  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus("loading");
    // Simulate frontend submission
    setTimeout(() => {
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus("idle"), 3000);
    }, 1000);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black font-sans selection:bg-black selection:text-white cursor-none relative">
      <CustomCursor />
      <GlobalNavigationTracker />
      
      {/* Navbar Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 w-full z-50 mix-blend-difference text-white p-6 md:p-12 flex justify-between items-center pointer-events-none"
      >
        <div className="pointer-events-auto text-xs uppercase tracking-[0.3em] font-medium group">
          <Link to="/" className="flex flex-col overflow-hidden h-4">
            <motion.span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">R.D.E.V.</motion.span>
            <motion.span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">R.D.E.V.</motion.span>
          </Link>
        </div>
        
        <div className="pointer-events-auto">
          <button 
            className="flex items-center gap-4 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] overflow-hidden relative h-3 hidden md:block">
              <motion.span 
                className="block transition-transform duration-500 ease-[0.76,0,0.24,1]"
                animate={{ y: isMenuOpen ? "-100%" : "0%" }}
              >
                Menu
              </motion.span>
              <motion.span 
                className="block absolute top-full left-0 transition-transform duration-500 ease-[0.76,0,0.24,1]"
                animate={{ y: isMenuOpen ? "-100%" : "0%" }}
              >
                Close
              </motion.span>
            </span>
            <div className="flex flex-col gap-[6px] w-8 justify-center items-end relative h-4">
              <motion.span 
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0, 
                  y: isMenuOpen ? 6 : 0,
                }}
                className="w-full h-[1px] bg-white transition-all duration-500 ease-[0.76,0,0.24,1] absolute top-0" 
              />
              <motion.span 
                animate={{ 
                  width: isMenuOpen ? "0%" : "75%",
                  opacity: isMenuOpen ? 0 : 1
                }}
                className="w-3/4 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-[0.76,0,0.24,1] absolute top-[6px]" 
              />
              <motion.span 
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0, 
                  y: isMenuOpen ? -6 : 0,
                  width: isMenuOpen ? "100%" : "50%"
                }}
                className="w-1/2 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-[0.76,0,0.24,1] absolute top-[12px]" 
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#0a0a0a] text-white z-[40] flex flex-col justify-center items-center overflow-hidden"
            initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
            animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            exit={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Architectural Background Grid for Menu */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between px-6 md:px-12 z-0">
              <div className="w-[1px] h-full bg-white"></div>
              <div className="w-[1px] h-full bg-white hidden md:block"></div>
              <div className="w-[1px] h-full bg-white hidden md:block"></div>
              <div className="w-[1px] h-full bg-white hidden md:block"></div>
              <div className="w-[1px] h-full bg-white"></div>
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white"></div>
            </div>

            <div className="flex flex-col md:flex-row w-full h-full relative z-10 px-6 md:px-24 pt-32 pb-24 items-center justify-between">
              {/* Left: Navigation Links */}
              <nav className="flex flex-col gap-4 md:gap-8 text-left w-full md:w-1/2 relative z-10">
                {menuLinks.map((link, i) => (
                  <div key={link.path} className="overflow-hidden relative group py-1">
                    <motion.div
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link 
                        to={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        onMouseEnter={() => {
                          setActiveImageIndex(i);
                          setIsHoveringMenu(true);
                        }}
                        onMouseLeave={() => setIsHoveringMenu(false)}
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light uppercase tracking-tighter flex items-center justify-start gap-4 md:gap-6 relative hover:italic transition-all duration-500 origin-left"
                      >
                        <span className="text-xs md:text-sm tracking-[0.2em] font-medium opacity-50 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 font-sans not-italic w-12 hidden md:block">
                          0{i + 1}
                        </span>
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>

              {/* Right: Dynamic Image Gallery */}
              <div className="hidden md:grid absolute right-[-10vw] top-[5vh] w-[65vw] h-[90vh] grid-cols-6 grid-rows-6 gap-2 lg:gap-4 z-0 pointer-events-none transform rotate-[2deg] scale-105 opacity-90">
                {menuLinks.map((link, i) => {
                  const gridClasses = [
                    "col-start-1 col-end-5 row-start-1 row-end-5",
                    "col-start-5 col-end-7 row-start-1 row-end-4",
                    "col-start-5 col-end-7 row-start-4 row-end-7",
                    "col-start-1 col-end-3 row-start-5 row-end-7",
                    "col-start-3 col-end-5 row-start-5 row-end-7",
                  ][i] || "col-start-1 col-end-7 row-start-1 row-end-7";

                  const isActive = isHoveringMenu && activeImageIndex === i;
                  const isDimmed = isHoveringMenu && activeImageIndex !== i;

                  return (
                    <motion.div 
                      key={link.path}
                      className={`relative overflow-hidden bg-white/5 border border-white/10 ${gridClasses}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + (i * 0.1), duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <motion.img 
                        src={link.image}
                        alt={link.name}
                        animate={{ 
                          opacity: isDimmed ? 0.2 : (isActive ? 1 : 0.6),
                          scale: isActive ? 1.1 : 1,
                          filter: isActive ? 'grayscale(0%) brightness(1.2)' : 'grayscale(100%) brightness(0.6)'
                        }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-12 w-full px-6 md:px-24 flex flex-col md:flex-row justify-between items-center md:items-end text-[10px] tracking-[0.3em] text-white/50 uppercase gap-6 md:gap-0 z-20"
            >
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
              </div>
              <div className="text-center md:text-right">
                <p>Status: Available for Work</p>
                <p className="mt-2">Location: Manila, Philippines ™</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} className="w-full h-full">
            {/* Curtain Entrance (Old page exits -> curtain drops/rises) */}
            <motion.div
              className="fixed inset-0 z-[100] bg-black text-white flex items-center justify-center pointer-events-none"
              initial={{ y: "100%" }}
              animate={{ y: "100%", transition: { duration: 0 } }}
              exit={{ y: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            >
              <div className="flex flex-col items-center justify-center text-white w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between px-6 z-0">
                  <div className="w-[1px] h-full bg-white"></div>
                  <div className="w-[1px] h-full bg-white hidden md:block"></div>
                  <div className="w-[1px] h-full bg-white"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <Loader2 className="w-8 h-8 md:w-12 md:h-12 animate-spin mb-6 md:mb-8" />
                  <span className="text-sm md:text-xl tracking-[0.5em] uppercase font-light">Processing</span>
                  <div className="mt-8 flex gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Curtain Exit (New page enters -> curtain rises) */}
            <motion.div
              className="fixed inset-0 z-[100] bg-black text-white flex items-center justify-center pointer-events-none"
              initial={{ y: "0%" }}
              animate={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
              exit={{ y: "-100%", transition: { duration: 0 } }}
            >
              <div className="flex flex-col items-center justify-center text-white w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between px-6 z-0">
                  <div className="w-[1px] h-full bg-white"></div>
                  <div className="w-[1px] h-full bg-white hidden md:block"></div>
                  <div className="w-[1px] h-full bg-white"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <Loader2 className="w-8 h-8 md:w-12 md:h-12 animate-spin mb-6 md:mb-8" />
                  <span className="text-sm md:text-xl tracking-[0.5em] uppercase font-light">Processing</span>
                  <div className="mt-8 flex gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black relative overflow-hidden font-sans flex flex-col min-h-[800px] justify-between z-10 border-t border-black">
        {/* Architectural Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
           {/* Geometric circle arc */}
           <div className="absolute w-[200vw] h-[200vw] md:w-[130vw] md:h-[130vw] rounded-full border border-black/5 left-[-100vw] md:left-[-50vw] top-[-50vh] md:top-[-20vh]"></div>
           
           {/* Vertical Line */}
           <div className="absolute top-0 bottom-0 right-[25%] w-[1px] bg-black/10 hidden md:block"></div>
        </div>

        {/* Top Section */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col md:flex-row justify-between pt-16 md:pt-32 pb-16">
          {/* Left: Open text and Subscribe */}
          <div className="w-full md:w-[45%] flex flex-col justify-between">
            <div className="text-2xl md:text-4xl font-light uppercase tracking-tight leading-[1.1] text-black max-w-lg overflow-hidden flex flex-col gap-2">
              {["Always open to new", "projects and", "collaborations — drop", "a line to connect."].map((line, i) => (
                <div key={i} className="overflow-hidden py-1">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="mt-16 md:mt-0 w-full max-w-[380px]"
            >
              <form onSubmit={handleSubscribe} className="relative w-full group flex flex-col gap-4">
                <div className="relative overflow-hidden flex items-center border-b border-black pb-2 group-focus-within:border-black/50 transition-colors">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL" 
                    className="w-full bg-transparent text-black placeholder:text-black/30 py-2 pr-14 outline-none font-sans text-xs md:text-sm tracking-[0.2em] uppercase"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={subscribeStatus === 'loading'}
                    className="absolute right-0 w-8 h-8 flex items-center justify-center text-black hover:translate-x-1 transition-transform disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    {subscribeStatus === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : subscribeStatus === 'success' ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
                {/* Status Message */}
                <div className="h-4">
                  {subscribeStatus === 'success' && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-black/60 tracking-[0.1em] uppercase font-sans">
                      Subscription confirmed. Thank you.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right: Links */}
          <div className="w-full md:w-auto flex flex-col md:flex-row justify-end gap-16 md:gap-32 text-[10px] md:text-xs uppercase tracking-[0.2em] leading-loose text-left mt-24 md:mt-0 pr-0 md:pr-[5%]">
            <div className="flex flex-col gap-6 md:gap-4">
              <span className="text-black/40 mb-2 border-b border-black/10 pb-2">Navigation</span>
              {[
                { name: 'Home', path: '/' },
                { name: 'Projects', path: '/projects' },
                { name: 'Experiments', path: '/experiments' },
                { name: 'About Me', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link, i) => (
                <Link key={link.name} to={link.path} className="group relative overflow-hidden inline-flex items-center gap-2">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), ease: [0.76, 0, 0.24, 1] }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-[0.76,0,0.24,1] opacity-0 group-hover:opacity-100 block -translate-x-2 group-hover:translate-x-0">
                      ↗
                    </span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.76,0,0.24,1]"></span>
                    </span>
                  </motion.span>
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col gap-6 md:gap-4">
              <span className="text-black/40 mb-2 border-b border-black/10 pb-2">Resources</span>
              {['Style Guide', 'Components', 'Licenses', 'Changelog'].map((name, i) => (
                <Link key={name} to={`/${name.toLowerCase().replace(' ', '-')}`} className="group relative overflow-hidden inline-flex items-center gap-2">
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + (i * 0.1), ease: [0.76, 0, 0.24, 1] }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-[0.76,0,0.24,1] opacity-0 group-hover:opacity-100 block -translate-x-2 group-hover:translate-x-0">
                      ↗
                    </span>
                    <span className="relative">
                      {name}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.76,0,0.24,1]"></span>
                    </span>
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full relative z-10 border-t border-black/10 flex flex-col flex-1 justify-between min-h-[350px]">
          {/* Node and Diagonal Line relative to this border top */}
          <div className="absolute top-0 right-[25%] w-[6px] h-[6px] bg-black transform -translate-x-[3px] -translate-y-[3px] hidden md:block z-20"></div>
          <svg className="absolute top-0 right-0 w-[25%] h-full hidden md:block pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          </svg>

          {/* Middle Info Bar */}
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center text-[8px] md:text-[10px] uppercase tracking-[0.2em] pt-6 md:pt-8 gap-6 md:gap-0 font-medium text-black">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
              FRONT-END DEVELOPER
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 md:pr-[10%]"
            >
              {['Facebook', 'GitHub', 'CodePen', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="relative group overflow-hidden">
                  <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{social}</span>
                  <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{social}</span>
                </a>
              ))}
            </motion.div>
            
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-black/50"
            >
              ©2026 R.D.E.V STUDIO
            </motion.span>
          </div>

          {/* Huge Letters */}
          <div className="container mx-auto px-6 md:px-12 w-full flex justify-between items-end leading-[0.75] tracking-tighter text-black pb-8 md:pb-12 mt-12 md:mt-auto overflow-hidden">
            {['R', 'D', 'E', 'V'].map((letter, i) => (
              <motion.span 
                key={letter}
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: i * 0.1 }}
                className="text-[30vw] md:text-[22vw] font-medium select-none"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
