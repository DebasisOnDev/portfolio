import "../fonts.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  MdPanoramaHorizontal,
  MdOutlineAlternateEmail,
  MdGroups,
} from "react-icons/md";
import { GiClick } from "react-icons/gi";

import { BsGrid1X2Fill, BsHeadphones } from "react-icons/bs";
import { FaVine, FaPhone } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { RxCamera } from "react-icons/rx";
import { GoMail } from "react-icons/go";
import { GrInternetExplorer } from "react-icons/gr";
import { FaLock } from "react-icons/fa6";
import {
  BsCloudsFill,
  BsMusicNoteBeamed,
  BsFillEmojiGrinFill,
} from "react-icons/bs";
import { BsGridFill } from "react-icons/bs";
import { PiVideo } from "react-icons/pi";

import { GrSkype } from "react-icons/gr";
import { AiFillPicture } from "react-icons/ai";
import { TfiCreditCard } from "react-icons/tfi";
import { GrGamepad } from "react-icons/gr";
import subwaysurfer from "../assets/subwaysurfer.jpeg";
import templerun from "../assets/templerun.jpeg";

import { RiMapPinLine } from "react-icons/ri";

import { TfiMicrosoftAlt } from "react-icons/tfi";
import { RiAccountCircleLine } from "react-icons/ri";
import trun from "../assets/trun.jpeg";
import trun2 from "../assets/trun1.jpeg";
import { motion } from "framer-motion";

import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import cod from "../assets/cod.jpg";
import word from "../assets/Word.svg";
import excel from "../assets/Excel.svg";
import outlook from "../assets/Outlook.svg";
import pp from "../assets/PowerPoint.svg";

