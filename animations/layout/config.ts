// Common animation configurations
export const fadeInConfig = {
  duration: 1,
  ease: "power3.out",
};

export const scrollTriggerConfig = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
};

// Common initial states
export const initialStates = {
  fadeIn: { opacity: 0 },
  slideUp: { y: 50, opacity: 0 },
  slideLeft: {
    opacity: 0,
    x: -100,
    scale: 0.8,
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  },
};
