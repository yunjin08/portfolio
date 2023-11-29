"use client";

import React from "react";
import Input from "<jed>/components/Input";
import { useState } from "react";

function Page() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <section>
      <div className="flex flex-col items-center justify-center -mt-10 md:mt-auto">
        <h1 className="abme text-6xl md:text-8xl font-bold mb-10 md:mb-20">
          Contact <span>Me!</span>{" "}
        </h1>
        <div className="flex w-[60%] border-2 rounded-xl border-[#00abf0] flex-col h-[40rem]">
          <div className="flex w-full items-center justify-center h-[10rem] gap-10">
            <Input placeholder={"Fullname"} />
            <Input placeholder={"Email Address"} />
          </div>
          <div className="flex w-full items-center justify-center h-[10rem]  gap-10">
            <Input placeholder={"Mobile Number"} />
            <Input placeholder={"Email Subject"} />
          </div>
          <div className="w-full relative h-[45%]">
            <input
              type="text"
              placeholder=""
              className="mb-2 w-[93.5%] ml-10 h-full  "
              onChange={handleInputChange}
            />
            <label
              className={`absolute top-1 left-11 text-gray-500 pointer-events-none ${
                inputValue ? "hidden" : ""
              }`}
            >
              Your Message...
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
