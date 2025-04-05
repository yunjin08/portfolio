import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { useEffect } from "react";
import PixelatedImage from "./ui/PixelatedImage";
import WebGrid from "./ui/WebGrid";
import { animateHero } from "@/animations/layout";

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      animateHero();
    }, 1000);
  }, []);

  return (
    <section id="hero" className="pb-20 overflow-hidden h-[100svh] md:h-auto">
      {/* background grid, we didn't use the component to make this appear directly, avoiding LCP */}
      <div className={`w-full absolute left-0  min-h-96 top-0 md:-bottom-32`}>
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1000}
          height={1000}
          loading="eager"
          quality={75}
          priority={true}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>
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
        <div className="w-1/2 flex-center">
          <div className="relative mt-36 sm:mt-20 xl:mt-32 lg:mt-0 w-[50vw] lg:w-[35vw] duration-700 hover:scale-[1.02]">
            <div className="absolute borderImg opacity-0 inset-0 rounded-full border-x-4 border-secondary rotate-infinite"></div>
            <div className="relative w-full h-full flex-center">
              <PixelatedImage
                src="/jed2.webp"
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
