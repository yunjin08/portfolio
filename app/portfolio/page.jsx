"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "/files";

function Portfolio() {
  const [all, setAll] = useState(true);
  const [frontend, setFrontend] = useState(false);
  const [fullstack, setFullstack] = useState(false);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    // Set fade back to false after the transition duration (adjust as needed)
    const timeout = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timeout);
  }, [all, frontend, fullstack]);

  return (
    <section>
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className=" abme flex w-full items-center justify-center flex-col">
          <h1 className="text-8xl font-bold">Projects</h1>
          <div className="mt-10 w-[8rem] border-t-4" />
        </div>
        <div>
          <div className="w-full flex mt-[5rem] text-5xl font-medium items-center justify-center gap-5">
            <div
              onClick={() => {
                setAll(true);
                setFrontend(false);
                setFullstack(false);
              }}
              className={`text-center w-[24rem] hover:cursor-pointer ${
                all && "bg-[#112e42] border-[#00abf0] border-2"
              }`}
            >
              All
            </div>
            <div
              onClick={() => {
                setFrontend((prevState) => !prevState);
                setAll(false);
                setFullstack(false);
              }}
              className={`text-center w-[24rem] hover:cursor-pointer ${
                frontend && "bg-[#112e42] border-[#00abf0] border-2"
              }`}
            >
              Frontend
            </div>
            <div
              onClick={() => {
                setFullstack((prevState) => !prevState);
                setAll(false);
                setFrontend(false);
              }}
              className={`text-center w-[24rem] hover:cursor-pointer ${
                fullstack && "bg-[#112e42] border-[#00abf0] border-2"
              }`}
            >
              Full Stack
            </div>
          </div>
        </div>
        {all && (
          <div
            className={`grid grid-cols-3 w-[120rem] mt-24 gap-7 mb-44 ${
              fade ? "fade-in" : ""
            }`}
          >
            {projects.map((projects) => (
              <Image
                src={projects.folder}
                alt={projects.name}
                key={projects.name}
                width={1920}
                height={1080}
                className="object-cover h-full w-full border-transparent border-4 hover:border-[#00abf0]"
              />
            ))}
          </div>
        )}

        {frontend && (
          <div
            className={`grid grid-cols-3 w-[120rem] mt-24 gap-7 mb-44 ${
              fade ? "fade-in" : ""
            }`}
          >
            {projects.map(
              (projects) =>
                projects.type === "frontend" && (
                  <Image
                    src={projects.folder}
                    alt={projects.name}
                    key={projects.name}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full border-transparent border-2 hover:border-[#00abf0]"
                  />
                )
            )}
          </div>
        )}
        {fullstack && (
          <div
            className={`grid grid-cols-3 w-[120rem] mt-24 gap-7 mb-44 ${
              fade ? "fade-in" : ""
            }`}
          >
            {projects.map(
              (projects) =>
                projects.type === "fullstack" && (
                  <Image
                    src={projects.folder}
                    alt={projects.name}
                    key={projects.name}
                    width={1920}
                    height={1080}
                    className="object-cover w-full border-transparent  border-2 hover:border-[#00abf0] hover:opacity-[0.2]"
                  />
                )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