const Home = () => {
  const music = [
    { icon: BsHeadphones, bg: "bg-blue-500", text: "text-blue-500" },
    { icon: BsMusicNoteBeamed, bg: "bg-violet-400", text: " text-violet-400" },
  ];

  const tiles = [
    { title: 1, content: templerun },
    { title: 2, content: trun },
    { title: 3, content: trun2 },
  ];

  const xboximg = [
    { xboxalt: "xbox image", img: cod },
    { xboxalt: "xbox image", img: g3 },
    { xboxalt: "xbox image", img: g4 },
  ];

  const [currentXboxIndex, setCurrentXboxImage] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);
  const [smallIconAngleRotation, setSmallIconAngleRotation] = useState(0);
  const [currentTileIndex, setCurrentTileIndex] = useState(0);
  const navigate = useNavigate();
  const [rotationAngle, setRotationAngle] = useState(0);
  const [mailIconRotation, setMailIconRotation] = useState(0);
  const mailicon = [
    { icon: GoMail, bg: "bg-blue-500", name: "Mail" },
    { icon: MdOutlineAlternateEmail, bg: "bg-violet-400", name: "" },

    { icon: GoMail, bg: "bg-sky-700", name: "" },
  ];

  const licon = [
    { sicon: "skype", aicon: "account", bg: "bg-blue-500" },
    { sicon: "group", aicon: "click", bg: "bg-violet-400" },
  ];

  const [bIconIndex, setBiconIndex] = useState(0);
  const [bIconRotation, setBIconRotation] = useState(0);
  const [micon, setMIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBiconIndex((prev) => (prev === licon.length - 1 ? 0 : prev + 1));
      setBIconRotation((prev) => prev + 180);
    }, 5000);
    return () => clearInterval(interval);
  }, [licon.length, bIconRotation]);
  useEffect(() => {
    const interval = setInterval(() => {
      // Change tile every 5 seconds (adjust as needed)
      setMusicIndex((prevIndex) =>
        prevIndex === music.length - 1 ? 0 : prevIndex + 1
      );
      setSmallIconAngleRotation((prev) => prev + 180);
    }, 6000);

    return () => clearInterval(interval);
  }, [music.length, smallIconAngleRotation]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change tile every 5 seconds (adjust as needed)
      setCurrentTileIndex((prevIndex) =>
        prevIndex === tiles.length - 1 ? 0 : prevIndex + 1
      );
      setRotationAngle((prev) => prev + 180);
    }, 10000);

    return () => clearInterval(interval);
  }, [tiles.length, rotationAngle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMIcon((prevIndex) =>
        prevIndex === mailicon.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentXboxImage((prev) =>
        prev === xboximg.length - 1 ? 0 : prev + 1
      );
      setMailIconRotation((prev) => prev + 180);
    }, 8000);

    return () => clearInterval(interval);
  }, [mailicon.length, mailIconRotation]);

  return (
    <div className=" w-full h-[74vh]  flex    rounded-md      ">
      <div className="  rounded-lg shadow-sm     h-full w-full flex flex-col">
        <div className=" flex px-2 py-[2px] flex-col items-center  bg-black justify-center w-full h-[100%]">
          <div className=" h-full  bg-black flex  gap-1  border-[0.01px] border-gray-400 w-full">
            <div className=" w-1/3 h-full flex gap-1 flex-col">
              <motion.div
                transition={{ duration: 0.7 }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: smallIconAngleRotation }}
                className=" h-1/6 w-full bg-blue-500 flex   justify-center items-center"
              >
                <div
                  onClick={() => navigate("/explorer")}
                  className={` flex items-center relative h-full w-full ${music[musicIndex].bg}  p-2 `}
                >
                  {music[musicIndex].bg === "bg-blue-500" ? (
                    <GrInternetExplorer
                      size={50}
                      className="text-white flex  justify-center w-full items-center"
                    />
                  ) : (
                    <BsFillEmojiGrinFill
                      size={50}
                      className="text-white flex justify-center w-full items-center"
                    />
                  )}
                  {music[musicIndex].bg === "bg-blue-500" ? (
                    <div className=" absolute pl-1  text-[10px] text-white left-0 bottom-0 ">
                      Internet Explorer
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </motion.div>

              <Link
                to="/camera"
                className=" relative h-1/6 w-full justify-center bg-blue-500 flex items-center p-2 "
              >
                <RxCamera size={55} className=" text-white" />
                <div className=" absolute pl-1 text-[11px] text-white left-0 bottom-0 ">
                  Camera
                </div>
              </Link>
              <motion.div
                transition={{ duration: 0.7 }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: mailIconRotation }}
                className=" h-1/6 w-full   "
              >
                <div
                  onClick={() => navigate("/mail")}
                  className={`h-full relative w-full ${mailicon[micon].bg} flex justify-center items-center p-2 `}
                >
                  <GoMail size={55} className=" text-white" />
                  <div className=" absolute pl-1 text-[11px]  text-white  left-0 bottom-0 ">
                    {mailicon[micon].name === "" ? "" : "Mail"}
                  </div>
                </div>
              </motion.div>

              <div className=" h-1/6 w-full  flex gap-1 flex-col items-center py-[2px]  justify-center  ">
                <div className=" w-full h-1/2 flex gap-1">
                  <Link
                    to="/excel"
                    className="  w-1/2 h-full flex items-center justify-center  bg-white "
                  >
                    <img
                      src={excel}
                      className=" w-full h-full object-contain"
                    />
                  </Link>
                  <Link
                    to="/word"
                    className="  w-1/2 flex items-center justify-center h-full bg-white "
                  >
                    <img src={word} className=" w-full h-full object-contain" />
                  </Link>
                </div>
                <div className=" w-full h-1/2 flex gap-1">
                  <Link
                    to="/powerpoint"
                    className="  flex items-center justify-center w-1/2 h-full bg-white  "
                  >
                    <img src={pp} className=" w-full h-full object-contain" />
                  </Link>
                  <Link
                    to="/outlook"
                    className="  w-1/2 h-full flex items-center justify-center bg-white "
                  >
                    <img
                      src={outlook}
                      className=" w-full h-full object-contain"
                    />
                  </Link>
                </div>
              </div>
              <Link
                to="/onedrive"
                className=" relative h-1/6 justify-center w-full  bg-blue-500 flex items-center p-2 "
              >
                <BsCloudsFill size={55} className=" text-white" />
                <div className=" absolute pl-1 text-[11px] text-white left-0 bottom-0 ">
                  OneDrive
                </div>
              </Link>
              <motion.div
                transition={{ duration: 0.7 }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: bIconRotation }}
                className={` ${licon[bIconIndex].bg}  h-1/6 relative w-full flex items-center justify-center p-2 bg-blue-500 `}
              >
                <div
                  onClick={() => navigate("/skype")}
                  className={` h-full flex items-center justify-center  w-full   `}
                >
                  {licon[bIconIndex].sicon === "skype" ? (
                    <GrSkype size={55} className=" text-white" />
                  ) : (
                    <MdGroups size={55} className=" text-white" />
                  )}
                  {licon[bIconIndex].sicon === "skype" ? (
                    <div className=" absolute pl-1 text-[11px] text-white left-0 bottom-0 ">
                      Skype
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </motion.div>
            </div>
            <div className=" w-2/3 flex flex-col gap-1 h-full">
              <Link
                to="/storyteller"
                className={` text-gray-400 duration-500 transition-all relative w-full gap-1 h-1/6  flex items-center justify-center  cover `}
              >
                <BsGrid1X2Fill size={30} />
                <span className=" absolute pl-2 pb-1 left-0 bottom-0 text-white text-[11px]">
                  Storyteller
                </span>
                <BsGridFill size={35} />
              </Link>
              <div className=" w-full flex gap-1 flex-col h-1/4  ">
                <div className=" h-1/3 w-full flex gap-1 ">
                  <motion.div
                    transition={{ duration: 0.7 }}
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: smallIconAngleRotation }}
                    className=" w-1/4 h-full items-center flex justify-center  "
                  >
                    <div
                      onClick={() => navigate("/photo")}
                      to="/photo"
                      className=" w-full h-full items-center flex justify-center  p-2 bg-violet-400"
                    >
                      <AiFillPicture size={30} className=" text-white" />
                    </div>
                  </motion.div>

                  <Link
                    to="/video"
                    className=" w-1/4 h-full flex items-center justify-center bg-blue-500 "
                  >
                    <PiVideo size={30} className=" text-white" />
                  </Link>
                  <motion.div
                    transition={{ duration: 0.7 }}
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: smallIconAngleRotation }}
                    className={`${music[musicIndex].bg} w-1/4 flex items-center justify-center `}
                  >
                    <div
                      onClick={() => navigate("/panoroma")}
                      to="/panoroma"
                      className=" w-full h-full flex items-center justify-center "
                    >
                      <MdPanoramaHorizontal className=" text-white" size={30} />
                    </div>
                  </motion.div>

                  <Link
                    to="/card"
                    className=" w-1/4 flex items-center justify-center h-full bg-blue-500"
                  >
                    <TfiCreditCard className=" text-white" size={26} />
                  </Link>
                </div>
                <Link
                  to="/calender"
                  className={` h-2/3 ${mailicon[micon].bg}  duration-500 transition-all`}
                >
                  <div className=" h-full w-full flex items-center justify-around text-white text-[12px] pl-3 pt-1">
                    <div>
                      <FaCalendarDays size={50} className="text-white " />
                    </div>
                    <div className=" text-white flex flex-col text-[10px]">
                      <span>Do some groceries</span>
                      <span>Go to office</span>
                    </div>
                  </div>
                  {/* <div className=" px-2 h-1/3 flex justify-between items-end pb-1 w-full">
                    <span className=" text-[11px] text-white font-semibold ">
                      Calender
                    </span>
                  </div> */}
                </Link>
              </div>
              <div className=" w-full h-1/4 flex flex-col gap-1 ">
                <div className=" w-full h-1/3 flex gap-1 ">
                  <motion.div
                    onClick={() => navigate("/games")}
                    transition={{ duration: 0.7 }}
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: smallIconAngleRotation }}
                    className={` w-1/4 h-full flex items-center justify-center ${music[musicIndex].bg}`}
                  >
                    <GrGamepad className=" text-white " size={35} />
                  </motion.div>
                  <Link to="/subway" className=" w-1/4 h-full bg-violet-400  ">
                    <img className=" h-full w-full  " src={subwaysurfer} />
                  </Link>
                  <motion.div
                    transition={{ duration: 0.7 }}
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: rotationAngle }}
                    onClick={() => navigate("/templerun")}
                    className=" w-1/4 h-full bg-violet-400"
                  >
                    <img
                      src={tiles[currentTileIndex].content}
                      className=" object-cover w-full h-full"
                    />
                  </motion.div>

                  <Link
                    to="/vine"
                    className=" w-1/4 h-full bg-violet-400 flex items-center justify-center"
                  >
                    <FaVine className=" text-white " size={35} />
                  </Link>
                </div>
                <div className=" w-full flex gap-1  h-2/3 ">
                  <Link
                    to="/maps"
                    className=" relative flex items-center justify-center w-1/2 h-auto bg-sky-700"
                  >
                    <RiMapPinLine className=" text-white " size={55} />
                    <div className=" absolute pl-1 text-[10px] text-white left-0 bottom-0 ">
                      HERE Maps
                    </div>
                  </Link>
                  <motion.div
                    transition={{ duration: 0.7 }}
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: bIconRotation }}
                    //{` ${licon[bIconIndex].bg}`}
                    className={` ${licon[bIconIndex].bg} relative flex items-center justify-center w-1/2 h-auto`}
                  >
                    <div
                      onClick={() => navigate("/account")}
                      className=" relative flex items-center justify-center w-full h-full "
                    >
                      {licon[bIconIndex].aicon === "account" ? (
                        <RiAccountCircleLine
                          size={55}
                          className=" text-white"
                        />
                      ) : (
                        <GiClick size={55} className=" text-white" />
                      )}
                      {licon[bIconIndex].aicon === "account" ? (
                        <div className=" absolute pl-1 text-[11px] text-white left-0 bottom-0 ">
                          Account
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.div
                key={currentXboxIndex}
                transition={{
                  duration: 1.5,

                  type: "spring",
                }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                onClick={() => navigate("/xbox")}
                className="  w-full h-1/6 "
              >
                <img
                  src={xboximg[currentXboxIndex].img}
                  alt={xboximg[currentTileIndex].xboxalt}
                  className=" h-full    object-fill  w-full "
                />
              </motion.div>
              <div className=" w-full h-[55px] flex gap-1 ">
                <div className=" w-1/2 flex h-full  gap-1">
                  <motion.div
                    transition={{ duration: 0.7 }}
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: rotationAngle * 2 }}
                    className=" w-1/2 flex items-center bg-blue-500 justify-center"
                  >
                    <div
                      onClick={() => navigate("/windows")}
                      className=" w-full flex items-center justify-center  "
                    >
                      <TfiMicrosoftAlt className=" text-white" size={30} />
                    </div>
                  </motion.div>

                  <motion.div
                    transition={{ duration: 0.7 }}
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: smallIconAngleRotation }}
                    className=" w-1/2 flex items-center"
                  >
                    <div
                      onClick={() => navigate("/music")}
                      className={`flex items-center h-full w-full justify-center ${music[musicIndex].bg} `}
                    >
                      {music[musicIndex].bg === "bg-blue-500" ? (
                        <BsHeadphones className=" text-black  " size={35} />
                      ) : (
                        <BsMusicNoteBeamed
                          className="  rotate-180 text-black "
                          size={35}
                        />
                      )}
                    </div>
                  </motion.div>
                </div>
                <div className=" flex gap-1 items-center justify-center w-1/2  h-full">
                  <Link
                    to="/"
                    className={` ${licon[bIconIndex].bg} flex transition-all duration-700 items-center justify-center w-1/2  h-full`}
                  >
                    <FaLock className=" text-white" size={35} />
                  </Link>
                  <Link
                    to="/phone"
                    className=" flex bg-blue-500 items-center justify-center w-1/2  h-full"
                  >
                    <FaPhone className=" text-white" size={35} />
                  </Link>
                </div>
              </div>
              <div
                className={` ${mailicon[micon].bg} duration-700 transition-all h-3 bg-green-600`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
////bg-[#004C9A]
