"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "<jed>/constants/files";
import Posts from "<jed>/components/generics/Posts";
import ProjectsContent from "<jed>/components/generics/ProjectsContent";
import ChangeStackModal from "<jed>/components/generics/ChangeStackModal";

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
    <section className="relative overflow-x-hidden">
      <div
        className={` posting min-h-[90rem] relative flex w-full flex-col items-center  ${
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
          <div className="w-full flex mt-[5rem] border-2 border-[#1e4859] text-2xl sm:text-3xl  xl:text-[2.5rem] font-medium items-center justify-center gap-1 sm:gap-5">
            <div
              onClick={() => {
                setAll(true);
                setFrontend(false);
                setFullstack(false);
              }}
              className={`text-center w-[8rem] sm:w-[16rem] py-2 md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
                all && "bg-[#112e42] border-[#00abf0] object-cover border-2"
              }`}
            >
              All
            </div>
            <div
              onClick={() => {
                if (!frontend) {
                  setFrontend((prevState) => !prevState);
                  setAll(false);
                  setFullstack(false);
                }
              }}
              className={`text-center w-[8rem] sm:w-[16rem] py-2 md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
                frontend &&
                "bg-[#112e42] border-[#00abf0] object-cover border-2"
              }`}
            >
              Frontend
            </div>
            <div
              onClick={() => {
                if (!fullstack) {
                  setFullstack((prevState) => !prevState);
                  setAll(false);
                  setFrontend(false);
                }
              }}
              className={`text-center w-[8rem] sm:w-[16rem] py-2 md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
                fullstack &&
                "bg-[#112e42] border-[#00abf0] object-cover border-2"
              }`}
            >
              Full Stack
            </div>
          </div>
        </div>

        {all && (
          <ProjectsContent
            post={post}
            projects={projects}
            handleMouseLeave={handleMouseLeave}
            projectHovered={projectHovered}
            handlePosts={handlePosts}
            handleHover={handleHover}
            projectType="all"
            fade={fade}
          />
        )}

        {frontend && (
          <ProjectsContent
            post={post}
            projects={projects}
            handleMouseLeave={handleMouseLeave}
            projectHovered={projectHovered}
            handlePosts={handlePosts}
            handleHover={handleHover}
            projectType="frontend"
            fade={fade}
          />
        )}
        {fullstack && (
          <ProjectsContent
            post={post}
            projects={projects}
            handleMouseLeave={handleMouseLeave}
            projectHovered={projectHovered}
            handlePosts={handlePosts}
            handleHover={handleHover}
            projectType="fullstack"
            fade={fade}
          />
        )}
      </div>
    </section>
  );
}

export default Portfolio;
