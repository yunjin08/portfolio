"use client";

import React, { useEffect } from "react";

import { testimonials } from "@/data";
import Image from "next/image";
import WebGrid from "./ui/WebGrid";
import { animateEducation } from "@/animations/layout";
import dynamic from "next/dynamic";

const InfiniteMovingCards = dynamic(
  () => import("./ui/InfiniteCards").then((mod) => mod.InfiniteMovingCards),
  {
    ssr: false, // Optionally disable SSR if needed
    loading: () => <div>Loading InfiniteMovingCards...</div>, // You can customize the loading state
  }
);



const Education = () => {
  useEffect(() => {
    animateEducation();
  }, []);
  return (
    <section
      id="education"
      className="py-4 mt-[-1rem] md:mt-[-2rem] sm:py-10 relative"
    >
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
      </div>
    </section>
  );
};

export default Education;
