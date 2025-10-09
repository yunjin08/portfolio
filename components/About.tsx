"use client";
import { gridItems } from "@/data";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateAbout } from "@/animations/layout";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import WebGrid from "./ui/WebGrid";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    animateAbout();
  }, []);

  return (
    <section id="about" className="mt-[-6rem] relative lg:mt-[2rem]">
      {/* background grid */}
      <WebGrid className="block md:hidden -bottom-0 md:-bottom-32" />
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
