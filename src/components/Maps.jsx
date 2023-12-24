import { FaMapMarked } from "react-icons/fa";

const Maps = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className="  w-full items-start justify-around flex flex-col h-full">
        <div className="maps w-full h-full flex items-center justify-center">
          <FaMapMarked
            size={75}
            className=" animate-pulse duration-700 transition-all text-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Maps;
