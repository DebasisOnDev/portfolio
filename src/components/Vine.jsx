import React from "react";
import vine from "../assets/vine-logo-removebg-preview.png";
const Vine = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-around flex bg-green-400 flex-col h-full ">
        <img src={vine} className=" w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Vine;
