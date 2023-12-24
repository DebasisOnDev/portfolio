import { TbBluetooth } from "react-icons/tb";
import { LuWifi } from "react-icons/lu";
import { MdNotificationsActive } from "react-icons/md";
import { TbMobiledata } from "react-icons/tb";
import { Md3GMobiledata } from "react-icons/md";
import { FaBatteryHalf } from "react-icons/fa";
import { useState, useEffect } from "react";

const DisplayTop = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDateTime(now);
      setHour(now.getHours().toString().padStart(2, "0")); // Format hour with leading zero if needed
      setMinute(now.getMinutes().toString().padStart(2, "0")); // Format minute with leading zero if needed
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className=" border-t-[0.01px]   border-gray-600 h-3 flex items-center bg-black py-3  text-white justify-between px-4 text-xl w-full">
      <div className=" flex gap-3">
        <Md3GMobiledata className=" text-2xl" />
        <TbMobiledata />
      </div>
      <div className=" flex gap-3">
        <LuWifi />
        <TbBluetooth />
        <MdNotificationsActive />
      </div>
      <div className=" flex gap-3 items-center justify-center ">
        <FaBatteryHalf className=" text-2xl" />
        <span className=" text-base"> {hour + ":" + minute}</span>
      </div>
    </div>
  );
};

export default DisplayTop;
