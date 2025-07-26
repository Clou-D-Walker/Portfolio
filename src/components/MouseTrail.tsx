import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)',
        filter: 'blur(8px)',
        opacity: 0.6,
      }}
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    />
  );
};

export default MouseTrail;