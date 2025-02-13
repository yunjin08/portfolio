import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import gsap from "gsap";
import { useEffect } from "react";
import PixelatedImage from "./ui/PixelatedImage";

const Hero = () => {
  useEffect(() => {
    gsap.to(".description", {
      opacity: 1,
      duration: 3,
      ease: "power2.inOut",
    });
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
  }, []);

  return (
    <div className="pb-20 overflow-hidden">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#389fc8"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#112e42"
        />
        <Spotlight
          className="left-full top-20 h-[80vh] w-[50vw]"
          fill="#00abf0"
        />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center lg:pt-0 items-center gap-5 lg:flex-row flex-col-reverse relative h-[100svh] z-10">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Crafting Seamless User Experiences"
            className="text-center text-3xl lg:text-4xl xl:text-5xl"
          />

          <p className="text-center description opacity-0 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl xl:text-3xl">
            Hi! I&apos;m Jed, a Fullstack Developer based in Philippines.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="relative mt-32 lg:mt-0 w-[50vw] lg:w-[35vw] duration-700 hover:scale-[1.02]">
            <div className="absolute borderImg opacity-0 inset-0 rounded-full border-x-4 border-[#389fc8] rotate-infinite"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <PixelatedImage
                src="/jed2.png"
                width={1280}
                height={1280}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
