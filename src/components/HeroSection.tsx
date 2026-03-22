import { motion } from "framer-motion";

const CodeWindow = () => (
  // Main Desktop animated wrapper, but simplified transforms for better mobile performance
  <motion.div
    initial={{ opacity: 0, scale: 0.95, rotateY: 0, rotateX: 0 }}
    animate={{ opacity: 1, scale: 1, rotateY: -5, rotateX: 5 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    className="relative w-full max-w-lg mx-auto lg:ml-auto xl:mr-0 z-20 mt-12 lg:mt-0"
    style={{ perspective: "1000px" }}
  >
    {/* Glow behind the window - Static on mobile to prevent crashes, pulsed on desktop */}
    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-red-900/10 rounded-2xl blur-2xl sm:blur-3xl hidden sm:block animate-pulse" style={{ animationDuration: '4s' }} />
    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-red-900/10 rounded-2xl blur-xl sm:hidden" />
    
    <div 
      className="relative rounded-2xl border border-white/10 bg-black/90 sm:backdrop-blur-2xl overflow-hidden shadow-2xl"
    >
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-neutral-500" />
        <div className="w-3 h-3 rounded-full bg-white/80" />
        <span className="ml-4 text-xs font-mono text-white/40">developer.ts</span>
      </div>
      
      {/* Window Body */}
      <div className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-white/80 overflow-x-auto scroller-clean">
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
      
      {/* Floating Elements (Visible on all screens, but static floating on mobile for performance) */}
      <div className="flex absolute -right-2 sm:-right-6 -top-6 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-black border border-white/10 backdrop-blur-xl items-center justify-center text-2xl sm:text-3xl shadow-xl z-30 animate-float">
        ⚛️
      </div>
      <div className="flex absolute -left-4 sm:-left-8 bottom-16 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-black border border-white/10 backdrop-blur-xl items-center justify-center text-2xl sm:text-3xl shadow-xl z-30 animate-float" style={{ animationDelay: '1s' }}>
        🎨
      </div>
    </div>
  </motion.div>
);

const TextGenerateEffect = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.03 * i, duration: 0.3, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black pb-20 pt-32 lg:py-20 w-full">
      
      {/* CSS Grid Pattern - Ultra efficient layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Background Glow Orbs - STATIC to physically prevent GPU crashes on cheap phones */}
      <div className="absolute top-[10%] right-[10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full bg-red-600/15 blur-[60px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-red-900/15 blur-[80px] sm:blur-[150px] pointer-events-none" />
      
      {/* Animated Floating Particles (CSS only for zero lag, visible globally) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-t from-red-600/40 to-transparent animate-float"
            style={{ 
              width: Math.random() * 4 + 2 + 'px', 
              height: Math.random() * 4 + 2 + 'px',
              left: `${Math.random() * 90 + 5}%`, 
              top: `${Math.random() * 90 + 5}%`,
              animationDuration: `${Math.random() * 4 + 4}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-[100vw] overflow-x-hidden">
        {/* Left - Text */}
        <div className="z-10 mt-8 sm:mt-0">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8 backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
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
          <h1 className="text-[3rem] leading-[1.1] sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight w-full drop-shadow-lg">
            <TextGenerateEffect text="Hi, I'm" />
            <br />
            <span className="text-red-500 glow-text font-black pb-2 inline-block relative pr-2">
              <TextGenerateEffect text="Shivani Dixit" />
              <div className="absolute -bottom-1 left-0 h-1 sm:h-1.5 bg-gradient-to-r from-red-600 to-transparent w-full opacity-60 rounded-full" />
            </span>
          </h1>

          <h2 className="text-xl sm:text-3xl text-white/80 font-light mb-6 tracking-wide drop-shadow-md">
            Front-end Developer
          </h2>

          <p className="text-white/60 max-w-lg text-base sm:text-lg mb-8 md:mb-10 leading-relaxed font-light">
            Building responsive, interactive & visually engaging web experiences with React.js, modern designs, and pixel-perfect architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap w-full pr-4 sm:pr-0">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="gradient-red text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.4)] uppercase tracking-widest text-sm"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-center transition-all border border-white/20 bg-white/5 hover:bg-white/10 text-white uppercase tracking-widest text-sm"
            >
              <span className="relative z-10 inline-block transition-transform group-hover:translate-x-1">
                Hire Me &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* Right - Premium IDE Visual */}
        <CodeWindow />

      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:block absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-black/20">
          <div className="w-1 h-2 bg-red-600 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
