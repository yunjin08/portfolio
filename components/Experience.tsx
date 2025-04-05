import React, { memo, useEffect } from "react";

import { workExperience } from "@/data";
import Image from "next/image";
import { animateExperience } from "@/animations/layout";
import type { WorkExperience } from "@/interfaces";

import dynamic from "next/dynamic";
const WebGrid = dynamic(() => import("./ui/WebGrid"), { ssr: false });
const Button = dynamic(() => import("./ui/MovingBorders").then((mod) => mod.Button), { ssr: false });

const WorkExperienceItem = memo(({ card }: { card: WorkExperience }) => {
  return (
    <Button
      key={card.id}
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      style={{
        background: "#081b29",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        borderRadius: `calc(1.75rem* 0.96)`,
      }}
      className="flex-1 text-white cursor-default border-primary pointer-events-none"
    >
      <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-7 gap-2">
        <Image
          src={card.thumbnail}
          alt={card.thumbnail}
          className="lg:w-32 md:w-20 sm:w-16 w-12"
          width={1000}
          height={1000}
        />
        <div className="lg:ms-5">
          <h1 className="text-start card-title opacity-0 text-sm sm:text-lg md:text-xl mb-3 font-bold">
            {card.title} at <span className="text-bold text-primary">{' '}{card.company}{' '}</span>{card.date}
          </h1>
          <div className="flex pl-1 items-center">
            {card.techStack.map((tech: string, index: number) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:size-10 sm:size-8 size-7 flex-center card-images opacity-0"
                style={{
                  transform: `translateX(-${5 * 1 + 2}px)`,
                }}
              >
                <Image
                  src={tech}
                  alt="icon5"
                  className="p-2"
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
          {card.desc.map((data: string, index: number) => (
            <p
              key={index}
              className="text-start card-desc text-[0.62rem] sm:text-sm  text-white-100 my-2 font-semibold"
            >
              &#8226; {data}
            </p>
          ))}
        </div>
      </div>
    </Button>
  );
});

WorkExperienceItem.displayName = "WorkExperienceItem";

const Experience = () => {
  useEffect(() => {
    animateExperience();
  }, []);
  return (
    <section id="experience">
      <div className="py-4 sm:py-14 md:py-16 w-full relative">
        {/* background grid */}
        <WebGrid className="-bottom-0 md:-bottom-32" />

        {/* background grid */}
        <div className="w-full absolute left-0 -top-64 min-h-96">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            width={1000}
            height={1000}
            className="w-full h-full opacity-50 object-cover"
          />
        </div>

        <h1 className="heading">
          My <span className="text-primary">work experience</span>
        </h1>

        <div className="w-full mt-4 md:mt-12 grid lg:grid-cols-4 grid-cols-1 gap-4 sm:gap-8 md:gap-10">
          {workExperience.map((card) => (
            <WorkExperienceItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
