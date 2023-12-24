//import { FaCirclePlus } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const InternetExplorer = () => {
  const items = [
    "add to favorites",
    "find on page",
    "share page",
    "pin to start",
    "recent",
    "settings",
  ];
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className=" h-[74vh] w-full px-2 py-1  bg-black">
      <div className=" h-full w-full py-1">
        <div className=" h-1/6 flex items-center px-8 ">
          <div className=" p-6 w-full bg-gray-400 rounded"></div>
        </div>
        <div className=" h-2/6 flex w-full items-center justify-between px-8 ">
          <div className=" p-6 rounded bg-gray-400 "></div>
          <div className=" p-6 rounded bg-gray-400 "></div>
          <div className=" p-6 rounded bg-gray-400 "></div>
          <div className=" p-6 rounded bg-gray-400 "></div>
        </div>
        <div className="  relative flex flex-col justify-end items-end w-full  h-3/6 ">
          <div className=" flex uppercase w-full items-end  justify-end">
            <AnimatePresence>
              {isVisible && (
                <motion.ul
                  className=" bg-gray-400 py-7 my-auto flex items-end px-2 gap-1 flex-col justify-center w-full "
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.3 },
                    },
                    hidden: { opacity: 0, y: -20 },
                  }}
                >
                  {items.map((item, index) => (
                    <motion.li
                      className=" w-full  flex items-center  justify-center py-1 px-2 text-white bg-black border-[0.02px] rounded border-gray-400"
                      key={index}
                      variants={{ visible: { opacity: 1, y: 0 } }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className=" border-[0.01px] border-gray-500 bg-black text-white flex h-1/6 absolute bottom-0 items-end justify-between px-3 gap-2 w-full py-2 ">
            <CiCirclePlus size={32} />
            <div className=" flex gap-2 border-[0.02px] border-gray-400  rounded bg-gray-200">
              <input
                className=" p-1 focus:outline-none text-black "
                type="text"
              />
              <button className=" p-[2px] bg-black text-white">
                <GrSearch size={25} />
              </button>
            </div>
            <button
              onClick={handleButtonClick}
              className="flex items-center justify-center"
            >
              <BsThreeDots size={23} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetExplorer;
