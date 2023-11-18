import React from "react";
import Image from "next/image";

function page() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-7xl font-bold mb-16">
          About <span>Me</span>{" "}
        </h1>
        <div className="icons flex w-full items-center justify-center gap-[15rem] mt-16">
          <div className="flex flex-col items-center">
            <div className="bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[15rem] h-[15rem]">
              <i class="gg bx bx-stopwatch"></i>
            </div>
            <h1>Fast</h1>
            <p className="max-w-[60rem]">
              Quick load times and seamless interaction are of utmost importance
              to me.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[15rem] h-[15rem]">
              <i className="gg bx bx-devices"></i>
            </div>
            <h1>Responsive</h1>
            <p className="max-w-[60rem]">
              My layouts will work on any device, big or small.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#112e42] border-2 border-[#00abf0] rounded-full flex items-center justify-center w-[15rem] h-[15rem]">
              <i class="gg bx bx-sun"></i>
            </div>
            <h1>Intuitive</h1>
            <p className="max-w-[60rem]">
              Great preference for user-friendly, intuitive UX/UI.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="bg-[#112e42] border-2 border-[#00abf0]  rounded-full flex items-center justify-center w-[15rem] h-[15rem]">
              <i class="gg bx bx-unite"></i>
            </div>
            <h1>Dynamic</h1>
            <p className="max-w-[60rem]">
              I enjoy giving pages life so that websites don't have to be
              static.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full mt-44 mb-[10rem]">
          <div className="flex flex-col items-center justify-center ">
            <div className="flexrelative items-center justify-center">
              <div className=" w-[300px] relative sm:w-[400px] xl:w-[580px] 2xl:w-[350px]  h-[300px] sm:h-[400px] xl:h-[580px] 2xl:h-[350px] ">
                <div className="w-[300px] sm:w-[400px] xl:w-[580px] 2xl:w-[350px]  h-[300px] sm:h-[400px] xl:h-[580px] 2xl:h-[350px] ">
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
            <h1 className="text-[3.3rem] font-medium mt-8">
              Who's this <span>guy?</span>
            </h1>
            <p className="text-[1.8rem] max-w-[550px] text-center mt-4">
              I'm an aspiring Full Stack Developer studying at University of the
              Philippines Cebu. I have serious passion for creating seamless and
              innovative web applications , and creating intuitive, dynamic user
              experiences.
            </p>
          </div>
          <div className="flex items-center justify-center font-medium flex-col">
            <h1 className="text-[4rem] font-bold mb-[3rem]">
              Technology <span>Stack</span>
            </h1>
            <div className="ml-[7rem] grid grid-cols-4 gap-[8rem] items-center  justify-center">
              <Image
                src="/html.svg"
                alt="jed"
                width={110}
                height={110}
                className=" object-cover"
              />

              <Image
                src="/css.png"
                alt="jed"
                width={110}
                height={110}
                className=" object-cover "
              />
              <Image
                src="/js.svg"
                alt="jed"
                width={100}
                height={100}
                className=" object-cover  "
              />
              <Image
                src="/c++.png"
                alt="jed"
                width={115}
                height={115}
                className=" object-cover "
              />
              <Image
                src="/python.png"
                alt="jed"
                width={110}
                height={110}
                className=" object-cover "
              />

              <Image
                src="/tailwind.png"
                alt="jed"
                width={110}
                height={110}
                className=" object-cover  "
              />
              <Image
                src="/react.png"
                alt="jed"
                width={120}
                height={120}
                className=" object-cover"
              />
              <Image
                src="/nextjs.svg"
                alt="jed"
                width={115}
                height={115}
                className=" object-cover "
              />
              <Image
                src="/nodejs.svg"
                alt="jed"
                width={120}
                height={120}
                className=" object-cover  "
              />
              <Image
                src="/expressjs.svg"
                alt="jed"
                width={100}
                height={100}
                className=" object-cover  "
              />
              <Image
                src="/mongodb.svg"
                alt="jed"
                width={108}
                height={108}
                className=" object-cover "
              />
              <Image
                src="/vscode.svg"
                alt="jed"
                width={105}
                height={105}
                className=" object-cover  "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
