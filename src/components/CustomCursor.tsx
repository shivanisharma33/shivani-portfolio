import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, [data-cursor-hover]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full"
        animate={{
          x: position.x - (isHovering ? 24 : 10),
          y: position.y - (isHovering ? 24 : 10),
          width: isHovering ? 48 : 20,
          height: isHovering ? 48 : 20,
          opacity: isHovering ? 0.4 : 0.7,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          background: "radial-gradient(circle, hsl(0 100% 55% / 0.8), transparent 70%)",
          boxShadow: "0 0 20px hsl(0 100% 55% / 0.4)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-1 h-1 rounded-full bg-primary"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;
