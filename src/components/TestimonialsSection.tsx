import { motion } from "framer-motion";

const testimonials = [
  { name: "Sarah Johnson", role: "CEO, TechVentures", text: "Alex delivered an exceptional product that exceeded our expectations. The attention to detail and smooth animations were outstanding." },
  { name: "Mike Chen", role: "CTO, StartupHub", text: "One of the most talented frontend developers I've worked with. The UI he built was both beautiful and performant." },
  { name: "Emily Davis", role: "Product Manager, DesignCo", text: "Alex has an incredible eye for design and can translate complex requirements into elegant, user-friendly interfaces." },
  { name: "James Wilson", role: "Founder, WebAgency", text: "Working with Alex was a game-changer. He brought our vision to life with stunning animations and pixel-perfect execution." },
  { name: "Lisa Park", role: "Lead Designer, CreativeStudio", text: "Alex bridges the gap between design and development perfectly. Every interaction feels crafted and intentional." },
  { name: "David Brown", role: "Director, InnovateTech", text: "The 3D elements and animations Alex created for our platform are next-level. Users love the interactive experience." },
];

const TestimonialsSection = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            What people <span className="text-gradient-red">say</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-6 animate-scroll-infinite" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <div
              key={i}
              className="glass-card p-6 w-[350px] flex-shrink-0 hover:glow-border transition-all duration-300"
            >
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-primary font-mono text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
