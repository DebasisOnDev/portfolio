import { AiFillWindows } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Bottom = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex items-center justify-around text-3xl text-white bg-black rounded-b-lg  w-full h-[12%] px-2  py-4">
      <button onClick={() => navigate(-1)}>
        <FaArrowLeftLong />
      </button>
      <Link to="/home">
        <AiFillWindows />
      </Link>
      <div>
        <IoSearch />
      </div>
    </div>
  );
};

export default Bottom;
