import React from "react";
import music from "../assets/listening music.gif";
const Music = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-start flex flex-col h-full ">
        <div className=" flex items-center justify-center w-full h-full bg-blue-500">
          <img src={music} />
        </div>
      </div>
    </div>
  );
};

export default Music;
