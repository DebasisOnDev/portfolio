import game from "../assets/game.svg";
import game1 from "../assets/game (1).svg";
import game2 from "../assets/game (2).svg";
import game3 from "../assets/game (3).svg";
import game4 from "../assets/game (4).svg";

const Games = () => {
  return (
    <div className=" h-[74vh] flex items-center justify-center px-2 py-1 ">
      <div className=" w-full items-start justify-start mx-auto flex  flex-col h-full ">
        <h1 className=" text-xl text-white font-semibold  pl-4 py-3">
          Windows Store
        </h1>
        <div className=" flex flex-wrap gap-1 px-1 ">
          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game} />
            <span>Game1</span>
          </div>
          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game1} />
            <span>Game2</span>
          </div>
          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game2} />
            <span>Game3</span>
          </div>
          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game3} />
            <span>Game4</span>
          </div>
          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game4} />
            <span>Game5</span>
          </div>

          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game} />
            <span>Game10</span>
          </div>
          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game1} />
            <span>Game11</span>
          </div>
          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game2} />
            <span>Game12</span>
          </div>
          <div className=" flex flex-col rounded p-2 bg-gray-300">
            <img src={game3} />
            <span>Game13</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
