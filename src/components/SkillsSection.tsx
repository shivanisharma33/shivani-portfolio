import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Blocks, Cpu, Layout, Film, Sparkles, GitBranch, Network } from "lucide-react";

const skills = [
  { name: "React.js", level: 90, icon: Blocks },
  { name: "JavaScript", level: 90, icon: Cpu },
  { name: "HTML & CSS", level: 95, icon: Code2 },
  { name: "Tailwind CSS", level: 92, icon: Layout },
  { name: "GSAP", level: 80, icon: Film },
  { name: "Framer Motion", level: 85, icon: Sparkles },
  { name: "Git & Github", level: 85, icon: GitBranch },
  { name: "REST APIs", level: 85, icon: Network },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 relative bg-black overflow-hidden" ref={ref}>
      {/* Premium Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle Glow Orb to break the hard black */}
      <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="mb-12 flex flex-col items-start"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6 backdrop-blur-md">
            <span className="font-mono text-red-500 text-xs tracking-widest uppercase font-medium">
              // Technical Arsenal
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase">
            My <span className="text-red-600 glow-text">Toolkit</span>
          </h2>
          <div className="h-1.5 w-32 bg-red-600 rounded-full" />
        </motion.div>

        {/* Brutalist Infinite-Style List */}
        <motion.div 
          className="flex flex-col mt-16 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => {
             const Icon = skill.icon;
             return (
               <motion.div 
                 key={skill.name}
                 variants={itemVariants}
                 className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-white/10 cursor-default overflow-hidden"
               >
                 {/* Solid hover background slide-in */}
                 <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                 
                 <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-16 w-full lg:w-auto">
                   <span className="text-xl font-mono font-medium text-white/10 group-hover:text-red-500/50 transition-colors duration-500 hidden lg:block tracking-widest">
                     0{index + 1}
                   </span>
                   <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white group-hover:text-red-500 transition-colors duration-500 tracking-tighter uppercase whitespace-nowrap">
                     {skill.name}
                   </h3>
                 </div>

                 <div className="relative z-10 flex flex-row items-center gap-6 md:gap-12 mt-8 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                   {/* Massive Animated Progress Line */}
                   <div className="w-full sm:w-64 md:w-72 lg:w-96 h-1.5 bg-white/5 rounded-full relative overflow-hidden group-hover:bg-white/10 transition-colors">
                     <motion.div
                       className="absolute left-0 top-0 bottom-0 bg-red-600 rounded-full"
                       initial={{ width: 0 }}
                       animate={isInView ? { width: `${skill.level}%` } : {}}
                       transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                     >
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/40 opacity-50" />
                     </motion.div>
                   </div>
                   
                   <div className="flex items-center gap-6 shrink-0">
                     <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white/30 group-hover:text-white w-16 sm:w-24 text-right transition-colors duration-500 tracking-tighter">
                       {skill.level}%
                     </div>
                     
                     <div className="hidden sm:flex w-16 h-16 rounded-full border border-white/10 items-center justify-center bg-white/[0.02] group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-500 transform group-hover:scale-110 shadow-[0_0_0_rgba(220,38,38,0)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]">
                        <Icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors duration-500" />
                     </div>
                   </div>
                 </div>
               </motion.div>
             );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
