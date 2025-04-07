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
  if (!canvas || imageLoaded.current) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  gsap.set(canvas, { opacity: 0 });

  const img = new Image();
  img.src = src;
  img.crossOrigin = "Anonymous";

  img.onload = () => {
    imageLoaded.current = true;

    // Offscreen rendering (dispose after use)
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");
    if (!offscreenCtx) return;

    offscreenCanvas.width = width;
    offscreenCanvas.height = height;
    offscreenCtx.drawImage(img, 0, 0, width, height);

    const imageData = offscreenCtx.getImageData(0, 0, width, height);
    const data = imageData.data;

    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    // Optimized pixel storage (typed arrays for better performance)
    const step = 6;
    const pixels: {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      color: string;
    }[] = [];

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const i = (y * width + x) * 4;
        if (data[i + 3] > 0) {
          pixels.push({
            x: Math.random() * width,
            y: Math.random() * height,
            targetX: x,
            targetY: y,
            color: `rgba(${data[i]}, ${data[i + 1]}, ${data[i + 2]}, ${data[i + 3] / 255})`,
          });
        }
      }
    }

    // GSAP Timeline for better control
    const tl = gsap.timeline({ onComplete: renderAnimation });
    tl.to(canvas, { opacity: 1, duration: 0.1 });
    tl.to(opacityRef, { current: 1, duration: 2, ease: "power2.inOut" }, 0);

    function renderAnimation() {
      let progress = 0;
      const duration = 2;
      const startTime = Date.now();

      const animate = () => {
        progress = Math.min((Date.now() - startTime) / (duration * 1000), 1);
        ctx?.clearRect(0, 0, width, height);

        // Draw final image (fade in after 80%)
        if (progress > 0.8 && ctx) {
          ctx.globalAlpha = (progress - 0.8) * 5 * opacityRef.current;
          ctx.drawImage(img, 0, 0, width, height);
          ctx.globalAlpha = 1;
        }

        // Draw pixels (optimized loop)
        for (let i = 0; i < pixels.length; i++) {
          const p = pixels[i];
          const easeProgress = gsap.parseEase("power3.inOut")(progress);
          const x = p.x + (p.targetX - p.x) * easeProgress;
          const y = p.y + (p.targetY - p.y) * easeProgress;
          const opacity = progress > 0.8 ? 1 - (progress - 0.8) * 5 : 1;
          if (ctx) {
            ctx.fillStyle = `${p.color.slice(0, -1)}, ${opacity * opacityRef.current})`;
            ctx.fillRect(x, y, step, step);
          }
        }

        // Glitch effect (early stage only)
        if (progress < 0.6 && ctx) {
          ctx.fillStyle = `rgba(0, 195, 255, ${0.1 * (1 - progress) * opacityRef.current})`;
          for (let i = 0; i < 10; i++) {
            ctx.fillRect(
              Math.random() * width,
              Math.random() * height,
              Math.random() * 20,
              Math.random() * 2
            );
          }
        }

        if (progress < 1) requestAnimationFrame(animate);
        else {
          if (ctx) {
            ctx.globalAlpha = opacityRef.current;
            ctx.drawImage(img, 0, 0, width, height);
          }
        }
      };

      animate();
    }

    // Cleanup
    offscreenCanvas.width = 0; // Free memory
  };
};