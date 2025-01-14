"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RecentProjects = () => {
  const handleNavigation = (link: any) => {
    window.open(link, "_blank");
  };

  useGSAP(() => {
    gsap.fromTo(
      ".portfolio-items",
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
          trigger: ".portfolio-items",
          start: "top 80%", // When the top of the element hits 80% of the viewport height
          end: "bottom 20%", // When the bottom of the element hits 20% of the viewport height
          toggleActions: "play none none reverse", // Play the animation when in view
        },
      }
    );
  }, []);

  return (
    <div id="projects" className="">
      <h1 className="heading">
        My <span className="text-[#00abf0]">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center p-4 gap-x-4 mt-28">
        {projects.map((item) => (
          <div
            className="portfolio-items lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-full"
            key={item.id}
          >
            <div
              onClick={() => handleNavigation(item.link)}
              className="w-full h-full cursor-pointer"
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-lg md:text-md text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-md text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
