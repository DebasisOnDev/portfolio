import React from "react";
import pp from "../assets/PowerPoint_64x64.svg";

const PowerPoint = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-around flex flex-col h-full border-[0.01px] border-gray-300">
        <img src={pp} className=" animate-pulse duration-500 transition-all" />
        <div className=" flex flex-col gap-3 w-full">
          <h1 className=" flex items-center justify-center w-full text-2xl text-white font-semibold">
            Microsoft PowerPoint
          </h1>
          <div className=" flex w-full items-center  justify-center gap-4 ">
            <input type="checkbox" className=" " />
            <span className=" text-orange-500"> Terms and Conditions</span>
          </div>
          <button className="  text-lg text-orange-500 underline flex items-center justify-center w-full">
            Try It
          </button>
        </div>
      </div>
    </div>
  );
};

export default PowerPoint;
