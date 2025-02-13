"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import gsap from "gsap";
import useGAP, { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Grid = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".bento-grid-item",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bento-grid-item",
          start: "top 80%", // When the top of the element hits 80% of the viewport height
          end: "bottom 20%", // When the bottom of the element hits 20% of the viewport height
          toggleActions: "play none none reverse", // Play the animation when in view
        },
      }
    );
  }, []);
  return (
    <section id="about" className="mt-[-12rem] sm:mt-0">
      <h1 className="heading pb-10 mt-20 lg:mt-0 flex items-center justify-center flex-col gap-2 sm:gap-5">
        <p>ABOUT ME </p>
        <span className="text-[#00abf0]">AS A SOFTWARE DEVELOPER</span>
      </h1>
      <BentoGrid className="w-full pb-10 sm:pb-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
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

export default Grid;
