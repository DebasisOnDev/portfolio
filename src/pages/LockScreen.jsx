import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import lockgif from "../assets/lockgif.gif";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: "-80%" },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { ease: "easeInOut", duration: 0.5, delay: 0.2 },
  },
};

const LockScreen = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
      setDate(
        dateTime.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
      setTime(dateTime.toLocaleTimeString());
    }, 500);
    return () => clearInterval(intervalId);
  }, [dateTime]);

  return (
    <motion.div
      className="h-[80vh] flex-col lockscreen items-center justify-between bg-sky-300 text-white border-[4px] border-black flex "
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="pb-10 mb-[250px] flex-col gap-2 flex items-center justify-center w-full h-full">
        <span className="uppercase text-5xl font-semibold font-sans">
          {time}
        </span>
        <span className="font-sans font-semibold text-gray-400 text-lg">
          {date}
        </span>
      </div>
      <Link to="/home" className="flex items-center justify-center pb-6">
        <motion.img
          src={lockgif}
          className="animate-bounce h-20 w-20"
          whileHover={{ scale: 1.1 }}
        />
      </Link>
    </motion.div>
  );
};

export default LockScreen;
