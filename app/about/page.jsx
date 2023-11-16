import React from "react";
import Image from "next/image";

function page() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-7xl font-bold mb-16">
          About <span>Me</span>{" "}
        </h1>
        <div className="flex flex-1 relative items-center justify-center">
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
        <div className="about-content text-left flex items-start justify-start w-full text-[2.6rem]">
          <h3>
            Full Stack Developer!
            <p className="text-[1.6rem] mt-[2rem] mb-[3rem]">
              Proficient in HTML, CSS, and JavaScript to create interactive and
              responsive user interfaces.
            </p>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default page;
