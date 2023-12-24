import React from "react";
import pan1 from "../assets/pan1.jpg";
import pan2 from "../assets/pan2.jpg";
import pan3 from "../assets/pan3.jpg";
import pan4 from "../assets/pan4.jpg";
const Panoroma = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-start flex gap-2 flex-col h-full">
        <h1 className=" text-2xl font-semibold pl-4 pt-3 text-white ">
          Panoroma
        </h1>
        <div className=" w-full h-auto px-1 ">
          <img src={pan1} className=" object-contain" />
        </div>
        <div className=" w-full h-auto px-1 ">
          <img src={pan2} className=" object-contain" />
        </div>
        <div className=" w-full h-auto px-1 ">
          <img src={pan3} className=" object-contain" />
        </div>
        <div className=" w-full h-auto px-1 ">
          <img src={pan4} className=" object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Panoroma;
