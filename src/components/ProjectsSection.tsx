import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import highSpiritsImg from "@/assets/projects/high_spirits.png";
import digipowerxImg from "@/assets/projects/digipowerx.png";
import royalEstateImg from "@/assets/projects/royal_estate.png";
import miningDiscoveryImg from "@/assets/projects/mining_discovery.png";

const projects = [
  {
    title: "High Spirits",
    description: "A premium, visually rich website with scroll animations, interactive effects, and a modern UI experience.",
    tech: ["React", "GSAP", "Tailwind", "Framer Motion"],
    liveUrl: "https://highspirts-new.vercel.app",
    image: highSpiritsImg,
  },
  {
    title: "DigiPowerX",
    description: "Professional digital agency website with optimized performance, responsive design, and seamless integration.",
    tech: ["React", "CSS3", "JavaScript", "API"],
    liveUrl: "https://www.digipowerx.com",
    image: digipowerxImg,
  },
  {
    title: "Royal Estate",
    description: "A beautiful real estate platform with property listings, smooth animations, and modern UI/UX design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://royal-estate-final.vercel.app/",
    image: royalEstateImg,
  },
  {
    title: "Mining Discovery",
    description: "Data-driven analytics platform with responsive dashboards and interactive data visualization.",
    tech: ["React", "JavaScript", "Tailwind", "API"],
    liveUrl: "https://www.miningdiscovery.com",
    image: miningDiscoveryImg,
  },
  {
    title: "Midis",
    description: "A comprehensive digital agency platform showcasing services, resources, and modern UI/UX.",
    tech: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://midis-site.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Blue Design Studio",
    description: "Creative design studio portfolio with elegant layouts, animations, and modern web standards.",
    tech: ["React", "Tailwind", "GSAP"],
    liveUrl: "https://blue-design-rmb.vercel.app/",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] overflow-hidden backdrop-blur-md hover:bg-white/[0.04] transition-all duration-500 hover:border-red-600/40 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(220,38,38,0.1)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-80 overflow-hidden border-b border-white/10">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Gradients to blend image into the dark card */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
        
        {/* Floating Number */}
        <div className="absolute top-6 left-6 text-7xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500 font-mono tracking-tighter">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 sm:p-10 flex flex-col flex-grow relative overflow-hidden">
        {/* Subtle glow orb inside content area on hover */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-red-500 transition-colors duration-300 tracking-tight">
          {project.title}
        </h3>
        <p className="text-white/60 text-base leading-relaxed mb-8 font-light flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 font-mono group-hover:border-red-500/30 transition-colors cursor-default">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-black font-black hover:bg-red-600 hover:text-white transition-colors duration-300 w-full text-center group/btn uppercase tracking-widest text-sm"
          >
            Live Demo <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative bg-black" ref={ref}>
       {/* Background matching other sections */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
       
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />

       <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="mb-20 flex flex-col items-start"
         >
           <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-6 backdrop-blur-md">
             <span className="font-mono text-red-500 text-xs tracking-widest uppercase font-medium">
               // Featured Work
             </span>
           </div>
           <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
             Selected <span className="text-red-600 glow-text">Projects</span>
           </h2>
           <div className="h-1.5 w-24 bg-red-600 rounded-full" />
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
           {projects.map((project, i) => (
             <ProjectCard key={project.title} project={project} index={i} />
           ))}
         </div>
       </div>
    </section>
  );
};

export default ProjectsSection;
