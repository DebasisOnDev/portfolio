const Top = () => {
  return (
    <div className=" bg-black   flex flex-col gap-1 items-center justify-center w-full h-[10%] pt-3 py-3 rounded-t-lg">
      <div className="  pb-3 flex items-center w-full relative  flex-col">
        <span className=" flex items-start absolute left-5 top-0 rounded-full h-3 w-3 bg-gray-800 shadow-gray-400 shadow-sm  ">
          <span className=" h-1 flex bg-gray-600 absolute left-[4px] top-[4px] shadow-md shadow-gray-300  items-center justify-center rounded-full  w-1 "></span>
        </span>
        <span className=" px-4 rounded w-20 py-[2px] border-gray-500 border-[1px] "></span>
        <span className=" tracking-wider pt-1 font-semibold text-base text-gray-400 logo">
          NOKIA
        </span>
      </div>
    </div>
  );
};

export default Top;
