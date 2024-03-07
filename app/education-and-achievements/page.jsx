"use client";

import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import EducationCard from "<jed>/components/EducationCard";
import Certificates from "<jed>/components/Certificates";
import Achievement from "<jed>/components/Achievement";

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
      <div className="posting flex items-center justify-center flex-col">
        <div className=" font-bold text-6xl text-center md:text-8xl">
          My <span>Background</span>
        </div>
        <div className="flex w-full  lg:flex-row flex-col text-3xl  mt-20 sm:mt-44 justify-center items-start">
          {/*Education */}
          <div className="w-full flex flex-col flex-1 lg:items-start items-center  justify-center">
            <h1 className="text-[3rem] flex flex-col font-semibold pb-14">
              Education and Achievements{" "}
            </h1>

            <div className="ed flex flex-col space-y-5 sm:space-y-16 max-w-[650px] pl-10">
              <EducationCard
                school="Elementary Degree - General P. del Rosario Elementary School"
                year="2010-2016"
                description="A class valedictorian graduate equipped to create dynamic and inspiring learning environment."
              />
              <EducationCard
                school="High School Degree - Toledo City Science High School"
                year="2016-2022"
                description={`Batch salutatorian graduate from a Science High School,
                proven commitment to academic inquiry, innovation, and
                critical thinking.`}
              />
              <EducationCard
                school="College Degree - University of the Philippines Cebu"
                year="2022-Present"
                description={`Pursuing undergraduate studies at UP, thrives in an academic
                setting synonymous with excellence in academics, rigorous
                research, creative innovation, and operational efficiency.`}
              />
            </div>
          </div>

          {/*Seminars Attended*/}
          <div className=" flex-1 w-full flex flex-col lg:items-start items-center justify-center lg:pl-12">
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
      <Achievement
        cert1={cert1}
        cert2={cert2}
        cert3={cert3}
        certActive1={certActive1}
        certActive2={certActive2}
        certActive3={certActive3}
      />
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
