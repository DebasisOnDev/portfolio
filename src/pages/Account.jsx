import React from "react";
import pfimg from "../assets/pfimg.png";
import {
  BiLogoGoLang,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaArrowRight, FaPython, FaDocker, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { SiApachekafka, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className="  border-[0.01px] border-gray-700 w-full items-start justify-start px-1 flex flex-col h-full">
        <div className=" px-2 flex gap-2 border-[0.01px] border-gray-700  w-full h-2/6 ">
          <div className="  py-2 w-2/5 flex items-center h-full ">
            <div className="    border-4 border-gray-400 p-1  h-[120px] pimg w-[120px] rounded-full flex items-center justify-center bg-white"></div>
          </div>
          <div className=" flex flex-col  gap-2 justify-center  items-start text-white w-3/5 h-full ">
            <span className="  px-2 py-[2px] bg-slate-600 text-[13px] font-semibold rounded ">
              Debasis Rout
            </span>
            <span className=" px-2 py-[2px] bg-slate-600 text-[13px] font-semibold rounded ">
              debasisrout347@gmail.com
            </span>
            <span className=" px-2 py-[2px] bg-slate-600 text-[13px] font-semibold rounded ">
              Full Stack Software Engineer
            </span>
            <span className=" px-2 py-[2px] bg-slate-600 text-[13px] font-semibold rounded ">
              Golang Backend Engineer
            </span>
          </div>
        </div>
        <div className=" w-full h-1/6  ">
          <div className=" px-4   flex  items-center justify-center w-full h-1/2">
            <Link
              to="/js"
              className=" px-4 gap-2   w-full flex items-center justify-center  bg-slate-500 text-white text-base font-semibold rounded"
            >
              <RiJavascriptFill size={40} className=" text-yellow-300" />{" "}
              <span>Full Stack Profile</span>
            </Link>
          </div>
          <div className="flex  px-4  items-center justify-center w-full h-1/2">
            <Link
              to="/golang"
              className=" gap-2 w-full  flex items-center justify-center px-4  bg-slate-500 text-white text-base font-semibold rounded"
            >
              <BiLogoGoLang size={40} className=" text-blue-400" />{" "}
              <span>Golang Backend Profile</span>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col w-full px-2 h-3/6  ">
          <div className=" h-1/3 p-2 w-full flex gap-3 rounded">
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <RiJavascriptFill size={60} className=" text-white" />
            </div>
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <BiLogoGoLang size={60} className=" text-white" />
            </div>
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <BiLogoTypescript size={60} className=" text-white" />
            </div>
          </div>
          <div className=" h-1/3 p-2 w-full flex gap-3 rounded">
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <FaPython size={60} className=" text-white" />
            </div>
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <FaDocker size={60} className=" text-white" />
            </div>
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <FaReact size={60} className=" text-white" />
            </div>
          </div>
          <div className=" h-1/3 p-2 w-full flex gap-3 rounded">
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <DiNodejs size={60} className=" text-white" />
            </div>
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <SiTailwindcss size={60} className=" text-white" />
            </div>
            <div className=" h-full w-1/3  bg-slate-500 rounded flex items-center justify-center">
              <SiApachekafka size={60} className=" text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
