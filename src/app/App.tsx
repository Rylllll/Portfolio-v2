import { motion } from "motion/react";

const navItems = ["Portfolio", "Artists", "Editorial", "Contact"];

const specRows = [
  { label: "Style", value: "Minimalistic" },
  { label: "Type", value: "Environmental" },
  { label: "Space", value: "134m" },
  { label: "Colors", value: "Black, Red" },
  { label: "Location", value: "Abu Dhabi" },
];

const revealUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#d8d8d8] px-4 py-7 text-[#101010] lg:px-10 lg:py-10">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto grid min-h-[88vh] w-full max-w-[1380px] overflow-hidden border border-black/10 bg-[#efefef] shadow-[0_26px_80px_rgba(0,0,0,0.12)] lg:grid-cols-[1.15fr_0.9fr_0.8fr]"
      >
        <section className="relative flex flex-col border-b border-black/10 px-6 pb-10 pt-8 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 lg:pb-12">
          <motion.header
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex items-center gap-6 border-b border-black/20 pb-6"
          >
            <div className="flex h-14 w-14 items-center justify-center border border-black text-3xl font-semibold">B.</div>
            <nav className="hidden gap-8 text-sm uppercase tracking-[0.16em] xl:flex">
              {navItems.map((item, idx) => (
                <a key={item} href="#" className={`transition hover:opacity-100 ${idx === 0 ? "opacity-100" : "opacity-60"}`}>
                  {item}
                </a>
              ))}
            </nav>
          </motion.header>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="mt-10"
          >
            <h1 className="text-[clamp(3.2rem,10vw,8rem)] font-black uppercase leading-[0.9] tracking-tight">
              Minimalistic
            </h1>
            <p className="mt-8 max-w-md text-sm uppercase leading-8 tracking-[0.08em] text-black/80">
              Your house has many functions, which require ergonomic flow. This is where the role of an interior designer begins.
            </p>
          </motion.div>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="mt-auto flex flex-wrap gap-5 pt-10 text-sm uppercase tracking-[0.16em] text-black/85"
          >
            <a href="#">Instagram</a>
            <span>/</span>
            <a href="#">Facebook</a>
            <span>/</span>
            <a href="#">Telegram</a>
          </motion.div>
        </section>

        <section className="relative border-b border-black/10 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto h-[420px] w-full overflow-hidden bg-[#d9d9d9] sm:h-[560px] lg:h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1100&q=80"
              alt="Modern black and white architecture with red details"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 border-t border-black/20 pt-6 text-sm uppercase tracking-[0.14em]"
          >
            <a href="#" className="group inline-flex items-center gap-3 font-medium">
              View portfolio <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <p className="mt-5 max-w-sm leading-8 text-black/80">A unique structure combined with nature and balanced material contrast.</p>
          </motion.div>
        </section>

        <section className="relative px-6 pb-12 pt-8 sm:px-10 lg:px-14">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center justify-between"
          >
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full border border-black bg-black" />
              <span className="h-3 w-3 rounded-full bg-black/20" />
              <span className="h-3 w-3 rounded-full bg-black/20" />
            </div>
            <button className="space-y-1.5" aria-label="Open menu">
              <span className="block h-px w-7 bg-black" />
              <span className="block h-px w-7 bg-black" />
              <span className="block h-px w-7 bg-black" />
            </button>
          </motion.div>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <h2 className="text-4xl font-semibold uppercase tracking-tight">WIP Architect</h2>
            <p className="mt-8 max-w-xs text-sm uppercase leading-8 tracking-[0.08em] text-black/75">
              The high level of effectiveness of the architectural design.
            </p>

            <div className="mt-12 space-y-2 text-sm uppercase tracking-[0.1em]">
              {specRows.map((row) => (
                <div key={row.label} className="flex items-center justify-between border-b border-black/20 py-4">
                  <span>{row.label}</span>
                  <span className="font-medium">{row.value}</span>
                </div>
              ))}
            </div>

            <a href="#" className="mt-10 inline-block text-sm font-medium uppercase underline underline-offset-4">
              Read more
            </a>
          </motion.div>
        </section>
      </motion.main>
    </div>
  );
}
