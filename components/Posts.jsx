"use client";
import { projects } from "/files";
import { useState } from "react";
import Image from "next/image";

function Posts({ post, setPosts, content, setContent }) {
  const handlePost = () => {
    setPosts(false);
    setContent({});
  };
  return (
    <div className="posts absolute z-[500] w-[80vw] h-[70vh] bg-red-500">
      <div className="flex ">
        <div className="w-[60%] h-[69vh]">
          <Image
            src={content.folder}
            alt={content.name}
            width={1920}
            height={1080}
            className="pt-2 pl-2 w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center pt-[8rem] relative w-[40%]">
          {/* Exit bar */}
          <i
            class="bx bx-minus absolute top-3 right-2 text-6xl border-2 border-[#1e547a] font-bold hover:cursor-pointer"
            onClick={handlePost}
          ></i>

          <h1 className="text-7xl font-bold">{content.title}</h1>
          <p className="text-3xl pt-2 border-b-[1px] pb-10 w-[90%] text-center border-[#5196b1]">
            {content.stack}
          </p>

          <p className="text-justify px-5 pt-16 text-3xl indent-20">
            {content.description}
          </p>
          <button className="flex items-center justify-center px-[2rem] py-5 mt-10  hover:cursor-pointer duration-[400ms] bg-[#00abf0] hover:bg-transparent text-[#112e42] hover:text-white gap-3">
            <i class="bx bx-link-external text-4xl"></i>
            <p className="text-3xl ">View Site</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
