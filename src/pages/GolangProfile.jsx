import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import { Link } from "react-router-dom";

const GolangProfile = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-start flex flex-col h-full">
        <h1 className=" text-2xl font-semibold text-white p-3 "> Projects:</h1>
        <div className=" relative px-2 text-white h-full w-full flex flex-col gap-4">
          <Link
            to="https://github.com/DebasisOnDev/e-commerce-backend-golang"
            className=" py-1 px-1 border-gray-400 border-[0.01px] flex flex-col rounded gap-2"
          >
            <div className=" w-full flex items-center justify-center h-10 bg-gray-400 rounded border-gray-300 border-[0.01px] ">
              E-Commerce System
            </div>
            <div className=" w-full px-2 flex  gap-1.5 flex-wrap">
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Authentication
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Gofiber
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Versioning
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                MongoDB
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Docker
              </span>
            </div>
          </Link>
          <Link
            to="https://github.com/DebasisOnDev/Online-Doctor-Appointment-System"
            className=" py-1 px-1 border-gray-400 border-[0.01px] flex flex-col rounded gap-2"
          >
            <div className=" w-full flex items-center justify-center h-10 bg-gray-400 rounded border-gray-300 border-[0.01px] ">
              Online Doctor Authentication System
            </div>
            <div className=" w-full px-2 flex  gap-1.5 flex-wrap">
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Authentication
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Gofiber
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Versioning
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                MongoDB
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Docker
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                RBAC
              </span>
            </div>
          </Link>
          <Link
            to="https://github.com/DebasisOnDev/Hotel-Reservation-System"
            className=" py-1 px-1 border-gray-400 border-[0.01px] flex flex-col rounded gap-2"
          >
            <div className=" w-full flex items-center justify-center h-10 bg-gray-400 rounded border-gray-300 border-[0.01px] ">
              Hotel Booking System
            </div>
            <div className=" w-full px-2 flex  gap-1.5 flex-wrap">
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Authentication
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Gofiber
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Versioning
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                MongoDB
              </span>
              <span className=" px-1 py-[1px] bg-gray-400 rounded text-[12px] text-white ">
                Docker
              </span>
            </div>
          </Link>
          <div className=" absolute bottom-0 flex flex-col gap-3">
            <span className=" font-semibold">
              Open to work for intern and junior positions
            </span>
            <div className=" flex items-center justify-center  gap-3">
              <span className=" font-semibold ">Contact me at:</span>
              <div className=" flex  items-center justify-center gap-3">
                <Link
                  to="https://www.linkedin.com/in/debasis-rout-97b965228/"
                  className=" p-1.5 bg-slate-300 rounded flex items-center justify-center"
                >
                  <FaLinkedin size={30} className=" text-blue-500" />
                </Link>
                <Link
                  to="https://twitter.com/@PeacemakerOO7"
                  className=" p-1.5 bg-slate-300 rounded flex items-center justify-center"
                >
                  <RiTwitterXFill size={30} className=" text-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GolangProfile;
