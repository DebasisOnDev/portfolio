import { BsCamera } from "react-icons/bs";
import {
  MdCameraswitch,
  MdOutlinePermCameraMic,
  MdOutlineVideoCameraFront,
} from "react-icons/md";
import { TbCameraBolt, TbCameraStar } from "react-icons/tb";
import { LuCameraOff } from "react-icons/lu";

const Camera = () => {
  return (
    <div className=" flex h-[80vh] w-full px-2 py-1 ">
      <div className=" relative camera w-full h-full  ">
        <div className=" absolute h-auto w-full top-0 flex items-center justify-around px-4 py-3">
          <span className=" opacity-70 border-2 border-white p-2 rounded-full bg-transparent   text-white ">
            <MdOutlinePermCameraMic size={25} />
          </span>
          <span className="   opacity-70 border-2 border-white p-2 rounded-full bg-transparent   text-white ">
            <MdOutlineVideoCameraFront size={25} />
          </span>
          <span className="  opacity-70 border-2 border-white p-2 rounded-full bg-transparent   text-white ">
            <TbCameraStar size={25} />
          </span>
          <span className="  opacity-70 border-2 border-white p-2 rounded-full bg-transparent   text-white ">
            <LuCameraOff size={25} />
          </span>
        </div>
        <div className="  opacity-70 absolute w-full h-auto flex items-center justify-around bottom-0 px-4 py-3">
          <span className=" border-2 border-white p-2 rounded-full bg-transparent   text-white ">
            <MdCameraswitch size={25} />
          </span>
          <span className="  opacity-70 border-2 border-white p-2 rounded-full bg-transparent   text-white ">
            <BsCamera size={40} />
          </span>

          <span className="  opacity-70 border-2 border-white p-2 rounded-full bg-transparent   text-white ">
            <TbCameraBolt size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Camera;
