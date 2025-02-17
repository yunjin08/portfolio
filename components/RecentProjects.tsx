"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import WebGrid from "./ui/WebGrid";
import { animateRecentProjects } from "@/animations/layout";
import { useEffect } from "react";

const RecentProjects = () => {
  const handleNavigation = (link: any) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    animateRecentProjects();
  }, []);

  return (
    <section id="projects" className="relative">
      <WebGrid className="top-0 md:top-32" />
      <WebGrid className="bottom-0" />

      <h1 className="heading flex-center gap-2">
        <p className="textAnimProjects opacity-0">My</p>
        <span className="text-primary textAnimProjects opacity-0">
          Projects
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center py-4 px-1 gap-x-4 gap-y-2 sm:gap-y-0 mt-2 sm:mt-10 md:mt-14">
        {projects.map((item) => (
          <div
            className="portfolio-items group lg:min-h-[32.5rem] sm:h-[25rem] h-[23rem] flex-center w-full"
            key={item.id}
          >
            <div
              onClick={() => handleNavigation(item.link)}
              className="w-full h-full cursor-pointer"
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex-center w-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl h-[25vh] lg:h-[30vh] mb-5 sm:mb-7 md:mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute group-hover:scale-125 transition-all duration-300 bottom-0 rounded-xl sm:rounded-2xl lg:rounded-3xl "
                  />
                </div>

                <h1 className="font-bold text-sm lg:text-lg md:text-md sm:text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-sm lg:font-normal font-light text-xs sm:text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-3 sm:mt-5 md:mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:size-10 sm:w-8 w-7 flex-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex-center">
                    <p className="flex responsive-text text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow
                      className="ms-2 sm:ms-3 size-3 sm:size-auto"
                      color="#CBACF9"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
