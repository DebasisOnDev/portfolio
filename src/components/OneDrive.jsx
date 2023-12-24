import oned from "../assets/oned.webp";
import onedrive from "../assets/OneDrive.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

const OneDrive = () => {
  return (
    <div className=" h-[74vh] px-2 py-1 ">
      <div className="  w-full items-start gap-4 bg-white justify-around flex flex-col h-full border-[0.01px] border-gray-300">
        <div className=" h-1/3 flex flex-col gap-3 w-full">
          <img src={oned} className=" w-full h-full object-cover" />
        </div>
        <div className=" h-2/3 px-2 flex flex-col gap-3 font-sans items-start justify-center  w-full ">
          <div className=" text-slate-600 text-lg font-semibold ">
            Securely save and share what’s important with OneDrive
          </div>
          <div className=" text-slate-600 text-base font-semibold">
            Keep your files and memories protected, up to date, and easily
            accessible across all your devices.
          </div>
          <div className=" flex gap-4 w-full items-center justify-around">
            <button className=" w-1/2 px-5 py-1 font-semibold text-white bg-blue-500 rounded ">
              Sign in
            </button>
            <button className=" w-1/2 px-5 py-1 font-semibold text-blue-500 bg-white border-2 rounded border-blue-500">
              Try for free
            </button>
          </div>
          <div className=" flex gap-1 text-blue-500 items-center justify-center">
            <span className=" text-lg font-semibold">
              See plans and pricing
            </span>
            <MdKeyboardArrowRight size={25} />
          </div>
          <img
            src={onedrive}
            className="  mx-auto  h-2/3 flex items-center justify-center  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OneDrive;
