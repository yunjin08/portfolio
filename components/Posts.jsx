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
        <div className="flex flex-col relative w-[40%]">
          <div>Posts</div>
          <i
            class="bx bx-minus absolute top-3 right-2 text-6xl border-2 border-[#1e547a] font-bold hover:cursor-pointer"
            onClick={handlePost}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Posts;
