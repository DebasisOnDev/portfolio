import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import { CgMenuRound } from "react-icons/cg";

const Storyteller = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className="  w-full items-start justify-around flex flex-col h-full ">
        <div className=" w-full bg-white flex flex-col gap-3 px-4 py-1 h-1/6">
          <h1 className=" text-2xl font-semibold">STORYTELLER</h1>
          <h1 className=" text-4xl font-semibold text-gray-700">
            timeline places
          </h1>
        </div>
        <div className=" w-full h-4/6 flex bg-white px-2 gap-2">
          <div className=" w-1/3 flex flex-col gap-1 h-full bg-white ">
            <div className=" h-1/4 w-full border-gray-400 border-[0.01px] ">
              <img src={img1} className=" object-contain" />
            </div>
            <div className=" h-1/4 w-full border-gray-400 border-[0.01px] ">
              <img src={img2} className=" object-contain" />
            </div>
            <div className=" h-1/4 w-full border-gray-400 border-[0.01px] ">
              <img src={img3} className=" object-contain" />
            </div>
            <div className=" h-1/4 w-full border-gray-400 border-[0.01px] ">
              <img src={img4} className=" object-contain" />
            </div>
          </div>
          <div className=" w-2/3 flex gap-1 flex-col  h-full">
            <div className=" relative h-1/3 w-full border-gray-400 border-[0.01px] ">
              <img src={img5} className=" w-full h-full object-cover" />
              <div className=" absolute bottom-0 left-0 px-4 text-white font-semibold text-lg">
                {" "}
                October 23
              </div>
            </div>
            <div className=" relative h-1/3 w-full border-gray-400 border-[0.01px] ">
              <img src={img6} className="  w-full h-full object-cover" />
              <div className=" absolute bottom-0 left-0 px-4 text-white font-semibold text-lg">
                {" "}
                November 23
              </div>
            </div>
            <div className="  h-1/3 w-full border-gray-400 border-[0.01px] ">
              <img src={img7} className="  w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center relative bg-white w-full h-1/6 ">
          <div className=" absolute py-2 bottom-0">
            <CgMenuRound size={55} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storyteller;
