import call from "../assets/Outgoing Call.gif";
const Phone = () => {
  return (
    <div className=" h-[74vh] px-2 py-1 ">
      <div className=" w-full items-start justify-start flex flex-col h-full ">
        <div className=" flex items-center justify-center w-full h-full bg-blue-500">
          <img src={call} />
        </div>
      </div>
    </div>
  );
};

export default Phone;
