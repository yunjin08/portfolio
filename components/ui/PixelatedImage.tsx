"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const PixelatedImage = ({ src, width = 500, height = 500, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageLoaded = useRef(false);
  const opacityRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    gsap.set(canvas, { opacity: 0 });

    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      if (imageLoaded.current) return;
      imageLoaded.current = true;

      canvas.width = width;
      canvas.height = height;

      // Start with opacity 0
      gsap.to(canvas, {
        opacity: 1,
        duration: 0.1,
        delay: 1,
        onComplete: () => {
          let frame = 0;
          let isAnimating = true;

          // Animate opacity from 0 to 1 over the duration of the glitch
          gsap.to(opacityRef, {
            current: 1,
            duration: 2,
            ease: "power1.inOut",
          });

          const animate = () => {
            if (!isAnimating) return;
            frame++;

            // Clear and draw base image with current opacity
            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = opacityRef.current;
            ctx.drawImage(img, 0, 0, width, height);
            ctx.globalAlpha = 1;

            // Major glitch blocks
            for (let i = 0; i < 30; i++) {
              const x = Math.random() * width;
              const y = Math.random() * height;
              const sw = Math.random() * width * 0.5;
              const sh = Math.random() * height * 0.2;

              ctx.globalAlpha = opacityRef.current;
              ctx.drawImage(
                canvas,
                x,
                y,
                sw,
                sh,
                x + (Math.random() * 50 - 25),
                y + (Math.random() * 20 - 10),
                sw,
                sh
              );

              // Blue color overlays
              if (frame % 2 === 0) {
                const blueShade = Math.random() * 155 + 100; // Range from 100-255 for blue
                ctx.fillStyle = `rgba(0, ${
                  Math.random() * 150
                }, ${blueShade}, ${0.2 * opacityRef.current})`;
                ctx.fillRect(x, y, sw, sh);
              }
            }

            // Blue scan lines
            if (Math.random() < 0.8) {
              for (let i = 0; i < 3; i++) {
                const lineY = Math.random() * height;
                ctx.fillStyle = `rgba(0, 195, 255, ${
                  0.4 * opacityRef.current
                })`;
                ctx.fillRect(0, lineY, width, 5);
              }
            }

            // Blue digital noise
            for (let i = 0; i < 500; i++) {
              const x = Math.random() * width;
              const y = Math.random() * height;
              const size = Math.random() * 3;
              const blueNoise = Math.random() * 155 + 100;
              ctx.fillStyle = `rgba(0, ${Math.random() * 150}, ${blueNoise}, ${
                Math.random() * 0.2 * opacityRef.current
              })`;
              ctx.fillRect(x, y, size, size);
            }

            // Random color blocks with increasing opacity
            if (Math.random() < 0.3) {
              const blockX = Math.random() * width;
              const blockWidth = width * 0.2;
              ctx.fillStyle = `rgba(0, ${Math.random() * 255}, ${
                Math.random() * 255
              }, ${0.5 * opacityRef.current})`;
              ctx.fillRect(blockX, 0, blockWidth, height);
            }

            // Occasional full-width glitch
            if (Math.random() < 0.1) {
              const sliceY = Math.random() * height;
              const sliceHeight = height * 0.1;
              ctx.globalAlpha = opacityRef.current;
              ctx.drawImage(
                canvas,
                0,
                sliceY,
                width,
                sliceHeight,
                Math.random() * 50 - 25,
                sliceY,
                width,
                sliceHeight
              );
            }

            ctx.globalAlpha = 1;
            requestAnimationFrame(animate);
          };

          animate();

          // Stop glitch effect after 2 seconds
          setTimeout(() => {
            isAnimating = false;
            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = 1;
            ctx.drawImage(img, 0, 0, width, height);
          }, 2000);
        },
      });
    };

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
