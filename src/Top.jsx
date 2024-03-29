const Top = () => {
  return (
    <div className=" bg-black   flex flex-col gap-1 items-center justify-center w-full h-[8%] pt-1 py-1 rounded-t-lg">
      <div className="  pb-2 flex items-center w-full relative  flex-col">
        <span className=" flex items-start absolute left-5 top-2 rounded-full h-3 w-3 bg-gray-800 shadow-gray-400 shadow-sm  ">
          <span className=" h-1 flex bg-gray-600 absolute left-[4px] top-[4px] shadow-md shadow-gray-300  items-center justify-center rounded-full  w-1 "></span>
        </span>
        <span className=" px-4 rounded w-20 py-[2px] border-gray-500 flex items-center justify-center border-[1px] ">
          <span className=" shadow-sm shadow-gray-600  py-[1px] px-3 w-full bg-gray-700 bg-opacity-60"></span>
        </span>
        <span className=" tracking-wider pt-1 font-semibold text-base text-gray-400 logo">
          NOKIA
        </span>
      </div>
    </div>
  );
};

export default Top;
