import React from "react";
import Image from "next/image";

function page() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-7xl font-bold mb-16">
          About <span>Me</span>{" "}
        </h1>
        <div className="about-content text-left flex items-start justify-start w-full text-[2.6rem]">
          <h3>
            Full Stack Developer!
            <p className="text-[1.6rem] mt-[2rem] mb-[3rem]">
              Proficient in HTML, CSS, and JavaScript to create interactive and
              responsive user interfaces.
            </p>
          </h3>
        </div>
        <div className="icons flex w-full items-center justify-center space-x-[15rem] mt-16">
          <div className="flex flex-col items-center just">
            <div className="bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[15rem] h-[15rem]">
              <i class="gg bx bx-stopwatch"></i>
            </div>
            <h1>Fast</h1>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[15rem] h-[15rem]">
              <i className="gg bx bx-devices"></i>
            </div>
            <h1>Responsive</h1>
            <p>My layouts will work on any device, big or small.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[15rem] h-[15rem]">
              <i class="gg bx bx-sun"></i>
            </div>
            <h1>Intuitive</h1>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[40rem]">
            <div className="bg-[#112e42] border-2 border-[#00abf0]  rounded-full flex items-center justify-center w-[15rem] h-[15rem]">
              <i class="gg bx bx-unite"></i>
            </div>
            <h1>Dynamic</h1>
            <p>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
