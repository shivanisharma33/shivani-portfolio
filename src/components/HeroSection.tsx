import { motion } from "framer-motion";

const CodeWindow = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotateY: -15, rotateX: 5 }}
    animate={{ opacity: 1, scale: 1, rotateY: -5, rotateX: 5 }}
    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
    className="relative w-full max-w-lg mx-auto lg:ml-auto xl:mr-0 z-20 mt-12 lg:mt-0"
    style={{ perspective: "1000px" }}
  >
    {/* Glow behind the window */}
    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-red-900/20 rounded-2xl blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
    
    <motion.div 
      className="relative rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl overflow-hidden shadow-2xl"
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-neutral-500" />
        <div className="w-3 h-3 rounded-full bg-white/80" />
        <span className="ml-4 text-xs font-mono text-white/40">developer.ts</span>
      </div>
      
      {/* Window Body */}
      <div className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-white/80 overflow-x-auto">
        <div className="flex gap-4">
          <span className="text-red-500">const</span> 
          <span className="text-white/90">developer</span> 
          <span className="text-white/50">=</span> 
          <span className="text-white/60">{"{"}</span>
        </div>
        <div className="ml-6 sm:ml-8 mt-4 space-y-3">
          <div><span className="text-red-400">name:</span> <span className="text-white/80">'Shivani Dixit'</span>,</div>
          <div><span className="text-red-400">role:</span> <span className="text-white/80">'Front-end Developer'</span>,</div>
          <div className="flex items-start">
            <span className="text-red-400 mr-2 shrink-0">skills:</span> 
            <span className="text-white/80 break-words">["React", "TypeScript", "TailwindCSS"]</span>,
          </div>
          <div className="whitespace-normal"><span className="text-red-400">passion:</span> <span className="text-white/80">'Crafting pixel-perfect UI'</span></div>
        </div>
        <div className="mt-4 text-white/60">{"};"}</div>
        
        <div className="mt-6 flex gap-4">
          <span className="text-red-500">export default</span>
          <span className="text-white/90">developer</span>;
        </div>
      </div>
      
      {/* Floating Elements (Hidden on extremely small screens to stop horizontal overflow) */}
      <motion.div className="hidden sm:flex absolute -right-6 -top-6 w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-black border border-white/10 backdrop-blur-xl items-center justify-center text-3xl shadow-xl"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        ⚛️
      </motion.div>
      <motion.div className="hidden sm:flex absolute -left-8 bottom-16 w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-black border border-white/10 backdrop-blur-xl items-center justify-center text-3xl shadow-xl"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      >
        🎨
      </motion.div>
    </motion.div>
  </motion.div>
);

const TextGenerateEffect = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ delay: 0.04 * i, duration: 0.4, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black pb-20 pt-32 lg:py-20">
      {/* Luxurious Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Glow Orbs */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-red-900/20 blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-t from-red-600/40 to-transparent"
            style={{ 
              width: Math.random() * 4 + 2 + 'px', 
              height: Math.random() * 4 + 2 + 'px',
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8 backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span className="relative flex h-2 w-2 mr-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="font-mono text-red-500 text-xs sm:text-sm tracking-widest uppercase font-medium">
              Available for New Opportunities
            </span>
          </motion.div>

          {/* Fully Responsive Header Typography */}
          <h1 className="text-[3.5rem] leading-[1.1] sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <TextGenerateEffect text="Hi, I'm" />
            <br />
            <span className="text-gradient-red glow-text font-extrabold pb-2 inline-block relative">
              <TextGenerateEffect text="Shivani Dixit" />
              <motion.div 
                className="absolute -bottom-1 left-0 h-1 sm:h-1.5 bg-gradient-to-r from-red-600 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </span>
          </h1>

          <motion.h2
            className="text-xl sm:text-3xl text-white/80 font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Front-end Developer
          </motion.h2>

          <motion.p
            className="text-white/60 max-w-lg text-base sm:text-lg mb-8 md:mb-10 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Building responsive, interactive & visually engaging web experiences with React.js, modern animations, and pixel-perfect design.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="gradient-red text-white w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl font-bold text-center hover:scale-105 transition-all glow-border shadow-lg shadow-red-500/25 uppercase tracking-widest text-sm"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl font-bold text-center transition-all overflow-hidden border border-white/20 bg-white/5 hover:bg-white/10 text-white hover:border-red-500/50 uppercase tracking-widest text-sm"
            >
              <span className="relative z-10 transition-transform group-hover:translate-x-1 inline-block">
                Hire Me &rarr;
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right - Premium IDE Visual (Now beautifully displayed on Mobile!) */}
        <CodeWindow />

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden lg:block absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-black/20">
          <div className="w-1 h-2 bg-red-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
