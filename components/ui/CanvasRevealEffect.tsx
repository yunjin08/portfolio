"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  const primaryColor = colors[0] || [0, 255, 255];
  const rgbColor = `rgb(${primaryColor[0]}, ${primaryColor[1]}, ${primaryColor[2]})`;

  // Create a grid of dots
  const dots = [];
  const gridSize = 20;
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const distance = Math.sqrt((i - gridSize/2) ** 2 + (j - gridSize/2) ** 2);
      const maxDistance = Math.sqrt((gridSize/2) ** 2 + (gridSize/2) ** 2);
      const normalizedDistance = distance / maxDistance;
      
      dots.push({
        x: (i / gridSize) * 100,
        y: (j / gridSize) * 100,
        delay: normalizedDistance * 2 * animationSpeed,
        opacity: opacities[Math.floor(normalizedDistance * opacities.length)] || 0.5,
      });
    }
  }

  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full relative overflow-hidden">
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: rgbColor,
              opacity: dot.opacity,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: dot.opacity }}
            transition={{
              duration: 0.5,
              delay: dot.delay,
              ease: "easeOut",
            }}
          />
        ))}
        
        {/* Additional animated elements for visual interest */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-current opacity-20" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full border border-current opacity-20" />
          <div className="absolute bottom-1/4 left-1/2 w-16 h-16 rounded-full border border-current opacity-20" />
        </motion.div>
      </div>
      
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

export default CanvasRevealEffect;

