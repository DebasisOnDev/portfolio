import excellg from "../assets/Excel_64x64.svg";
const Excel = () => {
  return (
    <div className=" h-[74vh] px-2 py-1 ">
      <div className=" w-full items-start justify-around flex flex-col h-full ">
        <img
          src={excellg}
          className=" animate-pulse duration-500 transition-all"
        />
        <div className=" flex flex-col gap-3 w-full">
          <h1 className=" flex items-center justify-center w-full text-2xl text-white font-semibold">
            Microsoft Excel
          </h1>
          <div className=" flex w-full items-center  justify-center gap-4 ">
            <input type="checkbox" className=" " />
            <span className=" text-green-400"> Terms and Conditions</span>
          </div>
          <button className="  text-lg text-green-500 underline flex items-center justify-center w-full">
            Try It
          </button>
        </div>
      </div>
    </div>
  );
};

export default Excel;
