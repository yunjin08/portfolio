"use client";
import { useEffect, useMemo } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    // Immediate visibility for LCP
    animate(
      "span",
      { opacity: 1 },
      { duration: 0.5, delay: stagger(0.05) } // Much faster animation
    );
  }, [animate, wordsArray]);

  const renderWords = useMemo(() => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className={cn(
            "opacity-70", // Start partially visible for LCP
            idx > 2 ? "text-primary" : "text-white"
          )}
          animate={{ opacity: 1 }} // Animate to full visibility
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          style={{ willChange: "opacity" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  ), [scope, wordsArray]);

  return (
    <div className={cn("font-bold inline-block w-full", className)}>
      <div className="my-4">
        <div className="text-white leading-snug tracking-wide">
          {/* SSR fallback for better LCP */}
          <div className="sr-only">{words}</div>
          {renderWords}
        </div>
      </div>
    </div>
  );
};