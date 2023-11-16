import React from "react";
import Image from "next/image";

function page() {
  return (
    <section>
      <div className="flex items-center justify-center flex-col">
        <div className="font-bold text-8xl">
          My <span>Background</span>
        </div>
        <div className="flex w-full  text-3xl  mt-44 justify-center items-start">
          {/*Education */}
          <div className="w-full flex-1 ">
            <h1 className="text-6xl flex flex-col font-semibold pb-10">
              Education{" "}
            </h1>

            <div className="ed flex flex-col space-y-16 w-[650px] pl-10">
              <div className="space-y-2  p-10">
                <p className="text-[1.7rem]">&#9634; 2010-2016</p>
                <p className="font-semibold text-[1.9rem]">
                  Elementary Degree - General P. del Rosario Elementary School
                </p>
                <p className="text-[1.75rem]">
                  A class valedictorian graduate equipped to create dynamic and
                  inspiring learning environment.
                </p>
              </div>
              <div className="space-y-2  p-10">
                <p className="text-[1.7rem]">&#9634; 2016-2022</p>
                <p className="font-semibold text-[1.9rem]">
                  High School Degree - Toledo City Science High School
                </p>
                <p className="text-[1.75rem]">
                  Batch salutatorian graduate from a Science High School, proven
                  commitment to academic inquiry, innovation, and critical
                  thinking.
                </p>
              </div>
              <div className="space-y-2  p-10">
                <p className="text-[1.7rem]">&#9634; 2022-Present</p>
                <p className="font-semibold text-[1.9rem]">
                  College Degree - University of the Philippines Cebu{" "}
                </p>
              </div>
            </div>
          </div>
          {/*Seminars Attended*/}
          <div className="w-full flex-1">
            <h1 className="text-6xl flex flex-col font-semibold pb-10">
              Seminars Attended{" "}
            </h1>

            <div className="ed flex flex-col space-y-16 w-[650px] pl-10 h-full">
              <div className="space-y-2  p-10 ">
                <p className="text-[1.7rem]">&#9634; 2022</p>
                <p className="font-semibold text-[1.9rem]">
                  Career Series 2022: Industry Talks: Technology.
                </p>
              </div>
              <div className="space-y-2  p-10">
                <p className="text-[1.7rem]">&#9634; 2022</p>
                <p className="font-semibold text-[1.9rem]">
                  Career Series 2022: Industry Talks: Technology
                </p>
              </div>
              <div className="space-y-2  p-10">
                <p className="text-[1.7rem]">&#9634; 2022</p>
                <p className="font-semibold text-[1.9rem]">
                  Career Series 2022: Industry Talks: Start-up /NGO
                  /Entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col mt-24 mb-20">
        <h1 className="text-6xl  font-semibold text-center">Certificates</h1>
        <div className="flex flex-1 flex-col 2xl:flex-row space-y-10 2xl:space-y-0 items-center mt-10 space-x-24">
          <div className="flex items-center justify-center space-x-24">
            <Image
              src="/ecom.png"
              alt="jed"
              width={410}
              height={110}
              className="about-img object-cover rounded-lg"
            />
            <Image
              src="/start.png"
              alt="jed"
              width={410}
              height={110}
              className="about-img object-cover rounded-lg "
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/tech.png"
              alt="jed"
              width={410}
              height={110}
              className="about-img object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
