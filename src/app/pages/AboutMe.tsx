import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { PlayCircle, FastForward, Rewind, Pause, Volume2, ExternalLink, Download, Maximize, X, FileText } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import myPhoto from "/images/profile.png";


const SPOTIFY_API_MOCK_DATA = [
  { id: "1", title: "Concrete Mathematics", artist: "The Grid", duration: "04:12", cover: "https://images.unsplash.com/photo-1667071271364-12e6415a2255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRleHR1cmUlMjBkYXJrJTIwdmlueWx8ZW58MXx8fHwxNzczNDcyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: "2", title: "Monochrome Echoes", artist: "Void Structure", duration: "03:45", cover: "https://images.unsplash.com/photo-1758981187327-ff3429577b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBkYXJrfGVufDF8fHx8MTc3MzQ3MjU4M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: "3", title: "Structural Integrity", artist: "Frame.work", duration: "05:22", cover: "https://images.unsplash.com/photo-1663343010965-f494f04239df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzczNDcyNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: "4", title: "Synthetic Shadows", artist: "Dark Room", duration: "02:58", cover: "https://images.unsplash.com/photo-1735948055457-8d816fb80a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMHdvcmtzcGFjZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzczNDcyNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { id: "5", title: "Absolute Zero", artist: "Kelvin", duration: "06:10", cover: "https://images.unsplash.com/photo-1767714874597-171a438ad0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjBtb2Rlcm4lMjBtYW4lMjBtaW5pbWFsfGVufDF8fHx8MTc3MzQ3MjU4M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
];

export function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for hero
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yHeroText = useTransform(heroProgress, [0, 1], ["0%", "40%"]);
  const yHeroImg = useTransform(heroProgress, [0, 1], ["0%", "25%"]);
  const opacityHero = useTransform(heroProgress, [0, 0.6], [1, 0]);

  // Horizontal scroll section
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  const smoothHorizontalProgress = useSpring(horizontalProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const xTransform = useTransform(smoothHorizontalProgress, [0, 1], ["0%", "-75%"]);

  // Sports & Games Horizontal Scroll
  const sportsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sportsProgress } = useScroll({
    target: sportsRef,
    offset: ["start start", "end end"],
  });
  const sportsXTransform = useTransform(sportsProgress, [0, 1], ["0%", "-66.666%"]);
  const sportsOpacity = useTransform(sportsProgress, [0, 0.1], [0, 1]);

  // Hobbies Hover State
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  // Fullscreen Image State
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleImageDownload = async (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `download-${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed", err);
      // Fallback open in new tab
      window.open(url, '_blank');
    }
  };

  const hobbies = [
    { name: "Photography", img: "https://images.unsplash.com/photo-1769287429003-2a7e8ebee0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBsZW5zJTIwbW9ub2Nocm9tZSUyMGRhcmt8ZW58MXx8fHwxNzczNDcyNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Capturing light, shadow, and geometry." },
    { name: "Espresso", img: "https://images.unsplash.com/photo-1615464637805-16154b4d5ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHBvdXIlMjBkYXJrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzM0NzI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Dialing in the perfect extraction." },
    { name: "Literature", img: "https://images.unsplash.com/photo-1557752370-a545ea73b64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGFic3RyYWN0JTIwbWluaW1hbCUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzczNDcyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Sci-fi, architecture, and design theory." },
  ];


  // Spotify Player State
  const [tracks, setTracks] = useState(SPOTIFY_API_MOCK_DATA); // Keep mock as initial loading state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = tracks[currentTrackIndex];

  // Fetch real Spotify Data on component mount
  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // 1. Authenticate with Spotify (WARNING: INSECURE TO DO THIS ON FRONTEND)
        const clientId = '94c4d0afbcf045c7a6a6fafad5b89f50';
        const clientSecret = '584b24da085a4420bd48ae63ea7dc2fc';

        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
        });

        const tokenData = await tokenResponse.json();
        const token = tokenData.access_token;


        const playlistId = '54qSVmeuJrYe9bvz3BVUyV'; // Example: Today's Top Hits
        const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=5`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        const playlistData = await playlistResponse.json();

        // 3. Transform the Spotify data into your brutalist UI format
        const liveTracks = playlistData.items.map((item: any, index: number) => {
          const track = item.track;

          // Calculate minutes and seconds for duration
          const minutes = Math.floor(track.duration_ms / 60000);
          const seconds = ((track.duration_ms % 60000) / 1000).toFixed(0);

          return {
            id: track.id || String(index),
            title: track.name,
            artist: track.artists.map((a: any) => a.name).join(', '),
            duration: `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`,
            cover: track.album.images[0]?.url || SPOTIFY_API_MOCK_DATA[0].cover
          };
        });

        if (liveTracks.length > 0) {
          setTracks(liveTracks);
        }
      } catch (error) {
        console.error("System // API Fetch Failed. Defaulting to mock data.", error);
      }
    };

    fetchSpotifyData();
  }, []);

  // Auto-play progress bar mock
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setProgress(0);
  };

  return (
    <div className="bg-[#f5f5f5] text-black w-full min-h-screen relative selection:bg-black selection:text-white" ref={containerRef}>

      {/* Fullscreen Image Lightbox */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out backdrop-blur-md"
            onClick={() => setFullscreenImage(null)}
          >
            <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
              <button
                onClick={(e) => handleImageDownload(e, fullscreenImage)}
                className="text-white hover:text-[#1DB954] transition-colors p-3 bg-black/50 border border-white/20 flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans cursor-pointer group"
              >
                <Download size={18} />
                <span className="hidden md:block group-hover:underline">Download</span>
              </button>
              <button
                onClick={() => setFullscreenImage(null)}
                className="text-white hover:text-red-500 transition-colors p-3 bg-black/50 border border-white/20 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative w-full h-full flex items-center justify-center max-w-7xl mx-auto">
              <motion.img
                initial={{ scale: 0.95, filter: "blur(5px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                exit={{ scale: 0.95, filter: "blur(5px)" }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                src={fullscreenImage}
                alt="Fullscreen Preview"
                className="max-w-full max-h-full object-contain shadow-2xl border border-white/10 cursor-default"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Technical overlays in lightbox */}
              <div className="absolute bottom-6 left-6 text-white/50 text-[10px] tracking-[0.3em] uppercase font-sans mix-blend-difference pointer-events-none">
                [ SYS_VIEWER_ACTIVE ] // HR: {Math.floor(Math.random() * 50 + 60)}BPM
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Architectural Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 mix-blend-difference opacity-[0.07] flex justify-between px-6 md:px-12">
        <div className="w-[1px] h-full bg-black"></div>
        <div className="w-[1px] h-full bg-black hidden md:block"></div>
        <div className="w-[1px] h-full bg-black hidden lg:block"></div>
        <div className="w-[1px] h-full bg-black"></div>
      </div>

      {/* --- HERO SECTION (EDITORIAL GRID LAYOUT) --- */}
      <section className="relative min-h-[100vh] w-full flex flex-col justify-end pt-32 pb-12 md:pb-24 z-10 border-b border-black/20">
        <div className="container mx-auto px-6 md:px-12 relative h-full flex flex-col justify-between flex-grow">

          {/* Top Meta Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-between items-start border-b border-black/20 pb-6 mb-12 md:mb-0"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase font-sans flex flex-col gap-1">
              <span>System // Online</span>
              <span className="opacity-50">v2.0.4 - Programmer</span>
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase font-sans text-right flex flex-col gap-1">
              <span>Location // Manila, Philippines</span>
              <span className="opacity-50">Coordinates Masked</span>
            </div>
          </motion.div>

          {/* Main Grid Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mt-auto">

            {/* Left Image Column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1 h-[50vh] lg:h-[70vh] w-full">
              <motion.div
                style={{ y: yHeroImg }}
                className="w-full h-full relative group"
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <img
                  src={myPhoto}
                  alt="Portrait"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Framing brackets / Technical UI Overlays */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-white mix-blend-difference"></div>
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-white mix-blend-difference"></div>
                <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-white mix-blend-difference"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-white mix-blend-difference"></div>

                <div className="absolute bottom-4 left-4 text-[10px] text-white mix-blend-difference tracking-widest uppercase">
                  [ FIG. 01 — THE ARCHITECT ]
                </div>
              </motion.div>
            </div>

            {/* Right Typography Column */}
            <div className="lg:col-span-7 flex flex-col justify-end order-1 lg:order-2 z-20 pb-8 lg:pb-0 relative">
              <motion.div
                style={{ y: yHeroText, opacity: opacityHero }}
                className="text-left lg:text-right"
              >
                <h1 className="text-[16vw] lg:text-[8vw] leading-[0.85] tracking-tighter uppercase font-light">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                    className="block overflow-hidden"
                  >
                    Not Just
                  </motion.span>
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                    className="block italic text-black/40 overflow-hidden"
                  >
                    A Coder
                  </motion.span>
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                    className="block overflow-hidden"
                  >
                    A Creator.
                  </motion.span>
                </h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="mt-8 flex flex-col lg:items-end gap-4"
                >
                  <div className="w-16 h-[1px] bg-black/20"></div>
                  <p className="font-sans text-sm md:text-base tracking-wide max-w-sm opacity-70">
                    Architecting digital spaces through pure logic, fluid motion, and raw aesthetic honesty.
                  </p>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MANIFESTO / EXTENDED BIO SECTION --- */}
      <section className="py-24 md:py-48 container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sticky top-32"
            >
              <h2 className="text-sm tracking-[0.3em] uppercase opacity-50 mb-4 border-l border-black pl-4">The Manifesto</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tighter leading-[0.9]">
                Design is <br /><span className="italic">Deliberate.</span>
              </h3>
            </motion.div>
          </div>

          <div className="lg:col-span-8 lg:col-start-6 flex flex-col gap-8 md:gap-12 text-lg md:text-2xl font-sans font-light leading-relaxed tracking-wide">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              I am a front-end developer and digital architect obsessed with the intersection of engineering and emotion. My journey didn't start with writing code; it started with a profound fascination for structure, form, and breaking things apart just to understand how they were built.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              Today, I build premium web experiences that treat the browser not merely as a document viewer, but as an expansive canvas for high-performance art. I believe in brutalism—not in the sense of being unrefined, but in being absolutely honest about the materials we use. Raw HTML, naked logic, and unapologetic performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
            >
             For three years, I served as the Lead Front-End Developer at Yamaha Philippines, where I spearheaded the development of the company’s main website. Beyond maintaining a flagship digital platform, I led the creation of multiple high-impact web projects—each engineered with precision, scalability, and a deep respect for both brand identity and user experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
            >
              Every pixel is mapped. Every animation is tuned to the exact millisecond. The websites I engineer are designed to be felt as much as they are seen, utilizing fluid motion and immersive interactions to bridge the gap between static interfaces and living, breathing digital environments.
            </motion.p>
          </div>

        </div>
      </section>

      {/* --- HORIZONTAL TIMELINE SCROLL --- */}
      <section ref={horizontalRef} className="h-[400vh] relative z-10 bg-black text-white">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center border-t border-b border-white/20">

          {/* Background Grid for Dark Section */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex justify-between px-6 md:px-12 z-0">
            <div className="w-[1px] h-full bg-white"></div>
            <div className="w-[1px] h-full bg-white hidden md:block"></div>
            <div className="w-[1px] h-full bg-white hidden lg:block"></div>
            <div className="w-[1px] h-full bg-white"></div>
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white"></div>
          </div>

          <motion.div style={{ x: xTransform }} className="flex h-full items-center px-[10vw] gap-[20vw] relative z-10 will-change-transform">

            {/* Panel 1: Origins */}
            <div className="w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col gap-8">
              <span className="text-xs tracking-[0.3em] opacity-50 text-white/50">01. ORIGINS</span>
              <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-[0.9]">
                Tearing apart <br /><span className="italic">computers.</span>
              </h2>
              <p className="text-sm md:text-lg font-sans tracking-wide leading-relaxed opacity-70 border-l border-white/30 pl-6">
                It started with a curiosity for how things work under the hood. Breaking hardware systems and software architectures just to learn how to put them back together. In the chaos, code became my foundation.
              </p>
            </div>

            {/* Panel 2 (Image) */}
            <div className="w-[80vw] md:w-[50vw] h-[60vh] flex-shrink-0 relative group overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                src="https://images.unsplash.com/photo-1735948055457-8d816fb80a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMHdvcmtzcGFjZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzczNDcyNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Origins Workspace"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute top-4 left-4 text-[10px] tracking-[0.2em] mix-blend-difference uppercase text-white">The Lab // 2018</div>
            </div>

            {/* Panel 3: Evolution */}
            <div className="w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col gap-8">
              <span className="text-xs tracking-[0.3em] opacity-50 text-white/50">02. EVOLUTION</span>
              <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-[0.9]">
                Structure meets <br /><span className="italic">chaos.</span>
              </h2>
              <p className="text-sm md:text-lg font-sans tracking-wide leading-relaxed opacity-70 border-l border-white/30 pl-6">
                Writing code transformed from pure logic into environmental design. I began utilizing modern frameworks not just as tools, but as concrete pillars to hold up entirely new digital experiences.
              </p>
            </div>

            {/* Panel 4 (Image) */}
            <div className="w-[80vw] md:w-[40vw] h-[70vh] flex-shrink-0 relative group overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                src="https://images.unsplash.com/photo-1663343010965-f494f04239df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MXx8fHwxNzczNDcyNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Architecture"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute -bottom-8 right-0 text-6xl md:text-[10rem] font-light opacity-10 italic leading-none pointer-events-none">FORM.</div>
            </div>

            {/* Panel 5: Today */}
            <div className="w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col gap-8 pr-[10vw]">
              <span className="text-xs tracking-[0.3em] opacity-50 text-white/50">03. TODAY</span>
              <h2 className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-[0.9]">
                Building the <br /><span className="italic">Future.</span>
              </h2>
              <p className="text-sm md:text-lg font-sans tracking-wide leading-relaxed opacity-70 border-l border-white/30 pl-6">
                Focusing on high-performance web applications, fluid motion, and immersive 3D experiences. Brutalism doesn't mean ugly; it means honest.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- SPOTIFY / CURRENT ROTATION (INTERACTIVE) --- */}
      <section className="py-24 md:py-40 bg-[#050505] text-white relative z-10 border-t border-white/10 overflow-hidden">

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex justify-between px-6 md:px-12 z-0">
          <div className="w-[1px] h-full bg-white"></div>
          <div className="w-[1px] h-full bg-white hidden md:block"></div>
          <div className="w-[1px] h-full bg-white hidden lg:block"></div>
          <div className="w-[1px] h-full bg-white"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">

          <div className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/20 pb-8">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4 flex items-center gap-4">
                [ 03. SOUNDTRACK TO THE CHAOS ]
                <div className="flex items-end gap-[2px] h-3">
                  <motion.div animate={{ height: isPlaying ? ["3px", "12px", "6px", "10px", "3px"] : "3px" }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-[#1DB954]" />
                  <motion.div animate={{ height: isPlaying ? ["8px", "4px", "12px", "5px", "8px"] : "3px" }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-[#1DB954]" />
                  <motion.div animate={{ height: isPlaying ? ["4px", "10px", "3px", "8px", "4px"] : "3px" }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 bg-[#1DB954]" />
                </div>
              </span>
              <h3 className="text-4xl md:text-6xl lg:text-7xl uppercase font-light tracking-tighter leading-[0.9]">
                Sonic <br /><span className="italic">Architecture</span>
              </h3>
            </div>
            <p className="font-sans text-sm opacity-60 max-w-sm tracking-wide leading-relaxed lg:text-right">
              Powered by Spotify Web API. The raw frequencies that drive my late-night coding sessions. Select a track to preview the rotation.
            </p>
          </div>

          {/* Bento Box Player Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 relative">

            {/* Main Player Module (spans 8 columns) */}
            <div className="lg:col-span-8 flex flex-col md:flex-row bg-[#0a0a0a] border border-white/20 shadow-[12px_12px_0px_rgba(0,0,0,1)] relative overflow-hidden group min-h-[380px]">

              {/* Left: Vinyl & Cover Art (1:1 ratio area) */}
              <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-white/20 relative flex items-center justify-center bg-black/50">
                <div className="relative w-full max-w-[280px] aspect-square">
                  {/* Spinning Vinyl Behind */}
                  <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="absolute top-0 right-[-20%] w-full h-full rounded-full border border-white/10 bg-[#111] flex items-center justify-center overflow-hidden z-0 shadow-[inset_0_0_40px_rgba(0,0,0,1)]"
                  >
                    <div className="w-[90%] h-[90%] rounded-full border border-white/5 flex items-center justify-center">
                      <div className="w-[80%] h-[80%] rounded-full border border-white/5"></div>
                    </div>
                    <div className={`absolute w-[35%] h-[35%] rounded-full bg-[#1DB954] opacity-20 blur-xl transition-all duration-700 ${isPlaying ? 'scale-150 opacity-40' : 'scale-100'}`}></div>
                    <div className="absolute w-[25%] h-[25%] rounded-full bg-black flex items-center justify-center border border-white/10">
                      <div className="w-3 h-3 bg-[#0a0a0a] rounded-full"></div>
                    </div>
                  </motion.div>

                  {/* Square Cover Art */}
                  <div className="relative z-10 w-[85%] h-[85%] mt-[7.5%] bg-black shadow-[20px_20px_40px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden">
                    <img
                      src={currentTrack.cover}
                      alt={currentTrack.title}
                      className={`w-full h-full object-cover grayscale contrast-125 transition-all duration-700 ${isPlaying ? 'scale-105 grayscale-0' : 'scale-100 grayscale-[80%]'}`}
                    />
                    {isPlaying && (
                      <div className="absolute inset-0 bg-[#1DB954] mix-blend-overlay opacity-20 pointer-events-none"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Info & Controls */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between relative bg-black/60 backdrop-blur-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                  <motion.div className="h-full bg-[#1DB954]" style={{ width: `${progress}%` }} />
                </div>

                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase opacity-50 mb-8 relative z-10">
                  <span className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#1DB954] animate-pulse' : 'bg-white/30'}`}></span>
                    Now Playing
                  </span>
                  <span className={isPlaying ? 'text-[#1DB954] font-bold opacity-100' : ''}>{isPlaying ? 'LIVE OUTPUT' : 'STANDBY'}</span>
                </div>

                <div className="mb-12 mt-auto">
                  <h4 className="text-4xl md:text-5xl font-light tracking-tighter uppercase mb-2 truncate" title={currentTrack.title}>
                    {currentTrack.title}
                  </h4>
                  <p className="font-sans text-sm tracking-widest text-[#1DB954] uppercase truncate">{currentTrack.artist}</p>
                </div>

                <div className="flex flex-col gap-6 w-full">
                  {/* Brutalist Progress Bar */}
                  <div className="flex flex-col gap-3">
                    <div className="h-[2px] w-full bg-white/10 relative overflow-hidden group-hover:h-[4px] transition-all cursor-pointer">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-white"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-sans tracking-widest text-white/40">
                      <span>{isPlaying ? `00:${Math.floor(progress * 0.6).toString().padStart(2, '0')}` : "00:00"}</span>
                      <span>{currentTrack.duration}</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex justify-between items-center pt-2">
                    <button className="text-white/30 hover:text-white transition-colors"><Volume2 size={18} strokeWidth={1.5} /></button>

                    <div className="flex justify-center items-center gap-6 md:gap-8">
                      <button
                        onClick={() => handleTrackSelect((currentTrackIndex - 1 + tracks.length) % tracks.length)}
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <Rewind size={22} strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-[#1DB954] hover:text-white transition-all hover:scale-105"
                      >
                        {isPlaying ? <Pause size={20} strokeWidth={1.5} fill="currentColor" /> : <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-current border-b-[8px] border-b-transparent ml-1"></div>}
                      </button>
                      <button
                        onClick={() => handleTrackSelect((currentTrackIndex + 1) % tracks.length)}
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <FastForward size={22} strokeWidth={1.5} />
                      </button>
                    </div>

                    <a href="#" className="text-white/30 hover:text-[#1DB954] transition-colors"><ExternalLink size={18} strokeWidth={1.5} /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* EQ / Visualizer Stats Module */}
            <div className="lg:col-span-4 bg-[#1DB954] text-black p-8 flex flex-col border border-white/20 shadow-[12px_12px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
              <div className="flex justify-between items-start mb-auto relative z-10">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold bg-black text-white px-2 py-1">SYS.EQ</span>
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-50">{isPlaying ? 'ACTIVE' : 'IDLE'}</span>
              </div>

              <div className="flex flex-col gap-1 relative z-10 mt-12 mb-8">
                <div className="text-[10px] tracking-widest uppercase opacity-70 font-bold">Frequency Output</div>
                <div className="text-5xl lg:text-6xl font-light tracking-tighter uppercase">{isPlaying ? '14.2kHz' : '0.0kHz'}</div>
              </div>

              {/* Dynamic Waveform Bars */}
              <div className="flex items-end gap-1 h-32 w-full mt-auto relative z-10">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying
                        ? [`${Math.random() * 30 + 10}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 50 + 10}%`]
                        : "5%"
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5 + Math.random() * 0.5,
                      ease: "easeInOut"
                    }}
                    className="flex-1 bg-black"
                  />
                ))}
              </div>

              {/* Background texture pattern */}
              <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[size:4px_4px] pointer-events-none"></div>
            </div>

            {/* Playlist Grid */}
            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mt-2">
              {tracks.map((track, i) => {
                const isActive = currentTrackIndex === i;
                return (
                  <button
                    key={track.id}
                    onClick={() => handleTrackSelect(i)}
                    className={`relative aspect-[4/5] sm:aspect-square border ${isActive ? 'border-[#1DB954]' : 'border-white/20'} overflow-hidden group flex flex-col justify-end p-5 text-left transition-all hover:border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#050505]`}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0 z-0">
                      <img src={track.cover} className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0 scale-105 opacity-40' : 'grayscale contrast-125 opacity-20 group-hover:scale-110 group-hover:opacity-60'}`} alt={track.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] tracking-widest font-sans opacity-70">0{i + 1}</span>
                        <span className="text-[10px] tracking-widest font-sans opacity-70">{track.duration}</span>
                      </div>
                      <span className={`text-lg lg:text-xl font-light uppercase tracking-tighter truncate leading-tight ${isActive ? 'text-[#1DB954]' : 'text-white'}`}>{track.title}</span>
                      <span className="text-[10px] tracking-[0.2em] font-sans uppercase opacity-50 truncate mt-1">{track.artist}</span>
                    </div>

                    {/* Playing indicator */}
                    {isActive && isPlaying && (
                      <div className="absolute top-5 right-5 flex items-end gap-[2px] h-3">
                        <motion.div animate={{ height: ["3px", "10px", "3px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[2px] bg-[#1DB954]" />
                        <motion.div animate={{ height: ["10px", "4px", "10px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[2px] bg-[#1DB954]" />
                        <motion.div animate={{ height: ["5px", "12px", "5px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[2px] bg-[#1DB954]" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* --- HOBBIES SECTION --- */}
      <section className="py-24 md:py-40 relative z-10 bg-[#e5e5e5] border-t border-black/10 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6"
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl uppercase font-light tracking-tighter leading-none">Beyond The <br /><span className="italic">Screen</span></h3>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-50">[ 04. ANALOG & VISUAL PURSUITS ]</span>
          </motion.div>

          {/* Masonry Gallery */}
          <div className="mt-12 w-full">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter="16px">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative group overflow-hidden bg-black cursor-pointer" onClick={() => setFullscreenImage("https://images.unsplash.com/photo-1622149828641-bf3cd5aa6c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczNDY3NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080")}>
                  <img src="https://images.unsplash.com/photo-1622149828641-bf3cd5aa6c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczNDY3NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Street Photography" className="w-full h-auto block grayscale contrast-125 hover:scale-105 transition-transform duration-700 hover:grayscale-0 opacity-90 hover:opacity-100" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={(e) => handleImageDownload(e, "https://images.unsplash.com/photo-1622149828641-bf3cd5aa6c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczNDY3NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080")} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Download size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFullscreenImage("https://images.unsplash.com/photo-1622149828641-bf3cd5aa6c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczNDY3NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"); }} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Maximize size={16} /></button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1">STREET</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative group overflow-hidden bg-black cursor-pointer" onClick={() => setFullscreenImage("https://images.unsplash.com/photo-1615112638325-8f32071a480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc3MzQ3NTA4OXww&ixlib=rb-4.1.0&q=80&w=1080")}>
                  <img src="https://images.unsplash.com/photo-1615112638325-8f32071a480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc3MzQ3NTA4OXww&ixlib=rb-4.1.0&q=80&w=1080" alt="Espresso" className="w-full h-auto block grayscale contrast-125 hover:scale-105 transition-transform duration-700 hover:grayscale-0 opacity-90 hover:opacity-100" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={(e) => handleImageDownload(e, "https://images.unsplash.com/photo-1615112638325-8f32071a480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc3MzQ3NTA4OXww&ixlib=rb-4.1.0&q=80&w=1080")} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Download size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFullscreenImage("https://images.unsplash.com/photo-1615112638325-8f32071a480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc3MzQ3NTA4OXww&ixlib=rb-4.1.0&q=80&w=1080"); }} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Maximize size={16} /></button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1">EXTRACTION</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative group overflow-hidden bg-black cursor-pointer" onClick={() => setFullscreenImage("https://images.unsplash.com/photo-1761834520785-ca17a0275f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYm9va3MlMjBsaWJyYXJ5JTIwZGFya3xlbnwxfHx8fDE3NzM0NzUxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080")}>
                  <img src="https://images.unsplash.com/photo-1761834520785-ca17a0275f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYm9va3MlMjBsaWJyYXJ5JTIwZGFya3xlbnwxfHx8fDE3NzM0NzUxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Literature" className="w-full h-auto block grayscale contrast-125 hover:scale-105 transition-transform duration-700 hover:grayscale-0 opacity-90 hover:opacity-100" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={(e) => handleImageDownload(e, "https://images.unsplash.com/photo-1761834520785-ca17a0275f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYm9va3MlMjBsaWJyYXJ5JTIwZGFya3xlbnwxfHx8fDE3NzM0NzUxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080")} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Download size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFullscreenImage("https://images.unsplash.com/photo-1761834520785-ca17a0275f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYm9va3MlMjBsaWJyYXJ5JTIwZGFya3xlbnwxfHx8fDE3NzM0NzUxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"); }} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Maximize size={16} /></button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1">THEORY</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative group overflow-hidden bg-black cursor-pointer" onClick={() => setFullscreenImage("https://images.unsplash.com/photo-1715939477771-74ffedd6a072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwxfHx8fDE3NzM0NzUwODB8MA&ixlib=rb-4.1.0&q=80&w=1080")}>
                  <img src="https://images.unsplash.com/photo-1715939477771-74ffedd6a072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwxfHx8fDE3NzM0NzUwODB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Architecture" className="w-full h-auto block grayscale contrast-125 hover:scale-105 transition-transform duration-700 hover:grayscale-0 opacity-90 hover:opacity-100" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={(e) => handleImageDownload(e, "https://images.unsplash.com/photo-1715939477771-74ffedd6a072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwxfHx8fDE3NzM0NzUwODB8MA&ixlib=rb-4.1.0&q=80&w=1080")} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Download size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFullscreenImage("https://images.unsplash.com/photo-1715939477771-74ffedd6a072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25vY2hyb21lJTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwxfHx8fDE3NzM0NzUwODB8MA&ixlib=rb-4.1.0&q=80&w=1080"); }} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Maximize size={16} /></button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1">STRUCTURE</div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="relative group overflow-hidden bg-black hidden md:block cursor-pointer" onClick={() => setFullscreenImage("https://images.unsplash.com/photo-1769287429003-2a7e8ebee0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBsZW5zJTIwbW9ub2Nocm9tZSUyMGRhcmt8ZW58MXx8fHwxNzczNDcyNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080")}>
                  <img src="https://images.unsplash.com/photo-1769287429003-2a7e8ebee0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBsZW5zJTIwbW9ub2Nocm9tZSUyMGRhcmt8ZW58MXx8fHwxNzczNDcyNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Camera Lens" className="w-full h-auto block grayscale contrast-125 hover:scale-105 transition-transform duration-700 hover:grayscale-0 opacity-90 hover:opacity-100" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={(e) => handleImageDownload(e, "https://images.unsplash.com/photo-1769287429003-2a7e8ebee0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBsZW5zJTIwbW9ub2Nocm9tZSUyMGRhcmt8ZW58MXx8fHwxNzczNDcyNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080")} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Download size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFullscreenImage("https://images.unsplash.com/photo-1769287429003-2a7e8ebee0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBsZW5zJTIwbW9ub2Nocm9tZSUyMGRhcmt8ZW58MXx8fHwxNzczNDcyNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"); }} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Maximize size={16} /></button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1">LENS</div>
                </motion.div>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </section>

      {/* --- SPORTS & GAMES HORIZONTAL SCROLL --- */}
      <section ref={sportsRef} className="relative h-[300vh] bg-[#0a0a0a] text-white">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center border-t border-b border-white/10">
          <motion.div style={{ x: sportsXTransform }} className="flex h-full w-[300vw] will-change-transform items-center relative z-10">

            {/* Intro Text Panel */}
            <div className="w-screen h-full flex flex-col justify-center items-center p-6 md:p-24 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <span className="text-[30vw] font-bold uppercase tracking-tighter whitespace-nowrap">ACTIVE</span>
              </div>
              <motion.div style={{ opacity: sportsOpacity }} className="text-center z-10 max-w-4xl mx-auto">
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-8 block">[ 05. PHYSICAL & DIGITAL ARENAS ]</span>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-light uppercase tracking-tighter leading-none mb-8">
                  Pushing the <br /><span className="italic opacity-80">Limits.</span>
                </h2>
                <p className="text-sm md:text-lg tracking-widest font-sans leading-loose text-white/60">
                  Whether it's conquering a mountain trail, dominating in competitive gaming, or pushing on the court—the drive for mastery remains constant across all mediums.
                </p>
              </motion.div>
            </div>

            {/* Gamer Panel */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-24 relative border-l border-white/10">
              <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 flex flex-col gap-6 relative z-10">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#1DB954] mb-2 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-[#1DB954]"></span>
                    GAMER
                  </div>
                  <h3 className="text-5xl md:text-7xl font-light uppercase tracking-tighter mb-4">
                    Digital <br /><span className="italic">Combat.</span>
                  </h3>
                  <p className="text-xs md:text-sm font-sans tracking-widest text-white/50 leading-loose border-l border-white/20 pl-6">
                    Competitive gaming isn't just play; it's high-speed problem solving. From deep strategy in RPGs to split-second reflexes in FPS arenas. Analyzing the meta and executing with precision.
                  </p>
                </div>
                <div className="order-1 md:order-2 aspect-square relative group overflow-hidden bg-black p-4 border border-white/10 shadow-2xl cursor-pointer" onClick={() => setFullscreenImage("https://images.unsplash.com/photo-1607896426171-99097eb60cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGdhbWluZyUyMGRhcmt8ZW58MXx8fHwxNzczNDc1MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080")}>
                  <img src="https://images.unsplash.com/photo-1607896426171-99097eb60cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGdhbWluZyUyMGRhcmt8ZW58MXx8fHwxNzczNDc1MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Gaming" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen" />
                  <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:opacity-0 transition-opacity">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={(e) => handleImageDownload(e, "https://images.unsplash.com/photo-1607896426171-99097eb60cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGdhbWluZyUyMGRhcmt8ZW58MXx8fHwxNzczNDc1MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080")} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Download size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFullscreenImage("https://images.unsplash.com/photo-1607896426171-99097eb60cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMGdhbWluZyUyMGRhcmt8ZW58MXx8fHwxNzczNDc1MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080"); }} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Maximize size={16} /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports & Hiking Panel */}
            <div className="w-screen h-full flex items-center justify-center p-6 md:p-24 relative border-l border-white/10 bg-[#111]">
              <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Image: The Court */}
                <div className="md:col-span-3 aspect-square md:aspect-[3/4] relative group overflow-hidden border border-white/10 p-2 bg-black cursor-pointer" onClick={() => setFullscreenImage("https://images.unsplash.com/photo-1612893562175-9303361dd487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwaG9vcCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzczNDc1MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080")}>
                  <img src="https://images.unsplash.com/photo-1612893562175-9303361dd487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwaG9vcCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzczNDc1MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Sports" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 left-6 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10">
                    <span className="text-[8px] tracking-[0.3em] uppercase bg-white text-black px-2 py-0.5 w-max font-bold">Output: Kinetic</span>
                    <span className="text-[8px] tracking-[0.3em] uppercase bg-black border border-white/20 text-white px-2 py-0.5 w-max">HR: 165 BPM</span>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white text-[10px] tracking-widest uppercase bg-black/80 px-3 py-1 border-l-2 border-white z-10">THE COURT</div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button onClick={(e) => handleImageDownload(e, "https://images.unsplash.com/photo-1612893562175-9303361dd487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwaG9vcCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzczNDc1MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080")} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Download size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFullscreenImage("https://images.unsplash.com/photo-1612893562175-9303361dd487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwaG9vcCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzczNDc1MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"); }} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Maximize size={16} /></button>
                  </div>
                </div>

                {/* Center Content: Details */}
                <div className="md:col-span-6 flex flex-col items-center text-center px-4 relative z-10">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6 flex items-center gap-4">
                    <span className="w-4 h-[1px] bg-white/40"></span>
                    PHYSICAL PROTOCOLS
                    <span className="w-4 h-[1px] bg-white/40"></span>
                  </div>

                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tighter mb-8 leading-[0.85]">
                    Athletics & <br /><span className="italic opacity-80">Elevation.</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-b border-white/10 py-8 my-4 text-left">
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xs tracking-[0.2em] uppercase text-white font-medium border-l border-white pl-3">Basketball / Dynamics</h4>
                      <p className="text-[11px] md:text-xs font-sans tracking-widest text-white/50 leading-relaxed uppercase pl-3">
                        Spatial awareness, team mechanics, and explosive kinetic energy. The hardwood demands immediate reaction times and cardiovascular stamina.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xs tracking-[0.2em] uppercase text-white font-medium border-l border-[#1DB954] pl-3">Alpine / Endurance</h4>
                      <p className="text-[11px] md:text-xs font-sans tracking-widest text-white/50 leading-relaxed uppercase pl-3">
                        Conquering verticality. Long-distance trekking and altitude exposure build the exact mental resilience required for marathon software architecture.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center gap-8 mt-4 text-[9px] tracking-[0.3em] uppercase text-white/30">
                    <span>[ DISCIPLINE: ACTIVE ]</span>
                    <span>[ STATUS: OPTIMAL ]</span>
                  </div>
                </div>

                {/* Right Image: The Trail */}
                <div className="md:col-span-3 aspect-square md:aspect-[3/4] relative group overflow-hidden border border-white/10 p-2 bg-black cursor-pointer" onClick={() => setFullscreenImage("https://images.unsplash.com/photo-1744535284634-7b3e33e34e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MzQ3NTA5OXww&ixlib=rb-4.1.0&q=80&w=1080")}>
                  <img src="https://images.unsplash.com/photo-1744535284634-7b3e33e34e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MzQ3NTA5OXww&ixlib=rb-4.1.0&q=80&w=1080" alt="Hiking" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 right-6 flex flex-col gap-1 items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10">
                    <span className="text-[8px] tracking-[0.3em] uppercase bg-white text-black px-2 py-0.5 w-max font-bold">Elev: 14,400FT</span>
                    <span className="text-[8px] tracking-[0.3em] uppercase bg-black border border-white/20 text-white px-2 py-0.5 w-max">Atmo: Thin</span>
                  </div>
                  <div className="absolute bottom-6 right-6 text-white text-[10px] tracking-widest uppercase bg-black/80 px-3 py-1 border-r-2 border-white z-10">THE TRAIL</div>

                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button onClick={(e) => handleImageDownload(e, "https://images.unsplash.com/photo-1744535284634-7b3e33e34e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MzQ3NTA5OXww&ixlib=rb-4.1.0&q=80&w=1080")} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Download size={16} /></button>
                    <button onClick={(e) => { e.stopPropagation(); setFullscreenImage("https://images.unsplash.com/photo-1744535284634-7b3e33e34e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjBtb25vY2hyb21lfGVufDF8fHx8MTc3MzQ3NTA5OXww&ixlib=rb-4.1.0&q=80&w=1080"); }} className="bg-black/80 text-white p-2 hover:text-[#1DB954] hover:bg-black transition-all border border-white/20"><Maximize size={16} /></button>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- RESUME / CV SECTION --- */}
      <section className="py-24 md:py-48 bg-white text-black relative z-10 border-t border-black/10">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

            <div className="lg:col-span-4 flex flex-col gap-6 sticky top-32">
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 border-l border-black pl-4">
                [ 06. ARCHIVES & DOCUMENTATION ]
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tighter leading-[0.85]">
                Curriculum <br /><span className="italic opacity-50">Vitae.</span>
              </h2>
              <p className="font-sans text-sm tracking-widest uppercase opacity-60 mt-4 leading-relaxed max-w-sm">
                A complete record of professional deployments, technical stacks, and academic foundations. Available for download and offline review.
              </p>

              <button
                className="mt-8 flex items-center justify-between w-full max-w-xs border border-black p-4 group hover:bg-black hover:text-white transition-colors duration-300"
                onClick={() => alert("CV Download Triggered (Mock)")}
              >
                <span className="text-xs font-sans tracking-[0.2em] uppercase font-bold">Download.PDF</span>
                <FileText size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-12 border-t border-black/10 pt-12 lg:pt-0 lg:border-t-0">

              {/* Experience Block */}
              <div className="flex flex-col gap-8">
                <h3 className="text-xl tracking-[0.3em] uppercase border-b border-black/10 pb-4 mb-4">Experience</h3>

                {[
                  { role: "Lead Front-End Architect", company: "Void Dynamics", time: "2023 - Present", desc: "Spearheaded the development of proprietary WebGL rendering pipelines. Reduced bundle size by 40% while increasing interactive fidelity." },
                  { role: "Senior Developer", company: "Structural Systems", time: "2020 - 2023", desc: "Architected component libraries used across 12 enterprise applications. Implemented strict brutally honest design systems." },
                  { role: "UI Engineer", company: "Grid Networks", time: "2018 - 2020", desc: "Built highly accessible, high-performance dashboards for real-time data monitoring." }
                ].map((job, i) => (
                  <div key={i} className="group flex flex-col gap-2 relative pl-6 border-l border-black/20 hover:border-black transition-colors">
                    <div className="absolute top-2 left-[-4px] w-2 h-2 bg-white border border-black group-hover:bg-black transition-colors"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h4 className="text-2xl font-light uppercase tracking-tighter">{job.role}</h4>
                      <span className="text-[10px] tracking-[0.2em] uppercase font-sans opacity-50">{job.time}</span>
                    </div>
                    <h5 className="text-xs tracking-widest uppercase font-sans font-bold opacity-80">{job.company}</h5>
                    <p className="font-sans text-sm opacity-70 leading-relaxed mt-2">{job.desc}</p>
                  </div>
                ))}
              </div>

              {/* Skills Block */}
              <div className="flex flex-col gap-8 mt-12">
                <h3 className="text-xl tracking-[0.3em] uppercase border-b border-black/10 pb-4 mb-4">Core Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-sans text-xs tracking-widest uppercase opacity-80">
                  <div className="flex flex-col gap-4">
                    <span className="font-bold text-black opacity-100 border-b border-black/10 pb-2">Frameworks</span>
                    <span>React / Next.js</span>
                    <span>Three.js / R3F</span>
                    <span>Framer Motion</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-bold text-black opacity-100 border-b border-black/10 pb-2">Languages</span>
                    <span>TypeScript</span>
                    <span>GLSL (Shaders)</span>
                    <span>HTML / CSS</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-bold text-black opacity-100 border-b border-black/10 pb-2">Tools</span>
                    <span>Tailwind CSS</span>
                    <span>Vite / Webpack</span>
                    <span>Git / CI/CD</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}