import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Layers, Sparkles, Briefcase, Clock, GraduationCap, Code2 } from "lucide-react";

const AboutSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
  };

  return (
    <section id="about" className="py-24 relative bg-black" ref={ref}>
      {/* Background styling matching Hero */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6 backdrop-blur-md">
            <span className="font-mono text-red-500 text-xs tracking-widest uppercase font-medium">
              // Beyond The Code
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Everything <span className="text-red-600 glow-text">About Me</span>
          </h2>
          <div className="h-1.5 w-24 bg-red-600 rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Block 1: Who I Am (Large) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10 relative overflow-hidden group backdrop-blur-md flex flex-col justify-end min-h-[300px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />
            <User className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-red-500/20 transition-colors duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Who I Am</h3>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                An ambitious and detail-oriented Front-end Developer with hands-on experience in building responsive, interactive, and visually engaging web applications using modern web technologies.
              </p>
            </div>
          </motion.div>

          {/* Block 2: 10+ Projects */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-600/10 to-transparent p-6 flex flex-col items-center justify-center text-center group backdrop-blur-md relative overflow-hidden min-h-[200px]"
          >
            <Briefcase className="absolute -bottom-4 -right-4 w-24 h-24 text-red-500/5 group-hover:text-red-500/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
            <div className="text-6xl font-black text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(220,38,38,0.2)]">10+</div>
            <div className="text-xs uppercase tracking-widest text-white/50 font-bold relative z-10">Projects</div>
          </motion.div>

          {/* Block 3: 1+ Year */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center text-center group backdrop-blur-md relative overflow-hidden min-h-[200px]"
          >
            <Clock className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 group-hover:text-white/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
            <div className="text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">1+</div>
            <div className="text-xs uppercase tracking-widest text-white/50 font-bold relative z-10">Years Exp</div>
          </motion.div>

          {/* Block 4: What I Do */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/5 p-8 relative overflow-hidden group backdrop-blur-md flex flex-col justify-center min-h-[200px]"
          >
            <Layers className="absolute -bottom-6 -right-6 w-40 h-40 text-white/5 group-hover:text-red-500/5 transition-colors duration-500 group-hover:-rotate-12" />
            <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight relative z-10">What I Do</h3>
            <p className="text-white/60 text-base leading-relaxed font-light relative z-10">
              Strong understanding of component-based architecture, state management, and performance optimization. Skilled in translating complex designs into pixel-perfect modern interfaces.
            </p>
          </motion.div>

          {/* Block 5: My Approach */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/5 p-8 relative overflow-hidden group backdrop-blur-md flex flex-col justify-center min-h-[200px]"
          >
            <Sparkles className="absolute -bottom-6 -right-6 w-40 h-40 text-white/5 group-hover:text-red-500/5 transition-colors duration-500 group-hover:-rotate-12" />
            <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight relative z-10">My Approach</h3>
            <p className="text-white/60 text-base leading-relaxed font-light relative z-10">
              A proactive team player committed to continuous learning, elegantly solving complex problems, and delivering scalable, high-quality frontend solutions.
            </p>
          </motion.div>

          {/* Block 6: MCA Degree */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center text-center group backdrop-blur-md relative overflow-hidden min-h-[200px]"
          >
            <GraduationCap className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 group-hover:text-white/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
            <div className="text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">MCA</div>
            <div className="text-xs uppercase tracking-widest text-white/50 font-bold relative z-10">Degree</div>
          </motion.div>

          {/* Block 7: 7+ Techs */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2rem] border border-red-500/20 bg-gradient-to-t from-red-600/10 to-transparent p-6 flex flex-col items-center justify-center text-center group backdrop-blur-md relative overflow-hidden min-h-[200px]"
          >
            <Code2 className="absolute -bottom-4 -right-4 w-24 h-24 text-red-500/5 group-hover:text-red-500/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
            <div className="text-6xl font-black text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(220,38,38,0.2)]">7+</div>
            <div className="text-xs uppercase tracking-widest text-white/50 font-bold relative z-10">Core Techs</div>
          </motion.div>

          {/* Block 8: Tech Stack - spans full width */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-4 rounded-[2rem] border border-white/10 bg-black/40 p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 backdrop-blur-md"
          >
            <h3 className="text-xl font-bold text-red-500 shrink-0 uppercase tracking-widest">Core Stack</h3>
            <div className="flex flex-wrap gap-3">
              {["React.js", "JavaScript", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS", "Git"].map((tag) => (
                <span key={tag} className="px-5 py-2.5 border border-white/10 bg-white/5 rounded-full text-white/80 text-sm font-mono hover:bg-white/10 hover:border-white/30 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
