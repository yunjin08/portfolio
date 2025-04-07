"use client";

import { m } from "framer-motion"; // Using m instead of motion for better performance

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black-100/80 backdrop-blur-sm">
      <div className="w-full max-w-md px-4 text-center">
        {/* Loading Text with Waving Hand - Reduced motion for accessibility */}
        <m.div 
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Hey there! Just a moment...{" "}
          <m.span
            aria-label="Waving hand"
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 20, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="inline-block origin-bottom" // Better transform origin
          >
            👋
          </m.span>
        </m.div>
        
        {/* Optional progress indicator */}
        <m.div 
          className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 3,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <m.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        </m.div>
      </div>
    </div>
  );
};

export default Loader;
