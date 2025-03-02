import gsap from "gsap";
import { MutableRefObject } from "react";

export const animatePixelatedImages = (
  canvas: HTMLCanvasElement,
  opacityRef: MutableRefObject<number>,
  imageLoaded: MutableRefObject<boolean>,
  src: string,
  width: number,
  height: number
) => {
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

    // Create an offscreen canvas for pixel sampling
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");
    if (!offscreenCtx) return;

    offscreenCanvas.width = width;
    offscreenCanvas.height = height;
    offscreenCtx.drawImage(img, 0, 0, width, height);

    const imageData = offscreenCtx.getImageData(0, 0, width, height);
    const data = imageData.data;

    // Set up main canvas
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    // Create pixel array
    const pixels: {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      color: string;
    }[] = [];

    // Added more pixels for better resolution
    const step = 6;
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const i = (y * width + x) * 4;
        if (data[i + 3] > 0) {
          const color = `rgba(${data[i]}, ${data[i + 1]}, ${data[i + 2]}, ${
            data[i + 3] / 255
          })`;
          pixels.push({
            x: Math.random() * width,
            y: Math.random() * height,
            targetX: x,
            targetY: y,
            color: color,
          });
        }
      }
    }

    gsap.to(canvas, {
      opacity: 1,
      duration: 0.1,
      delay: 0.2,
      onComplete: () => {
        let progress = 0;
        const duration = 2;
        const startTime = Date.now();

        // Animate opacity
        gsap.to(opacityRef, {
          current: 1,
          duration: duration,
          ease: "power2.inOut",
        });

        const animate = () => {
          const currentTime = Date.now();
          progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

          ctx.clearRect(0, 0, width, height);

          // Draw the final image with increasing opacity near the end of animation
          if (progress > 0.8) {
            const finalImageOpacity = (progress - 0.8) * 5; // Scale 0.8-1.0 to 0-1
            ctx.globalAlpha = finalImageOpacity * opacityRef.current;
            ctx.drawImage(img, 0, 0, width, height);
            ctx.globalAlpha = 1;
          }

          // Draw scattered pixels with opacity (fading out as final image fades in)
          pixels.forEach((pixel) => {
            const easeProgress = gsap.parseEase("power3.inOut")(progress);
            const currentX = pixel.x + (pixel.targetX - pixel.x) * easeProgress;
            const currentY = pixel.y + (pixel.targetY - pixel.y) * easeProgress;

            // Fade out pixels as final image fades in
            const pixelOpacity = progress > 0.8 ? 1 - (progress - 0.8) * 5 : 1;

            const [r, g, b] = pixel.color.match(/\d+/g)?.map(Number) || [
              0, 0, 0,
            ];
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${
              opacityRef.current * pixelOpacity
            })`;
            ctx.fillRect(currentX, currentY, step, step);
          });

          // Glitch effects only in the early stages
          if (progress < 0.6) {
            for (let i = 0; i < 10; i++) {
              const x = Math.random() * width;
              const y = Math.random() * height;
              ctx.fillStyle = `rgba(0, 195, 255, ${
                0.1 * (1 - progress) * opacityRef.current
              })`;
              ctx.fillRect(x, y, Math.random() * 20, Math.random() * 2);
            }
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Ensure final state is perfect
            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = opacityRef.current;
            ctx.drawImage(img, 0, 0, width, height);
            ctx.globalAlpha = 1;
          }
        };

        animate();
      },
    });
  };
};
