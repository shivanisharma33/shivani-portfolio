import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2025 — Present",
    role: "Full Stack Developer",
    company: "Mining Discovery — Mohali, Punjab",
    description: "Developed responsive, data-driven dashboards. Optimized performance and implemented scroll-based animations using GSAP and Framer Motion. Collaborated with backend developers and designers for seamless integration.",
    icon: Briefcase,
  },
  {
    year: "Feb — Aug 2025",
    role: "MERN Stack Intern",
    company: "Solitaire Infosys — Mohali, Punjab",
    description: "Designed and developed responsive web applications using HTML, CSS, and JavaScript. Translated UI/UX designs into functional interfaces and managed codebases using Git.",
    icon: Briefcase,
  },
  {
    year: "2023 — 2025",
    role: "Master of Computer Applications",
    company: "Quantum University — Roorkee, Uttarakhand",
    description: "Post-graduate studies in computer science, focusing on software development, databases, and modern web technologies.",
    icon: GraduationCap,
  },
  {
    year: "2019 — 2022",
    role: "B.Sc in Computer Science",
    company: "Chaudhary Charan Singh University — Meerut, UP",
    description: "Bachelor's degree in computer science, building foundational knowledge in programming, data structures, and algorithms.",
    icon: GraduationCap,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-32 relative bg-black" ref={ref}>
      {/* Premium Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle Glow Orb */}
      <div className="absolute bottom-1/4 left-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="mb-20 flex flex-col items-start"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6 backdrop-blur-md">
            <span className="font-mono text-red-500 text-xs tracking-widest uppercase font-medium">
              // Timeline
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase">
            My <span className="text-red-600 glow-text">Journey</span>
          </h2>
          <div className="h-1.5 w-32 bg-red-600 rounded-full" />
        </motion.div>

        {/* Tabular Brutalist List */}
        <motion.div 
          className="flex flex-col border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp) => {
             const Icon = exp.icon;
             return (
               <motion.div 
                 key={exp.year + exp.role}
                 variants={itemVariants}
                 className="group relative flex flex-col md:flex-row gap-6 md:gap-12 py-12 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden cursor-default"
               >
                 {/* Sliding red vertical indicator on hover */}
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20" />
                 
                 {/* Intense Background Glow on Hover */}
                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 
                 {/* Left side - Year & Icon */}
                 <div className="md:w-1/3 flex flex-col gap-6 pl-6 md:pl-10 relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-colors duration-500 shadow-lg">
                      <Icon className="w-7 h-7 text-white/50 group-hover:text-red-500 transition-colors duration-500" />
                    </div>
                    <span className="font-mono text-red-500 text-2xl font-bold tracking-widest filter drop-shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                      {exp.year}
                    </span>
                 </div>

                 {/* Right side - Details */}
                 <div className="md:w-2/3 flex flex-col pl-6 md:pl-0 pr-6 relative z-10">
                   <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 group-hover:text-red-500 transition-colors duration-500 tracking-tight">
                      {exp.role}
                   </h3>
                   <p className="text-white/40 font-mono uppercase text-sm mb-6 tracking-widest flex items-center gap-4">
                      {exp.company}
                   </p>
                   <p className="text-white/70 text-lg font-light leading-relaxed max-w-3xl">
                      {exp.description}
                   </p>
                 </div>
               </motion.div>
             );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
