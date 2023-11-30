import React from "react";

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder="Email Address"
      className="w-[45%] h-24 flex items-start text-black pb-20 flex-nowrap"
    />
  );
}

export default Input;
