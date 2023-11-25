"use client";
import { projects } from "/files";
import { useState } from "react";

function Posts({ post, setPosts }) {
  const handlePost = () => {
    setPosts(false);
  };
  return (
    <div className="posts absolute z-[500] w-[80vw] h-[90vh] bg-red-500">
      <div className="flex ">
        <div className="w-[60%]">s</div>
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
