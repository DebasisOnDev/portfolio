import React from "react";
import windows from "../assets/Windows.gif";

const Windows = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-start flex flex-col h-full ">
        <div className=" flex items-center justify-center w-full h-full bg-blue-500">
          <img src={windows} />
        </div>
      </div>
    </div>
  );
};

export default Windows;
