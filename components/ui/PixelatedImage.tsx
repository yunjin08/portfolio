"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { animatePixelatedImages } from "@/animations/features/pixelatedImages";

const PixelatedImage = ({
  src,
  width = 500,
  height = 500,
  className,
}: {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageLoaded = useRef(false);
  const opacityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      animatePixelatedImages(
        canvas,
        opacityRef,
        imageLoaded,
        src,
        width,
        height
      );
    }

    return () => {
      imageLoaded.current = false;
    };
  }, [src, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full", className)}
      width={width}
      height={height}
    />
  );
};

export default PixelatedImage;
