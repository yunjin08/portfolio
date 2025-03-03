import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useEffect } from "react";
import PixelatedImage from "./ui/PixelatedImage";
import WebGrid from "./ui/WebGrid";
import { animateHero } from "@/animations/layout";

const Hero = () => {
  useEffect(() => {
    animateHero();
  }, []);

  return (
    <section id="hero" className="pb-20 overflow-hidden h-[100svh] md:h-auto">
      {/* background grid */}
      <WebGrid className="top-0 md:-bottom-32" />
      <WebGrid className="block md:hidden bottom-0" />
      <div
        className="w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex-center flex-1 lg:pt-0 gap-12 md:gap-5 lg:flex-row flex-col-reverse relative h-full md:h-[100svh] z-10">
        <div className="w-full lg:w-1/2 h-full flex-col flex-center">
          <TextGenerateEffect
            words="Crafting Seamless User Experiences"
            className="text-center h-32 md:h-auto text-xl sm:text-2xl lg:text-4xl xl:text-5xl"
          />

          <p className="text-center description mt-[-2rem] md:mt-0 opacity-0 md:tracking-wider mb-10 md:mb-4 responsive-text lg:text-lg xl:text-xl">
            Hi! I&apos;m Jed, a Fullstack Developer specializing in Web and
            Mobile Applications with AI integration.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="w-1/2 flex-center">
          <div className="relative mt-36 sm:mt-20 xl:mt-32 lg:mt-0 w-[50vw] lg:w-[35vw] duration-700 hover:scale-[1.02]">
            <div className="absolute borderImg opacity-0 inset-0 rounded-full border-x-4 border-secondary rotate-infinite"></div>
            <div className="relative w-full h-full flex-center">
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
    </section>
  );
};

export default Hero;
