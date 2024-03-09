import React from "react";

function ChangeStackModal(props) {
  const { all, frontend, fullstack, setAll, setFrontend, setFullstack } = props;
  return (
    <div className="w-full flex mt-[5rem] text-2xl sm:text-4xl md:text-5xl xl:text-[3.5rem] font-medium items-center justify-center gap-1 sm:gap-5">
      <div
        onClick={() => {
          setAll(true);
          setFrontend(false);
          setFullstack(false);
        }}
        className={`text-center w-[8rem] sm:w-[16rem]  md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
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
        className={`text-center w-[8rem] sm:w-[16rem]  md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
          frontend && "bg-[#112e42] border-[#00abf0] object-cover border-2"
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
        className={`text-center w-[8rem] sm:w-[16rem] md:w-[20rem] xl:w-[24rem] hover:cursor-pointer ${
          fullstack && "bg-[#112e42] border-[#00abf0] object-cover border-2"
        }`}
      >
        Full Stack
      </div>
    </div>
  );
}

export default ChangeStackModal;
