"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Educational
        <span className="text-[#00abf0]"> Background</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="min-h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-x-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>

        <div className="flex relative flex-col items-center justify-center max-lg:mt-10 ">
          <Image
            src="/hackathon.jpeg"
            alt="jed"
            width={1110}
            height={1110}
            className={`about-img  rounded-lg w-[20rem] md:w-[22rem] xl:w-[25rem] transition `}
          />
          <p className="p-4 max-w-[45rem] border-[#00abf0] border-2 rounded-lg bg-black-100 text-justify font-normal indent-10 text-sm lg:text-md mt-10">
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

export default Clients;
