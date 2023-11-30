"use client";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <section className="home flex flex-1 flex-col-reverse mb-10 xl:flex-row">
      <div className="flex flex-1 flex-col w-full xl:mr-32">
        <div className="home-content text-center xl:text-left w-full">
          <h1 className="w-full xl:w-auto text-center xl:text-left">
            Hi, I&#39;m Jed Edison Donaire
          </h1>
          <div className="text-animate flex flex-col">
            <h3>Full Stack Developer</h3>
            <p className="text-justify mt-[4rem]">
              Passionate full-stack developer dedicated to crafting cutting-edge
              websites, For me, my purpose in life is to contribute and innovate
              in the tech realm, forging a path of creativity and development to
              leave a lasting impact on the world.
            </p>
            <p className="text-justify mt-[2rem] mb-[6rem]">
              I aspire to be a driving force in the dynamic tech industry,
              contributing to the modernization of the digital world with
              creativity and innovation.
            </p>
          </div>

          <div className="btn-box flex items-center justify-center xl:justify-start gap-10 mb-44 xl:mb-0">
            <Link href="/" className="btn rounded-lg">
              {" "}
              Let's Connect
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center xl:justify-start mt-10">
          <div className="home-sci">
            <a
              href="https://github.com/yunjin08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="text-[3rem] bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/donaire-jed-edison-291a76282/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-[3rem] bx bxl-linkedin-square"></i>
            </a>
            <a
              href="https://www.facebook.com/donairejededison/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-[3rem] bx bxl-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center my-20 xl:my-0 ">
        <div className="homeimg"></div>
        <div className="relative w-[250px] sm:w-[400px] xl:w-[580px] 2xl:w-[600px]  h-[250px] sm:h-[400px] xl:h-[580px] 2xl:h-[600px] duration-700 hover:scale-[1.02] ">
          <div className="relative">
            <Image
              src="/jed2.png"
              alt="jed"
              width={1280}
              height={1280}
              className="gradient-conic about-img object-cover  rounded-full"
            />
            <span className="circle-spin"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
