import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Globe, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const socials = [
    { name: "GitHub", url: "https://github.com/shivani-dixit", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/shivani-dixit", icon: Linkedin },
    { name: "Email", url: "mailto:dixitshivi130@gmail.com", icon: Mail },
    { name: "Portfolio", url: "https://fullstack-developer-portfolio-rho.vercel.app/", icon: Globe },
  ];

  return (
    <section id="contact" className="py-32 relative bg-black overflow-hidden" ref={ref}>
      {/* Premium Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle Glow Orb perfectly aligned for bottom section focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brutalist layout splitting contact text and form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-8 backdrop-blur-md w-fit">
              <span className="font-mono text-red-500 text-xs tracking-widest uppercase font-medium">
                // Get In Touch
              </span>
            </div>
            
            <h2 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
              Let's <br/><span className="text-red-600 glow-text">Connect</span>
            </h2>
            
            <div className="h-1.5 w-32 bg-red-600 rounded-full mb-12" />

            <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed max-w-md mb-12">
              Have a project in mind? Looking to hire a passionate Front-end Developer? Let's build something extraordinary together.
            </p>

            <div className="flex flex-col gap-8 mb-16">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-colors duration-500 shadow-lg">
                  <Mail className="w-6 h-6 text-white/50 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-mono mb-1">Email</span>
                  <a href="mailto:dixitshivi130@gmail.com" className="text-xl sm:text-2xl text-white font-medium hover:text-red-500 transition-colors">dixitshivi130@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-colors duration-500 shadow-lg">
                  <Phone className="w-6 h-6 text-white/50 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-mono mb-1">Phone</span>
                  <a href="tel:7300893305" className="text-xl sm:text-2xl text-white font-medium hover:text-red-500 transition-colors">+91 7300893305</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-colors duration-500 shadow-lg">
                  <MapPin className="w-6 h-6 text-white/50 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-mono mb-1">Location</span>
                  <span className="text-xl sm:text-2xl text-white font-medium">Saharanpur, U.P, India</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-red-500/50 hover:bg-red-500/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(220,38,38,0.2)]"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - The Form */}
          <motion.div
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             viewport={{ once: true }}
             className="relative flex flex-col justify-center mt-12 lg:mt-0"
          >
             <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-[3rem] backdrop-blur-xl" />
             
             <form className="relative z-10 p-8 sm:p-12 flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-4xl font-extrabold text-white tracking-tight mb-2">Send a Message</h3>
                <p className="text-white/40 font-mono text-sm tracking-widest uppercase mb-4">I reply within 24 hours</p>
                
                {/* Floating Label Input - Name */}
                <div className="relative pt-6">
                  <label htmlFor="name" className={`absolute left-0 transition-all duration-300 font-mono uppercase tracking-widest pointer-events-none ${focused === 'name' || formData.name ? 'top-0 text-red-500 text-xs font-bold' : 'top-10 text-white/40 text-sm'}`}>
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-medium text-xl focus:outline-none focus:border-red-500 transition-colors" 
                  />
                </div>

                {/* Floating Label Input - Email */}
                <div className="relative pt-6">
                  <label htmlFor="email" className={`absolute left-0 transition-all duration-300 font-mono uppercase tracking-widest pointer-events-none ${focused === 'email' || formData.email ? 'top-0 text-red-500 text-xs font-bold' : 'top-10 text-white/40 text-sm'}`}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-medium text-xl focus:outline-none focus:border-red-500 transition-colors" 
                  />
                </div>

                {/* Floating Label Textarea - Message */}
                <div className="relative pt-6 mt-4">
                  <label htmlFor="message" className={`absolute left-0 transition-all duration-300 font-mono uppercase tracking-widest pointer-events-none ${focused === 'message' || formData.message ? 'top-0 text-red-500 text-xs font-bold' : 'top-10 text-white/40 text-sm'}`}>
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-medium text-xl focus:outline-none focus:border-red-500 transition-colors resize-none" 
                  />
                </div>

                <button
                  className="mt-8 flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-white text-black font-black hover:bg-red-600 hover:text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 group/btn uppercase tracking-widest text-lg"
                >
                  Shoot Message 
                  <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
             </form>
          </motion.div>
        </div>

        {/* Footer Area */}
        <div className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 pb-10">
          <p className="text-white/40 text-sm font-mono tracking-widest uppercase text-center md:text-left">
            © 2026 Shivani Dixit. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm font-mono tracking-widest uppercase cursor-default">
            Crafted with <span className="text-red-500 px-1 text-xl animate-pulse">❤</span> & Code
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
