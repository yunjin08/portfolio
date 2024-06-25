"use client";

import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import EducationCard from "<jed>/components/generics/EducationCard";
import Certificates from "<jed>/components/generics/Certificates";
import Achievement from "<jed>/components/generics/Achievement";

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
    {
      /*Activating Certificates */
    }
    certToActive1(true);
    certToActive2(false);
    certToActive3(false);
  };
  const scrollToCert2 = () => {
    cert2.current.scrollIntoView({ behavior: "smooth" });
    {
      /*Activating Certificates */
    }
    certToActive1(false);
    certToActive2(true);
    certToActive3(false);
  };
  const scrollToCert3 = () => {
    cert3.current.scrollIntoView({ behavior: "smooth" });
    {
      /*Activating Certificates */
    }
    certToActive1(false);
    certToActive2(false);
    certToActive3(true);
  };
  return (
    <section className="relative overflow-x-hidden">
      <div className="absolute z-[100] -right-1/2 top-1/4 w-[30%] h-[30%] rounded-full white__gradient" />
      <div className="absolute z-[100] -right-1/2 top-1/4 w-[30%] h-[30%] rounded-full darkblue__gradient" />
      <div className="hidden 2xl:block absolute z-[0] right-[2rem] top-[38%]  w-[30%] h-[20%] rounded-full darkblue__gradient" />
      <div className="hidden 2xl:block absolute z-[0] left-[2rem] top-[58%]  w-[30%] h-[20%] rounded-full darkblue__gradient" />

      <div className="posting flex items-center justify-center flex-col">
        <div className=" font-bold text-6xl text-center md:text-8xl">
          My <span>Background</span>
        </div>
        <div className="flex w-full relative lg:flex-row flex-col text-3xl  mt-20 sm:mt-44 justify-center items-start">
          <i class="bx bxl-vuejs invisible  lg:visible  absolute top-[20rem] text-[50rem] opacity-5"></i>

          {/*Education */}
          <div className="w-full relative flex flex-col flex-1 lg:items-start items-center  justify-center">
            <i class="bx bxl-vuejs visible lg:invisible  absolute top-[20rem] text-[35rem] sm:text-[50rem] opacity-5"></i>
            <h1 className="text-[3rem] lg:text-left text-center flex flex-col font-semibold pb-14">
              Education
            </h1>

            <div className="ed flex flex-col space-y-5 sm:space-y-16 max-w-[650px] pl-10">
              <EducationCard
                school="Elementary Degree - General P. del Rosario Elementary School"
                year="2010-2016"
                description={["A class valedictorian graduate equipped to create dynamic and inspiring learning environment."]}
              />
              <EducationCard
                school="High School Degree - Toledo City Science High School"
                year="2016-2022"
                description={[`Batch salutatorian graduate from a Science High School,
                proven commitment to academic inquiry, innovation, and
                critical thinking.`]}
              />
              <EducationCard
                school="College Degree - University of the Philippines Cebu"
                year="2022-Present"
                description={[`Pursuing undergraduate studies at UP, thrives in an academic
                setting synonymous with excellence in academics, rigorous
                research, creative innovation, and operational efficiency.`]}
              />
            </div>
          </div>

          {/*Seminars Attended*/}
          <div className=" flex-1  relative w-full flex flex-col lg:items-start items-center justify-center lg:pl-12">
            <i class="bx bxl-python absolute bottom-0 visible lg:invisible text-[35rem] sm:text-[50rem] opacity-5"></i>

            <h1 className="text-[3rem] flex flex-col leading-[3rem] font-semibold text-center md:text-auto pb-10 pt-10 md:pt-0">
              Seminars Attended{" "}
            </h1>

            <div className="ed flex flex-col space-y-5 sm:space-y-16 max-w-[650px] pl-10 h-full">
              <div className="precontent">
                <div
                  className="content  rounded-xl space-y-2  p-10 relative hover:cursor-pointer"
                  onClick={scrollToCert1}
                >
                  <p className="date text-[1.7rem]">&#9634; 2022</p>
                  <p className="font-semibold text-[1.3rem] sm:text-[1.7rem] lg:text-[1.9rem]">
                    Career Series 2022: Industry Talks: Telecommunications and
                    E-commerce.
                  </p>
                </div>
              </div>
              <div className="precontent">
                <div
                  className="content rounded-xl space-y-2  p-10 relative hover:cursor-pointer"
                  onClick={scrollToCert2}
                >
                  <p className="date text-[1.7rem]">&#9634; 2022</p>
                  <p className="font-semibold text-[1.3rem] sm:text-[1.7rem] lg:text-[1.9rem]">
                    Career Series 2022: Industry Talks: Technology
                  </p>
                </div>
              </div>

              <div className="precontent">
                <div
                  className="content rounded-xl space-y-2  p-10 relative hover:cursor-pointer"
                  onClick={scrollToCert3}
                >
                  <p className="date text-[1.7rem]">&#9634; 2022</p>
                  <p className="font-semibold text-[1.3rem] sm:text-[1.7rem] lg:text-[1.9rem]">
                    Career Series 2022: Industry Talks: Start-up /NGO
                    /Entrepreneurship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full relative  flex-col text-3xl  mt-20 sm:mt-22 justify-center items-center">
        <i class="bx bxl-react absolute top-[20rem] lg:right-[-10rem] text-[35rem] sm:text-[50rem] opacity-5"></i>
        <i class="bx bxl-python absolute bottom-0 invisible lg:visible lg:left-[-10rem]  text-[35rem] sm:text-[50rem] opacity-5"></i>

        <div className="w-full flex flex-col flex-1 items-center  justify-center mb-24">
          <h1 className="text-[3rem] justify-center text-center flex flex-col font-semibold pb-14">
            Experience
          </h1>

          <div className="ed w-full flex flex-col space-y-5 sm:space-y-16 max-w-full pl-10">
            <EducationCard
              school="Part time Fullstack Developer at BPOSeats"
              year="2024-Present"
              description={[
                 "Oversaw the initial planning and development phases to improve customer service in our app, projecting a 55% increase in operational efficiency.",
                 "Integrated Vue and Django unit tests into automated pipelines, reducing deployment failures by 80%.",
                 "Assisted in developing the time and money feature, providing granular access control to optimize usage for both employees and owners.",
                  "Debugged code, significantly reducing bugs and contributing to a 65% increase in system availability."
                ]}
            />
            <EducationCard
              school="Self Employed Fullstack Developer at Beacon"
              year="2024-Present"
              description={[
                "Plan and conducted the development phase of the app.",
                "Integrated Nextjs, Python, and GPT4 to power up our app and produce good results",
                "Assisted in developing and testing the site.",
                 "Debugged code, significantly reducing bugs and improved UI."
               ]}
            />
            <EducationCard
              school="Software Developer at Bitworks Solutions"
              year="2024-Present"
              description={[
                "Conducted the initial planning and development phases in making an app based on client needs and wants.",
                "Integrated NextJs and and Animation Libraries to better enhance the frontend and satisfy client needs.",
                "One of the pioneers in making the design in Figma, making the prototype and flow of the app.",
                 "Worked on website, on mobile application using react-native as well as integrating it to web app."
               ]}
            />
          </div>
        </div>
        <div className=" flex-1 w-full flex flex-col  items-center justify-center ">
          <Achievement
            cert1={cert1}
            cert2={cert2}
            cert3={cert3}
            certActive1={certActive1}
            certActive2={certActive2}
            certActive3={certActive3}
          />
        </div>
      </div>

      <Certificates
        cert1={cert1}
        cert2={cert2}
        cert3={cert3}
        certActive1={certActive1}
        certActive2={certActive2}
        certActive3={certActive3}
      />
    </section>
  );
}

export default Page;
