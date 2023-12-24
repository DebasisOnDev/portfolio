import xbox from "../assets/pass.jpg";
const Halo = () => {
  return (
    <div className=" h-[74vh] px-2 py-1 ">
      <div className=" w-full items-start justify-start flex flex-col h-full ">
        <div className=" bg-green-700 w-full h-full relative">
          <div className=" text-white font-semibold text-xl bg-green-600 px-3 py-1 absolute top-4  left-0">
            Microsoft
          </div>
          <img src={xbox} className=" w-full h-full object-cover" />
          <button className=" text-white font-semibold  text-sm absolute bottom-2 right-3">
            Click to Avail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Halo;
