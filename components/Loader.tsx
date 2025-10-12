"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

const Loader = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black-100 backdrop-blur-sm">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <m.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <div className="w-full max-w-md px-4 text-center relative z-10">
          {/* Logo/Icon with rotation */}
          <m.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <m.div
                className="w-16 h-16 border-4 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <m.div
                className="absolute inset-2 border-4 border-primary rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </m.div>

          {/* Loading Text with Typewriter Effect */}
          <m.div
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hey there!{" "}
            <m.span
              aria-label="Waving hand"
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 20, 0, -20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="inline-block origin-bottom"
            >
              👋
            </m.span>
          </m.div>

          {/* Enhanced Progress Bar */}
          <div className="relative">
            {/* Background track */}
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              {/* Animated progress fill */}
              <m.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatDelay: 0.5 }}
              >
                {/* Shimmer effect */}
                <m.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </m.div>
            </div>
          </div>

          {/* Loading dots animation */}
          <m.div
            className="flex justify-center space-x-1 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <m.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Loader;