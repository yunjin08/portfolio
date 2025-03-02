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

    canvas.width = width;
    canvas.height = height;

    // Create pixel array
    const pixels: {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      color: string;
    }[] = [];

    // Draw image once to get pixel data
    ctx.drawImage(img, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    // Sample pixels (adjust step for performance)
    const step = 4; // Increase for fewer pixels, decrease for more detail
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const i = (y * width + x) * 4;
        if (data[i + 3] > 0) {
          // If pixel is not transparent
          const color = `rgba(${data[i]}, ${data[i + 1]}, ${data[i + 2]}, ${
            data[i + 3] / 255
          })`;
          pixels.push({
            x: Math.random() * width, // Start at random position
            y: Math.random() * height,
            targetX: x, // Where pixel should end up
            targetY: y,
            color: color,
          });
        }
      }
    }

    gsap.to(canvas, {
      opacity: 1,
      duration: 0.1,
      delay: 0.6,
      onComplete: () => {
        let progress = 0;
        const duration = 2; // Animation duration in seconds
        const startTime = Date.now();

        const animate = () => {
          const currentTime = Date.now();
          progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

          ctx.clearRect(0, 0, width, height);

          // Draw scattered pixels
          pixels.forEach((pixel) => {
            const easeProgress = gsap.parseEase("power2.inOut")(progress);

            // Calculate current position
            const currentX = pixel.x + (pixel.targetX - pixel.x) * easeProgress;
            const currentY = pixel.y + (pixel.targetY - pixel.y) * easeProgress;

            // Draw pixel
            ctx.fillStyle = pixel.color;
            ctx.fillRect(currentX, currentY, step, step);
          });

          // Add some glitch effects during formation
          if (progress < 0.8) {
            for (let i = 0; i < 10; i++) {
              const x = Math.random() * width;
              const y = Math.random() * height;
              ctx.fillStyle = `rgba(0, 195, 255, ${0.1 * (1 - progress)})`;
              ctx.fillRect(x, y, Math.random() * 20, Math.random() * 2);
            }
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Final image
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
          }
        };

        animate();
      },
    });
  };
};
