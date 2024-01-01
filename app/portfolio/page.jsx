"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "/files";
import Posts from "<jed>/components/Posts";

function Portfolio() {
  const [all, setAll] = useState(true);
  const [frontend, setFrontend] = useState(false);
  const [fullstack, setFullstack] = useState(false);
  const [projectHovered, setProjectHovered] = useState(null);
  const [post, setPosts] = useState(false);
  const [content, setContent] = useState({});

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    // Set fade back to false after the transition duration (adjust as needed)
    const timeout = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timeout);
  }, [all, frontend, fullstack]);

  const handleHover = (index) => {
    setProjectHovered(index);
  };

  const handleMouseLeave = () => {
    setProjectHovered(null);
  };

  const handlePosts = (projects) => {
    setPosts(true);
    setContent({
      title: projects.title,
      folder: projects.folder,
      folder2: projects.folder2,
      name: projects.name,
      stack: projects.stack,
      description: projects.description,
      link: projects.link,
    });
  };

  return (
    <section>
      <div
        className={` posting relative flex w-full flex-col items-center justify-center ${
          post && "overlay"
        }`}
      >
        {post && (
          <Posts
            post={post}
            setPosts={setPosts}
            content={content}
            setContent={setContent}
          />
        )}
        <div className="  flex w-full items-center justify-center flex-col">
          <h1 className="text-[4rem] md:text-7xl xl:text-8xl font-bold">
            {!post && "Projects"}
          </h1>
          <div className="mt-4 md:mt-8 w-[9rem] border-t-4" />
        </div>
        <div className={`${post && "hidden"}`}>
          <div className="w-full flex mt-[5rem] text-3xl sm:text-4xl md:text-5xl xl:text-[3.5rem] font-medium items-center justify-center gap-5">
            <div
              onClick={() => {
                setAll(true);
                setFrontend(false);
                setFullstack(false);
              }}
              className={`text-center w-[10rem] sm:w-[16rem]  md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
                all && "bg-[#112e42] border-[#00abf0] object-cover border-2"
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
              className={`text-center w-[10rem] sm:w-[16rem]  md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
                frontend &&
                "bg-[#112e42] border-[#00abf0] object-cover border-2"
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
              className={`text-center w-[10rem] sm:w-[16rem] md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
                fullstack &&
                "bg-[#112e42] border-[#00abf0] object-cover border-2"
              }`}
            >
              Full Stack
            </div>
          </div>
        </div>

        {all && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:w-[120rem] mt-24 gap-7 px-10 md:px-0 mb-44 ${
              fade ? "fade-in" : ""
            } ${post && "hidden"}`}
          >
            {projects.map((projects, index) => (
              <div
                className="imagedet"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
                key={projects.name}
              >
                {projectHovered === index && (
                  <div className="absolute top-[50%] left-[50%] z-[100] transform -translate-x-1/2 -translate-y-1/2 ">
                    <div className="posting flex flex-col w-full items-center justify-center">
                      <h1 className="text-4xl font-medium">{projects.title}</h1>
                      <p className="text-3xl pt-3 pb-20">{projects.stack}</p>
                      <button
                        className="w-[20rem] text-4xl  h-[5rem] border-2  border-[#00abf0] object-cover hover:cursor-pointer hover:bg-[#00abf0] hover:text-[#112e42]"
                        onClick={() => handlePosts(projects)}
                      >
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                )}
                <Image
                  src={projects.folder}
                  alt={projects.name}
                  width={1920}
                  height={1080}
                  className="w-[45rem] h-[20rem] sm:h-[25rem] object-cover border-[0.2px] border-[#00abf0] object-cover  hover:opacity-[0.2]"
                />
              </div>
            ))}
          </div>
        )}

        {frontend && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:w-[120rem] mt-24 gap-7 px-10 md:px-0 mb-44  ${
              fade ? "fade-in" : ""
            } ${post && "hidden"}`}
          >
            {projects.map(
              (projects, index) =>
                projects.type === "frontend" && (
                  <div
                    className="imagedet"
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleMouseLeave}
                    key={projects.name}
                  >
                    {projectHovered === index && (
                      <div className="absolute top-[50%] left-[50%] z-[100] transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="posting flex flex-col w-full items-center justify-center">
                          <h1 className="text-4xl font-medium">
                            {projects.title}
                          </h1>
                          <p className="text-3xl pt-3 pb-20">
                            {projects.stack}
                          </p>
                          <button
                            className="w-[20rem] text-4xl  h-[5rem] border-2  border-[#00abf0] object-cover hover:cursor-pointer hover:bg-[#00abf0] hover:text-[#112e42]"
                            onClick={() => handlePosts(projects)}
                          >
                            LEARN MORE
                          </button>
                        </div>
                      </div>
                    )}
                    <Image
                      src={projects.folder}
                      alt={projects.name}
                      width={1920}
                      height={1080}
                      className="w-[45rem] h-[25rem]   hover:cursor-pointer border-[0.2px] border-[#00abf0] object-cover hover:opacity-[0.2]"
                    />
                  </div>
                )
            )}
          </div>
        )}
        {fullstack && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:w-[120rem] mt-24 gap-7 px-10 md:px-0 mb-44  ${
              fade ? "fade-in" : ""
            } ${post && "hidden"}`}
          >
            {projects.map(
              (projects, index) =>
                projects.type === "fullstack" && (
                  <div
                    className="imagedet "
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleMouseLeave}
                    key={projects.name}
                  >
                    {/*Project Hovering */}
                    {projectHovered === index && (
                      <div className="absolute top-[50%] left-[50%] z-[100] transform -translate-x-1/2 -translate-y-1/2 ">
                        <div className="posting flex flex-col w-full items-center justify-center">
                          <h1 className="text-4xl font-medium">
                            {projects.title}
                          </h1>
                          <p className="text-3xl pt-3 pb-20">
                            {projects.stack}
                          </p>
                          <button
                            className="w-[20rem] text-4xl  h-[5rem] border-2  border-[#00abf0] object-cover hover:cursor-pointer hover:bg-[#00abf0] hover:text-[#112e42]"
                            onClick={() => handlePosts(projects)}
                          >
                            LEARN MORE
                          </button>
                        </div>
                      </div>
                    )}
                    <Image
                      src={projects.folder}
                      alt={projects.name}
                      width={1920}
                      height={1080}
                      className="w-[45rem] h-[25rem]   border-[0.2px] border-[#00abf0] object-cover   hover:cursor-pointer hover:opacity-[0.2]"
                    />
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
