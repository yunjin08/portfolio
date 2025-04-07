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
  
  // Memoize the words array to prevent unnecessary splits
  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    const animation = animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );

    return () => animation.stop(); // Cleanup animation on unmount
  }, [animate, wordsArray]); // Only re-run if wordsArray changes

  const renderWords = useMemo(() => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className={cn(
            "opacity-30",
            idx > 2 ? "text-primary" : "text-white"
          )}
          style={{ willChange: "opacity" }} // Hint for smoother animations
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
          {renderWords}
        </div>
      </div>
    </div>
  );
};
