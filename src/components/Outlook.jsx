import outlook from "../assets/Outlook_64x64.svg";

const Outlook = () => {
  return (
    <div className=" h-[74vh] px-2 py-1 ">
      <div className=" w-full items-start justify-around flex flex-col h-full">
        <img
          src={outlook}
          className=" animate-pulse duration-800 transition-all"
        />
        <div className=" flex flex-col gap-3 w-full">
          <h1 className=" flex items-center justify-center w-full text-2xl text-white font-semibold">
            Microsoft Outlook
          </h1>
          <div className=" flex w-full items-center  justify-center gap-4 ">
            <input type="checkbox" className=" " />
            <span className=" text-blue-500"> Terms and Conditions</span>
          </div>
          <button className="  text-lg text-blue-500 underline flex items-center justify-center w-full">
            Try It
          </button>
        </div>
      </div>
    </div>
  );
};

export default Outlook;
