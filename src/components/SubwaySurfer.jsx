import React from "react";
import ss from "../assets/ss.jpeg";

const SubwaySurfer = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-around flex flex-col h-full ">
        <img src={ss} className=" w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SubwaySurfer;
