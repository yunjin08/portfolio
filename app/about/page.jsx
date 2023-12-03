"use client";
import React from "react";
import Image from "next/image";
import { stacks } from "<jed>/files";
import { useState } from "react";

function Page() {
  const [projectHovered, setProjectHovered] = useState(null);

  const handleHover = (index) => {
    setProjectHovered(index);
  };

  const handleMouseLeave = () => {
    setProjectHovered(null);
  };
  return (
    <section>
      <div className="posting flex flex-col items-center justify-center -mt-10 md:mt-auto">
        <h1 className=" text-6xl md:text-8xl font-bold mb-10 md:mb-20">
          About <span>Me</span>{" "}
        </h1>
        <div className="icons grid grid-cols-2 blg:grid-cols-4 w-full items-center gap-[2rem] md:gap-[7rem] mt-16">
          <div className="flex flex-col items-center">
            <div className="ggs bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[10rem] h-[10rem]  lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem]">
              <i class="gg bx bx-stopwatch"></i>
            </div>
            <h1>Fast</h1>
            <p className="max-w-[60rem]">
              Quick load times and seamless interaction are of utmost importance
              to me.
            </p>
          </div>
          <div className="h-full flex flex-col items-center justify-start">
            <div className="ggs bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[10rem] h-[10rem]  lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem]">
              <i className="gg bx bx-devices"></i>
            </div>
            <h1>Responsive</h1>
            <p className="max-w-[60rem]">
              My layouts will work on any device, big or small.
            </p>
          </div>
          <div className="flex h-full flex-col items-center justify-start">
            <div className="ggs bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[10rem] h-[10rem] lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem]">
              <i class="gg bx bx-sun"></i>
            </div>
            <h1>Intuitive</h1>
            <p className="max-w-[60rem]">
              Great preference for user-friendly, intuitive UX/UI.
            </p>
          </div>
          <div className="flex flex-col items-center h-full  justify-start ">
            <div className="ggs bg-[#112e42] border-2 border-[#00abf0]  rounded-full flex items-center justify-center w-[10rem] h-[10rem]  lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem]">
              <i class="gg bx bx-unite"></i>
            </div>
            <h1>Dynamic</h1>
            <p className="max-w-[60rem]">
              I enjoy giving pages life so that websites don&apos;t have to be
              static.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-28 md:mt-44 mb-[10rem]">
          <div className="flex lg:w-[50%] w-full flex-col items-center justify-center ">
            <div className="flex relative items-center justify-center">
              <div className=" w-[45%] lg:w-[60%] relative  ">
                <div className="w-[100%]  ">
                  <Image
                    src="/jed2.png"
                    alt="jed"
                    width={1280}
                    height={1280}
                    className="gradient-conic about-img object-cover rounded-full "
                  />
                </div>
                <span className="circle-spin"></span>
              </div>
            </div>
            <h1 className="text-[2.8rem] md:text-[3.3rem] font-medium mt-8">
              Who&apos;s this <span>guy?</span>
            </h1>
            <p className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] xl:text-[1.8rem] lg:max-w-[550px]  text-justify mt-8 w-full indent-20">
              I&apos;m an aspiring Full Stack Developer studying at University
              of the Philippines Cebu. Proficient in leveraging the MERN stack,
              I am adept at utilizing frameworks like NEXT.js to streamline both
              backend and frontend development processes. My commitment to
              excellence drives me to stay abreast of industry best practices
              and continuously seek ways to enhance my skills in creating
              cutting-edge digital solutions.
            </p>
          </div>
          <div className="flex items-center justify-center font-medium flex-col">
            <h1 className="text-[3.7rem] md:text-[4rem] font-bold mt-16 lg:mt-0 mb-[3rem] text-center">
              Technology <span>Stack</span>
            </h1>
            <div className="lg:ml-[7rem] grid grid-cols-4 gap-[5rem] md:gap-[8rem] items-center  justify-center">
              {stacks.map((stack, index) => (
                <div
                  key={stack.id}
                  className="relative flex flex-col items-center "
                >
                  <Image
                    src={stack.source}
                    alt={stack.id}
                    key={stack.id}
                    width={110}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleMouseLeave}
                    height={110}
                    className=" object-cover w-[6rem] sm:w-[7rem] md:w-[9rem] lg:w-[11rem] xl:w-[12rem] mb-2"
                  />
                  {projectHovered === index && (
                    <div className="absolute   -bottom-20 text-2xl duration-500 ">
                      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
                        {stack.name}
                      </h1>
                      <p className="text-lg text-center">{stack.use}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
