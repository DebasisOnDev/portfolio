import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

import img8 from "../assets/pexels-mike-bird-198162.jpg";
import img9 from "../assets/pexels-pixabay-37833.jpg";
import img10 from "../assets/pexels-pixabay-52500.jpg";
const Photo = () => {
  return (
    <div className=" h-[74vh] px-2 py-1 ">
      <div className=" w-full items-start gap-1 justify-start flex flex-col h-full ">
        <h1 className=" text-2xl font-semibold pl-4 pt-1.5 text-white ">
          Photos
        </h1>
        <div className=" flex w-full h-1/6 gap-1 ">
          <div className=" h-auto w-1/3 ">
            <img src={img1} className=" object-fill" />
          </div>
          <div className=" h-full w-2/3 ">
            <img src={img8} className=" object-contain" />
          </div>
        </div>
        <div className=" flex w-full h-1/6  gap-1 bg-black ">
          <div className=" h-full w-2/3 ">
            <img src={img9} className=" object-contain" />
          </div>
          <div className=" h-full w-1/3 ">
            <img src={img2} className=" object-fill" />
          </div>
        </div>
        <div className=" flex w-full h-1/6  gap-1 bg-black ">
          <div className=" h-full w-1/3 bg-sky-200">
            <img src={img3} className=" object-contain" />
          </div>
          <div className=" h-full w-1/3 bg-blue-400">
            <img src={img4} className=" object-contain" />
          </div>
          <div className=" h-full w-1/3 bg-violet-200">
            <img src={img5} className=" object-contain" />
          </div>
        </div>
        <div className=" flex w-full h-1/6  gap-1 bg-black ">
          <div className=" h-4/5 w-1/3 bg-red-200">
            <img src={img6} className=" object-contain" />
          </div>
        </div>
        {/* <div className=" flex w-full h-1/6  gap-1 bg-black ">
          <div className=" h-full w-2/3 bg-green-300"></div>
          <div className=" h-full w-1/3 bg-red-200">
            <img src={img7} className=" object-contain" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Photo;
