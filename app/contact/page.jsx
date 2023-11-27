import React from "react";

function Page() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center -mt-10 md:mt-auto">
        <h1 className="abme text-6xl md:text-8xl font-bold mb-10 md:mb-20">
          Contact <span>Me!</span>{" "}
        </h1>
        <div className="flex w-[60%] bg-red-500 flex-col h-[40rem]">
          <div className="flex w-full items-center justify-center h-full">
            <div className="w-[45%] bg-pink-300 h-[10%]">Fullname</div>
            <div className="w-[45%] h-5">Email Address</div>
          </div>
          <div className="flex w-full items-center justify-center h-full">
            <div className="w-[45%] bg-pink-300 h-[10%]">Mobile Number</div>
            <div className="w-[45%] h-5">Email Subject</div>
          </div>
          <input type="text" placeholder="Your Message" />
        </div>
      </div>
    </section>
  );
}

export default Page;
