import React from "react";
import game from "../assets/game.svg";
import game1 from "../assets/game (1).svg";
import game2 from "../assets/game (2).svg";
import game3 from "../assets/game (3).svg";
import game4 from "../assets/game (4).svg";
import game5 from "../assets/game (5).svg";
import game6 from "../assets/game (6).svg";
import game7 from "../assets/game (7).svg";
import game8 from "../assets/game (8).svg";

const Games = () => {
  return (
    <div className=" h-[80vh] px-2 py-1 ">
      <div className=" w-full items-start justify-start flex bg-blue-500 flex-col h-full ">
        <h1 className=" text-xl text-white font-semibold  pl-4 py-3">
          Windows Store
        </h1>
        <div className=" flex flex-wrap gap-1.5 px-1 ">
          <div className=" flex flex-col rounded p-3 bg-white">
            <img src={game} />
            <span>Game1</span>
          </div>
          <div className=" flex flex-col rounded p-3 bg-white">
            <img src={game1} />
            <span>Game2</span>
          </div>
          <div className=" flex flex-col rounded p-2.5 bg-white">
            <img src={game2} />
            <span>Game3</span>
          </div>
          <div className=" flex flex-col rounded p-2.5 bg-white">
            <img src={game3} />
            <span>Game4</span>
          </div>
          <div className=" flex flex-col rounded p-3 bg-white">
            <img src={game4} />
            <span>Game5</span>
          </div>
          <div className=" flex flex-col rounded p-4 bg-white">
            <img src={game5} />
            <span>Game6</span>
          </div>
          <div className=" flex flex-col rounded p-5 bg-white">
            <img src={game6} />
            <span>Game7</span>
          </div>
          <div className=" flex flex-col rounded p-4 bg-white">
            <img src={game7} />
            <span>Game8</span>
          </div>
          <div className=" flex flex-col rounded p-4 bg-white">
            <img src={game8} />
            <span>Game9</span>
          </div>
          <div className=" flex flex-col rounded p-3 bg-white">
            <img src={game} />
            <span>Game10</span>
          </div>
          <div className=" flex flex-col rounded p-3 bg-white">
            <img src={game1} />
            <span>Game11</span>
          </div>
          <div className=" flex flex-col rounded p-3 bg-white">
            <img src={game2} />
            <span>Game12</span>
          </div>
          <div className=" flex flex-col rounded p-3 bg-white">
            <img src={game3} />
            <span>Game13</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
