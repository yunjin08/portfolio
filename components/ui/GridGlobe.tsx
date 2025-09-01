"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedGlobe = () => {
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  
  // Sample data for connections between cities
  const connections = [
    { from: "San Francisco", to: "New York", color: colors[0] },
    { from: "London", to: "Tokyo", color: colors[1] },
    { from: "Sydney", to: "Hong Kong", color: colors[2] },
    { from: "Paris", to: "Berlin", color: colors[0] },
    { from: "Mumbai", to: "Singapore", color: colors[1] },
    { from: "São Paulo", to: "Mexico City", color: colors[2] },
    { from: "Cairo", to: "Istanbul", color: colors[0] },
    { from: "Moscow", to: "Beijing", color: colors[1] },
    { from: "Rio de Janeiro", to: "Buenos Aires", color: colors[2] },
    { from: "Toronto", to: "Vancouver", color: colors[0] },
  ];

  return (
    <div className="flex-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        
        {/* Main Globe Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Globe Background */}
          <motion.div
            className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 shadow-2xl"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "radial-gradient(circle at 30% 30%, #1e40af, #1e3a8a, #1e1b4b)",
            }}
          >
            {/* Grid Lines */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`horizontal-${i}`}
                  className="absolute w-full h-px bg-white/20"
                  style={{ top: `${(i + 1) * 12.5}%` }}
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`vertical-${i}`}
                  className="absolute h-full w-px bg-white/20"
                  style={{ left: `${(i + 1) * 12.5}%` }}
                />
              ))}
            </div>

            {/* Connection Points */}
            {connections.map((connection, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: connection.color,
                    left: `${20 + (index * 8) % 60}%`,
                    top: `${30 + (index * 12) % 40}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <motion.div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: connection.color,
                    left: `${60 + (index * 6) % 30}%`,
                    top: `${60 + (index * 8) % 30}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3 + 0.5,
                  }}
                />
              </motion.div>
            ))}

            {/* Simple Connection Lines */}
            {connections.map((connection, index) => (
              <svg
                key={`line-${index}`}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: 1 }}
              >
                <motion.line
                  x1={`${20 + (index * 8) % 60}`}
                  y1={`${30 + (index * 12) % 40}`}
                  x2={`${60 + (index * 6) % 30}`}
                  y2={`${60 + (index * 8) % 30}`}
                  stroke={connection.color}
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: index * 0.2 }}
                />
              </svg>
            ))}

            {/* Simple Floating Particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Simple Atmosphere Glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Floating Info Cards */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-white text-sm font-medium">Global Connections</p>
            <p className="text-white/70 text-xs">Real-time data flow</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-white text-sm font-medium">Live Network</p>
            <p className="text-white/70 text-xs">Active connections</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGlobe;
