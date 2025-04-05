"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebGrid from "./ui/WebGrid";
import { animateAbout } from "@/animations/layout";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    animateAbout();
  }, []);

  return (
    <section id="about" className="mt-[-6rem] relative lg:mt-[1rem]">
      {/* background grid */}
      <WebGrid className="block md:hidden -bottom-0 md:-bottom-32" />
      <h1 className="heading pb-10 mt-20 lg:mt-0 flex-center flex-col gap-2 sm:gap-5">
        <p className="textAnim">ABOUT ME </p>
        <span className="text-primary textAnim">AS A SOFTWARE DEVELOPER</span>
      </h1>
      <BentoGrid className="w-full pb-10 sm:pb-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={`bento-grid-item ${item.className}`}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
