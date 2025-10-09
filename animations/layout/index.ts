import gsap from "gsap";
import { fadeInConfig, scrollTriggerConfig, initialStates } from "./config";

// Helper function to create scroll-triggered animations
const createScrollAnimation = (
  selector: string,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  customTrigger?: string,
  customScrollConfig?: Partial<typeof scrollTriggerConfig>
) => {
  return gsap.fromTo(selector, fromVars, {
    ...fadeInConfig,
    ...toVars,
    scrollTrigger: {
      ...scrollTriggerConfig,
      ...customScrollConfig,
      trigger: customTrigger || selector,
    },
  });
};

// Hero animations
export const animateHero = () => {
  gsap.fromTo(
    ".borderImg",
    {
      clipPath: "inset(0 100% 0 0)", // Fully hidden
      opacity: 1,
    },
    {
      clipPath: "inset(0 0% 0 0)", // Fully revealed
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
      delay: 0.1,
    }
  );
};

export const animateAbout = () => {
  createScrollAnimation(".bento-grid-item", initialStates.slideUp, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ...fadeInConfig,
  });

  createScrollAnimation(".textAnim", initialStates.fadeIn, {
    opacity: 1,
    stagger: 0.2,
    ...fadeInConfig,
  });
};

export const animateRecentProjects = () => {
  createScrollAnimation(".portfolio-items", initialStates.slideUp, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ...fadeInConfig,
  }, ".textAnimProjects", { start: "top 150%", toggleActions: "play none none none" });

  createScrollAnimation(".textAnimProjects", initialStates.fadeIn, {
    opacity: 1,
    stagger: 0.2,
    ...fadeInConfig,
  }, ".textAnimProjects", { start: "top 150%", toggleActions: "play none none none" });
};

export const animateEducation = () => {
  createScrollAnimation(".cardsAnim", initialStates.fadeIn, {
    opacity: 1,
    duration: 1.3,
    stagger: 0.4,
    delay: -2,
  });

  createScrollAnimation(
    ".headingAnimEdu",
    initialStates.fadeIn,
    {
      opacity: 1,
      stagger: 0.2,
      ...fadeInConfig,
    },
    undefined,
    { start: "top 95%" }
  );
  createScrollAnimation(".hackathon-img", initialStates.slideLeft, {
    opacity: 1,
    x: 0,
    scale: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.2,
    stagger: {
      amount: 0.3,
      from: "start",
    },
  });
};

// Experience animations
export const animateExperience = () => {
  createScrollAnimation(
    ".card-images",
    initialStates.slideLeft,
    {
      opacity: 1,
      x: 0,
      scale: 1,
      delay: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      stagger: {
        amount: 1,
        from: "start",
      },
    },
    ".hackathon-img"
  );
  createScrollAnimation(
    ".card-title",
    initialStates.fadeIn,
    {
      opacity: 1,
      duration: 2,
      delay: 0.2,
    },
    undefined,
    { start: "top 95%" }
  );

  createScrollAnimation(
    ".card-desc",
    initialStates.fadeIn,
    {
      opacity: 1,
      duration: 5,
      stagger: 0.2,
      delay: 0.4,
    },
    undefined,
    { start: "top 85%" }
  );
};

// Certificates animations
export const animateCertificates = () => {
  createScrollAnimation(
    ".card-images",
    initialStates.slideLeft,
    {
      opacity: 1,
      x: 0,
      scale: 1,
      delay: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      stagger: {
        amount: 1,
        from: "start",
      },
    },
    ".hackathon-img"
  );
  createScrollAnimation(
    ".card-title",
    initialStates.fadeIn,
    {
      opacity: 1,
      duration: 2,
      delay: 0.2,
    },
    undefined,
    { start: "top 95%" }
  );

  createScrollAnimation(
    ".card-desc",
    initialStates.fadeIn,
    {
      opacity: 1,
      duration: 5,
      stagger: 0.2,
      delay: 0.4,
    },
    undefined,
    { start: "top 85%" }
  );

  createScrollAnimation(
    ".card-skills",
    initialStates.slideUp,
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.1,
      delay: 0.6,
    },
    undefined,
    { start: "top 90%" }
  );
};
