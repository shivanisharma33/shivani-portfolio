import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const FloatingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically lock background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 w-full ${
          scrolled && !mobileMenuOpen ? "bg-black/80 backdrop-blur-2xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" : "bg-transparent py-4 sm:py-6"
        }`}
      >
        {/* Subtle Bottom Border - Only visible when scrolling and menu is closed */}
        <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity ${scrolled && !mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Subtle Red Center Glow on Border */}
        {scrolled && !mobileMenuOpen && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
        )}

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between w-full h-full relative z-[101]">
          
          {/* Left - Geometric Logo Component */}
          <button 
            onClick={() => scrollTo("#hero")} 
            className="group flex items-center gap-3 outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-600/20 group-hover:border-red-500/50 transition-all duration-500 group-hover:rotate-[15deg] shadow-lg">
              <span className="text-white group-hover:text-red-500 font-black font-mono tracking-tighter transition-colors text-lg">SD</span>
            </div>
            <span className="text-white font-extrabold tracking-widest text-sm uppercase hidden sm:block pointer-events-none drop-shadow-md shrink-0">
               Shivani<span className="text-red-600 glow-text">.</span>
            </span>
          </button>

          {/* Center - Minimalist Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 shrink-0">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="relative group outline-none py-2"
              >
                <span className="text-[11px] font-black text-white/50 group-hover:text-white uppercase tracking-[0.25em] transition-colors duration-300 drop-shadow-sm">
                  {item.label}
                </span>
                {/* Hover Underline Tiny Dot */}
                <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              </button>
            ))}
          </div>

          {/* Right - Hire Me Button & Mobile Hamburger */}
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={() => scrollTo("#contact")} 
              className="hidden lg:flex items-center justify-center px-8 py-3 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors outline-none shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              Hire Me
            </button>

            {/* Mobile Hamburger toggle */}
            <button 
              className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-red-500 hover:border-red-500/50 transition-colors active:scale-95 outline-none shadow-md backdrop-blur-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Vertical Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            // Fixes absolute screen constraints with 100dvh and allows content scrolling
            className="fixed inset-0 w-full h-[100dvh] z-[90] bg-black/95 backdrop-blur-2xl flex flex-col px-6 overflow-y-auto overflow-x-hidden pt-28 pb-10"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 w-full max-w-sm mx-auto">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                  onClick={() => scrollTo(item.href)}
                  className="group flex flex-col items-center w-full outline-none py-1"
                >
                  {/* Resized typography to naturally fit on small vertical windows like iPhone SE */}
                  <span className="text-[2.2rem] sm:text-5xl font-black text-white/50 group-hover:text-white group-active:text-red-500 transition-colors duration-300 uppercase tracking-tighter">
                    {item.label}
                  </span>
                  <span className="h-1 w-0 group-hover:w-16 group-active:bg-red-500 bg-red-600 rounded-full mt-1.5 transition-all duration-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.05, duration: 0.4 }}
                onClick={() => scrollTo("#contact")}
                className="mt-8 px-8 py-4 rounded-xl bg-white text-black font-black uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-red-600 hover:text-white transition-all duration-300 shadow-xl mx-auto w-full outline-none active:scale-95"
              >
                Hire Me Now
              </motion.button>
            </div>
            
            {/* Minimalist Watermark on bottom of mobile menu */}
            <div className="mt-auto pt-10 flex justify-center opacity-30 pointer-events-none w-full relative z-10">
              <span className="font-mono tracking-widest text-[10px] uppercase text-white/50">
                Crafted by <span className="text-red-500">Shivani</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
