import { motion } from "motion/react";

const EXPERIENCES = [
  {
    years: "2023 - Now",
    role: "Independent Designer & No-Code Developer",
    description: "Helping startups and creatives launch secure websites, scale their brand identity, and build powerful no-code products with Framer.",
    icon: "O"
  },
  {
    years: "2021 - 2023",
    role: "Web & Brand Designer at Creative Studio",
    description: "Specialized in across branding and digital design, delivering interfaces and websites that are accessible, fast working, future-proof.",
    icon: "◇"
  },
  {
    years: "2019 - 2021",
    role: "Junior Designer at Design Academy",
    description: "Gained hands-on experience in brand creation and interface design, while learning weekly with mentors to sharpen creative direction.",
    icon: "C"
  }
];

export function Experience() {
  return (
    <section>
      <div className="text-xs text-gray-400 mb-8 uppercase tracking-widest font-semibold">
        • Industry Experience
      </div>

      <div className="space-y-16">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            key={idx}
            className="flex flex-col md:flex-row gap-6 md:gap-16 items-start"
          >
            <div className="w-32 text-gray-400 text-sm font-mono shrink-0 pt-1">
              {exp.years}
            </div>
            
            <div className="flex-1 max-w-xl">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs mb-4">
                {exp.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{exp.role}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}