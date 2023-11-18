"use client";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <section className="home flex flex-1 flex-col-reverse xl:flex-row">
      <div className="flex flex-1 flex-col w-full xl:mr-32">
        <div className="home-content text-center xl:text-left w-full">
          <h1 className="w-full xl:w-auto text-center xl:text-left">
            Hi, I&#39;m Jed Edison Donaire
          </h1>
          <div className="text-animate">
            <h3>Full Stack Developer</h3>
            <p className="text-justify ">
              Specializing in server and client-side rendering for optimal web
              performance and responsive website. With expertise in crafting
              RESTful APIs, to bring seamless communication between front-end
              and back-end components. A fast learner of new technologies,
              dedicated to delivering cutting-edge solutions and ensuring an
              exceptional user experience.
            </p>
          </div>

          <div className="btn-box flex items-center justify-center xl:justify-start gap-10 mb-44 xl:mb-0">
            <Link href="/" className="btn rounded-lg">
              Hire Me
            </Link>
            <Link href="/" className="btn rounded-lg">
              {" "}
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center xl:justify-start">
          <div className="home-sci">
            <Link href="https://github.com/yunjin08">
              <i class="bx bxl-github"></i>
            </Link>
            <Link href="https://www.facebook.com/donairejededison/">
              <i class="bx bxl-facebook"></i>
            </Link>
            <Link href="linked.com">
              <i className="bx bxl-linkedin-square"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center my-20 xl:my-0 ">
        <div className="homeimg"></div>
        <div className="relative w-[250px] sm:w-[400px] xl:w-[580px] 2xl:w-[600px]  h-[250px] sm:h-[400px] xl:h-[580px] 2xl:h-[600px] hover:scale-[1.02] ">
          <div className="">
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
