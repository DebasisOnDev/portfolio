import React from "react";
import music from "../assets/listening music.gif";
const Music = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-start flex flex-col h-full ">
        <div className=" snowfall flex items-center justify-center w-full h-full ">
          <img
            src={music}
            className=" duration-300 transition-all object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Music;
