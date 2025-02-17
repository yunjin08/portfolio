import React, { useEffect } from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import gsap from "gsap";
import Image from "next/image";
import WebGrid from "./ui/WebGrid";

const Experience = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card-images",
      {
        opacity: 0,
        x: -100,
        scale: 0.8,
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        delay: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power3.out",
        stagger: {
          amount: 1, // Total amount of stagger between all elements
          from: "start",
        },
        scrollTrigger: {
          trigger: ".hackathon-img",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".card-title",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".card-title",
          start: "top 95%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".card-desc",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 5,
        stagger: 0.2,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".card-desc",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
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
            <Button
              key={card.id}
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "#081b29",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-white cursor-default border-primary pointer-events-none"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-7 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 sm:w-16 w-12"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start card-title opacity-0 text-sm sm:text-lg md:text-xl mb-3 font-bold">
                    {card.title}
                  </h1>
                  <div className="flex pl-1 items-center">
                    {card.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:size-10 sm:size-8 size-7 flex-center card-images opacity-0"
                        style={{
                          transform: `translateX(-${5 * 1 + 2}px)`,
                        }}
                      >
                        <img src={tech} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                  {card.desc.map((data, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
