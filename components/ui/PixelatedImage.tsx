"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const PixelatedImage = ({ src, width = 500, height = 500, className }) => {
  const canvasRef = useRef(null);
  const imgRef = useRef(new Image());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = imgRef.current;

    img.src = src;
    img.crossOrigin = "Anonymous"; // Avoid CORS issues if using external images

    img.onload = () => {
      let pixelSize = 50; // Start with large pixels

      // GSAP animation to reduce pixel size
      gsap.to(
        { pixelSize: 50 },
        {
          pixelSize: 1,
          duration: 2,
          delay: -0.2,
          ease: "power2.out",
          onUpdate: function () {
            drawPixelatedImage(
              ctx,
              img,
              width,
              height,
              this.targets()[0].pixelSize
            );
          },
        }
      );
    };
  }, [src, width, height]);

  const drawPixelatedImage = (ctx, img, w, h, pixelSize) => {
    ctx.clearRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = false;

    // Draw small version of the image
    const scaledW = Math.ceil(w / pixelSize);
    const scaledH = Math.ceil(h / pixelSize);
    ctx.drawImage(img, 0, 0, scaledW, scaledH);
  };

  return (
    <canvas
      className={cn("h-full w-full", className)}
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default PixelatedImage;
