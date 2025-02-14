"use client";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import gsap from "gsap";
import useGAP, { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
    gsap.fromTo(
      ".textAnim",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".textAnim",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <section id="about" className="mt-[-6rem] relative lg:mt-[1rem]">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-0 md:-bottom-32 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1000}
          height={1000}
          className="w-full h-full opacity-50 object-cover"
        />
      </div>
      <h1 className="heading pb-10 mt-20 lg:mt-0 flex items-center justify-center flex-col gap-2 sm:gap-5">
        <p className="textAnim">ABOUT ME </p>
        <span className="text-[#00abf0] textAnim">AS A SOFTWARE DEVELOPER</span>
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
