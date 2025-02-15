"use client";

import React, { useEffect } from "react";

import { companies, testimonials } from "@/data";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import gsap from "gsap";

const Education = () => {
  useEffect(() => {
    gsap.fromTo(
      ".cardsAnim",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.3,
        stagger: 0.4,
        delay: -1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cardsAnim",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".headingAnimEdu",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".headingAnimEdu",
          start: "top 95%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".hackathon-img",
      {
        opacity: 0,
        x: -100,
        scale: 0.8,
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "power3.out",
        stagger: {
          amount: 0.3, // Total amount of stagger between all elements
          from: "start",
        },
        scrollTrigger: {
          trigger: ".hackathon-img",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <section
      id="education"
      className="py-4 mt-[-1rem] md:mt-[-5rem] sm:py-10 relative"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 -top-64 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1000}
          height={1000}
          className="w-full h-full opacity-50 object-cover"
        />
      </div>
      <h1 className="heading headingAnimEdu">
        Educational
        <span className="text-[#00abf0]"> Background</span>
      </h1>

      <div className="flex flex-col items-center">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="py-5 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-x-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>

        <div className="flex relative flex-col items-center justify-center ">
          <Image
            src="/hackathon.jpeg"
            alt="jed"
            width={1110}
            height={1110}
            className={`about-img hackathon-img rounded-lg w-[20rem] md:w-[22rem] xl:w-[25rem] transition `}
          />
          <p className="p-4 hackathon-image max-w-[45rem] border-[#00abf0] border-2 rounded-lg bg-black-100 text-justify font-normal indent-10 text-[0.6rem] sm:text-sm lg:text-md mt-10">
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
