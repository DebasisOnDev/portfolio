import { TbPlayerPlayFilled } from "react-icons/tb";

const Video = () => {
  return (
    <div className="h-[74vh] px-2 py-1 ">
      <div className=" w-full gap-1  items-start justify-start  flex flex-col h-full">
        <h1 className=" text-2xl font-semibold pl-4 pt-3 text-white ">
          Videos
        </h1>
        <div className=" w-full items-center justify-around  h-1/4 flex gap-1 ">
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
        </div>
        <div className=" w-full h-1/4 flex items-center justify-around gap-1 ">
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
        </div>
        <div className=" w-full h-1/4 flex items-center justify-around gap-1 ">
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
          <div className=" w-1/3 h-full bg-gray-400 rounded p-12 flex items-center justify-center">
            <TbPlayerPlayFilled
              size={25}
              className="   rounded-full bg-blue-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
