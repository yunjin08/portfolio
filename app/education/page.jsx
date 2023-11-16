import React from "react";

function page() {
  return (
    <section>
      <div className="flex items-center justify-center flex-col">
        <div className="font-bold text-8xl">
          My <span>Background</span>
        </div>
        <div className="flex w-full  text-3xl space-y-16 flex-col mt-32 justify-start items-start">
          <h1 className="text-6xl font-semibold pb-5">Education </h1>

          <div>
            <p>&#9634; 2010-2016</p>
            <p>Elementary Degree - General P. del Rosario Elementary School</p>
          </div>
          <div>
            <p>&#9634; 2016-2022</p>
            <p>High School Degree - Toledo City Science High School</p>
          </div>
          <div>
            <p>&#9634; 2022-Present</p>
            <p>College Degree - University of the Philippines Cebu </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
