import React, { useEffect } from "react";
import gsap from "gsap";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  useEffect(() => {
    gsap.to(".magicbtn", {
      opacity: 1,
      duration: 4,
      delay: 1.6,
      ease: "power2.out",
    });
  }, []);
  return (
    <button
      className="relative magicbtn opacity-0 inline-flex h-8 sm:h-10 md:h-12 w-full md:w-60 mt-4 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00abf0_0%,#081b29_50%,#173e56_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-3 sm:px-5 lg:px-7 responsive-text font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
