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

  // Lock background scrolling on mobile when menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 w-full ${
          scrolled && !mobileMenuOpen 
            ? "bg-black/90 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.9)] border-b border-red-900/30 py-3" 
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-end lg:justify-center w-full h-full relative z-[101]">
          
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
                <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              </button>
            ))}
          </div>

          {/* Right - Desktop Hire Me Button & Mobile Hamburger */}
          <div className="flex items-center gap-4 shrink-0 absolute right-5 sm:right-8 md:right-12">
            <button 
              onClick={() => scrollTo("#contact")} 
              className="hidden lg:flex items-center justify-center px-8 py-3 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors outline-none shadow-lg"
            >
              Hire Me
            </button>

            {/* Mobile Hamburger toggle */}
            <button 
              className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white active:bg-white/10 transition-colors outline-none shadow-sm backdrop-blur-md relative z-[105]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Basic, Guaranteed Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex flex-col px-6 pt-24 pb-10 overflow-y-auto w-full h-[100vh]"
          >
            {/* Simple Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[400px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto relative z-10">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  onClick={() => scrollTo(item.href)}
                  className="group flex flex-col items-center w-full outline-none py-2"
                >
                  <span className="text-3xl sm:text-4xl font-black text-white/50 group-hover:text-white active:text-red-500 transition-colors uppercase tracking-tighter">
                    {item.label}
                  </span>
                  <span className="h-1 w-0 group-hover:w-16 group-active:w-20 bg-red-600 rounded-full mt-2 transition-all duration-300" />
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollTo("#contact")}
                className="mt-6 px-8 py-4 rounded-xl bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-red-600 hover:text-white transition-all shadow-lg mx-auto w-full outline-none active:scale-95"
              >
                Hire Me Now
              </motion.button>
            </div>
            
            <div className="mt-auto pt-8 flex justify-center opacity-30 pointer-events-none w-full relative z-10">
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
