const Mail = () => {
  return (
    <div className=" h-[74vh] bg-black  rounded px-2 py-1">
      <div className=" outlooklg   w-full h-2/3"></div>
      <div className=" flex items-center gap-1 justify-center  w-full h-1/3">
        <h1 className=" text-3xl text-white font-semibold font-sans flex items-center justify-center">
          Outlook
        </h1>
        <button className=" text-white font-semibold text-2xl bg-blue-500 px-2 py-[2px]  rounded">
          Mail
        </button>
      </div>
    </div>
  );
};

export default Mail;
