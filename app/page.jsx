"use client";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <section className="home flex flex-1 flex-col-reverse xl:flex-row">
      <div className="flex flex-1 flex-col w-full">
        <div className="home-content text-center xl:text-left w-full">
          <h1 className="w-full xl:w-auto text-center">
            Hi, I&#39;m <span> Jed Edison Donaire</span>
          </h1>
          <div className="text-animate">
            <h3>Fullstack Developer</h3>
            <p>
              Specializing in server and client-side rendering for optimal web
              performance. With expertise in crafting RESTful APIs, to bring
              seamless communication between front-end and back-end components.
              A fast learner of new technologies, dedicated to delivering
              cutting-edge solutions and ensuring an exceptional user
              experience.
            </p>
          </div>

          <div className="btn-box flex items-center justify-center gap-10 mb-44 xl:mb-0">
            <Link href="/" className="btn rounded-lg">
              Hire Me
            </Link>
            <Link href="/" className="btn rounded-lg">
              {" "}
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="home-sci">
            <Link href="fb.com">
              <i className="bx bxl-facebook-circle"></i>
            </Link>
            <Link href="ig.com">
              <i className="bx bxl-instagram-alt"></i>
            </Link>
            <Link href="linked.com">
              <i className="bx bxl-linkedin-square"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center border-red-500 border-10 my-20 xl:my-0">
        <div className="max-w-[400px] xl:max-w-[680px] max-h-[400px] xl:max-h-[680px] min-w-[300px] min-h-[300px]">
          <Image
            src="/jed2.png"
            alt="jed"
            width={1280}
            height={1280}
            className=" object-cover bg-gradient-to-r from-[#081b29] via-[#173e56] to-[#112e42] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
