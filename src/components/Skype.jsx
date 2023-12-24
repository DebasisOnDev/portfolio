import React from "react";
import { AiOutlineSkype } from "react-icons/ai";
import { FaWindows } from "react-icons/fa";

import skype from "../assets/skype-2.gif";
const Skype = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" bg-sky-500 w-full items-start justify-around flex flex-col h-full ">
        <div className=" items-center px-4 gap-6 py-6 w-full h-full flex flex-col">
          <img src={skype} />
          <div className=" flex items-center justify-center px-3 text-base font-semibold text-white py-3">
            You're ready to get started. Just use the same Microsoft account you
            used to setup this phone.
          </div>
          <button className=" w-2/3 px-4 py-1 bg-sky-900 text-white rounded-full font-semibold ">
            Sign in
          </button>
          <div className="  py-8 ">
            <FaWindows size={50} className="  text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skype;
