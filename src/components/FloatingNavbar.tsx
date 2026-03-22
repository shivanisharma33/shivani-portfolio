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
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Keep navbar visible if mobile menu is open, otherwise hide on scroll down
      if (current > 100 && current > lastScroll && !mobileMenuOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, mobileMenuOpen]);

  // Close menu when window resizes to desktop to prevent state lock bugs
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 100; // Adjust for navbar height clearance
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          // CRITICAL FIX: lg:right-auto prevents CSS conflicts on desktop which break the layout.
          className="fixed top-4 lg:top-6 left-4 right-4 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:w-max z-[100] rounded-2xl lg:rounded-[2.5rem] border border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 lg:px-8 lg:py-3 relative z-20 w-full">
            <button onClick={() => scrollTo("#hero")} className="text-red-500 font-black text-xl lg:text-3xl font-mono tracking-tighter hover:scale-105 transition-transform shrink-0">
              &lt;SD/&gt;
            </button>
            
            {/* Desktop Links (Hidden on phones & tablets) */}
            <div className="hidden lg:flex items-center gap-1 ml-16 shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="px-5 py-2.5 text-sm font-bold text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10 font-mono tracking-widest uppercase outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle (Visible on phones & tablets) */}
            <button 
              className="lg:hidden p-2 -mr-2 text-white/80 hover:text-white transition-colors active:scale-95 shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Expandable Links */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden relative z-10 w-full"
              >
                <div className="flex flex-col items-center px-4 pb-6 pt-2 w-full">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                  
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                      onClick={() => scrollTo(item.href)}
                      className="w-full py-4 text-sm font-bold text-white/60 hover:text-red-500 hover:bg-white/5 transition-all rounded-xl font-mono tracking-widest uppercase active:scale-[0.98]"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full flex justify-center mt-6"
                  >
                    <div className="w-12 h-1.5 bg-red-600 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavbar;
