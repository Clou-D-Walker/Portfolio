import { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;