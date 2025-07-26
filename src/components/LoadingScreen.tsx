import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <span className="text-2xl font-bold font-heading text-white">SS</span>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-primary/30 border-t-primary"
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-heading font-bold gradient-text">
            Surya Sujit
          </h2>
          <p className="text-sm text-muted-foreground font-body">
            Loading portfolio...
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-64 mx-auto"
        >
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-body">
            {progress}%
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;