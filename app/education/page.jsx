"use client";

import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";

function Page() {
  const [certActive1, certToActive1] = useState(false);
  const [certActive2, certToActive2] = useState(false);
  const [certActive3, certToActive3] = useState(false);
  const cert1 = useRef(null);
  const cert2 = useRef(null);
  const cert3 = useRef(null);

  {
    /* Handling Certificates Activation and Referencing */
  }

  const scrollToCert1 = () => {
    cert1.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCert2 = () => {
    cert2.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCert3 = () => {
    cert3.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
      <div className="posting flex items-center justify-center flex-col">
        <div className=" font-bold text-6xl text-center md:text-8xl">
          My <span>Background</span>
        </div>
        <div className="flex w-full  lg:flex-row flex-col text-3xl  mt-44 justify-center items-start">
          {/*Education */}
          <div className="w-full flex flex-col flex-1 lg:items-start items-center  justify-center">
            <h1 className="text-[3rem] flex flex-col font-semibold pb-10">
              Education{" "}
            </h1>

            <div className="ed flex flex-col space-y-16 max-w-[650px] pl-10">
              <div className="precontent">
                <div className="content rounded-xl space-y-2  p-10 relative">
                  <p className="date text-[1.7rem]">&#9634; 2010-2016</p>
                  <p className="font-semibold text-[1.5xl] sm:text-[1.7rem] lg:text-[1.9rem]">
                    Elementary Degree - General P. del Rosario Elementary School
                  </p>
                  <p className="text-[1.45rem] sm:text-[1.55rem] lg:text-[1.75rem]">
                    A class valedictorian graduate equipped to create dynamic
                    and inspiring learning environment.
                  </p>
                </div>
              </div>
              <div className="precontent">
                <div className="content  rounded-xl space-y-4  p-10 relative">
                  <p className="date text-[1.7rem]">&#9634; 2016-2022</p>
                  <p className="font-semibold text-[1.5xl] sm:text-[1.7rem] lg:text-[1.9rem]">
                    High School Degree - Toledo City Science High School
                  </p>
                  <p className="text-[1.75rem]">
                    Batch salutatorian graduate from a Science High School,
                    proven commitment to academic inquiry, innovation, and
                    critical thinking.
                  </p>
                </div>
              </div>
              <div className="precontent">
                <div className="content  rounded-xl space-y-2  p-10 relative">
                  <p className="date text-[1.7rem]">&#9634; 2022-Present</p>
                  <p className="font-semibold text-[1.5xl] sm:text-[1.7rem] lg:text-[1.9rem]">
                    College Degree - University of the Philippines Cebu{" "}
                  </p>
                  <p className="text-[1.75rem]">
                    Pursuing undergraduate studies at UP, thrives in an academic
                    setting synonymous with excellence in academics, rigorous
                    research, creative innovation, and operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*Seminars Attended*/}
          <div className=" flex-1 w-full flex flex-col lg:items-start items-center justify-center lg:pl-12">
            <h1 className="text-[3rem] flex flex-col leading-[3rem] font-semibold text-center md:text-auto pb-10 pt-10 md:pt-0">
              Seminars Attended{" "}
            </h1>

            <div className="ed flex flex-col space-y-16 max-w-[650px] pl-10 h-full">
              <div className="precontent">
                <div
                  className="content  rounded-xl space-y-2  p-10 relative hover:cursor-pointer"
                  onClick={scrollToCert1}
                >
                  <p className="date text-[1.7rem]">&#9634; 2022</p>
                  <p className="font-semibold text-[1.5xl] sm:text-[1.7rem] lg:text-[1.9rem]">
                    Career Series 2022: Industry Talks: Telecommunications and
                    E-commerce.
                  </p>
                </div>
              </div>
              <div className="precontent">
                <div
                  className="content rounded-xl space-y-2  p-10 relative hover:cursor-pointer"
                  onClick={scrollToCert1}
                >
                  <p className="date text-[1.7rem]">&#9634; 2022</p>
                  <p className="font-semibold text-[1.5xl] sm:text-[1.7rem] lg:text-[1.9rem]">
                    Career Series 2022: Industry Talks: Technology
                  </p>
                </div>
              </div>

              <div className="precontent">
                <div
                  className="content rounded-xl space-y-2  p-10 relative hover:cursor-pointer"
                  onClick={scrollToCert1}
                >
                  <p className="date text-[1.7rem]">&#9634; 2022</p>
                  <p className="font-semibold text-[1.5xl] sm:text-[1.7rem] lg:text-[1.9rem]">
                    Career Series 2022: Industry Talks: Start-up /NGO
                    /Entrepreneurship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col mt-24 mb-20">
        <h1 className="text-6xl  font-semibold text-center">Certificates</h1>
        <div className="flex flex-col xxl:flex-row space-y-10 xxl:space-y-0 items-center mt-10 lg:space-x-24">
          <div className="flex  flex-col items-center space-y-10 justify-center blg:space-x-24   blg:flex-row blg:space-y-0">
            <Image
              src="/ecom.png"
              alt="jed"
              width={410}
              height={110}
              ref={cert1}
              className="about-img object-cover rounded-lg hover:scale-[1.05] transition "
            />
            <Image
              src="/start.png"
              alt="jed"
              ref={cert2}
              width={410}
              height={110}
              className="about-img object-cover rounded-lg hover:scale-[1.05] transition"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/tech.png"
              alt="jed"
              ref={cert3}
              width={410}
              height={110}
              className="about-img object-cover rounded-lg hover:scale-[1.05] transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
