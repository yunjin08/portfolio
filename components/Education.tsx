"use client";

import React, { useEffect } from "react";

import { companies, testimonials } from "@/data";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import WebGrid from "./ui/WebGrid";
import { animateEducation } from "@/animations/layout";

const Education = () => {
  useEffect(() => {
    animateEducation();
  }, []);
  return (
    <section
      id="education"
      className="py-4 mt-[-1rem] md:mt-[-5rem] sm:py-10 relative"
    >
      <WebGrid className="top-0 -top-64" />
      <h1 className="heading headingAnimEdu">
        Educational
        <span className="text-primary"> Background</span>
      </h1>

      <div className="flex flex-col items-center">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="py-5 rounded-md flex-center flex-col antialiased relative overflow-x-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>

        <div className="flex-center relative flex-col">
          <Image
            src="/hackathon.webp"
            alt="jed"
            width={1110}
            height={1110}
            className={`about-img hackathon-img rounded-lg w-[20rem] md:w-[22rem] xl:w-[25rem] transition `}
          />
          <p className="p-4 hackathon-image max-w-[45rem] border-primary border-2 rounded-lg bg-black-100 text-justify font-normal indent-10 responsive-text mt-10">
            {`Our team created "Beacon," a career
          counseling application, during an 8-hour hackathon that addressed
          important issues in Philippine employment. Beacon creates customized
          career roadmaps based on user input and artificial intelligence to
          assist users in navigating their professional journeys. We won the
          hackathon and were recognized for our creative solution thanks to our
          teamwork.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
